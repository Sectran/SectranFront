<template>

    <input type="file" ref="fileInputRef" multiple style="display: none;" @change="startUploads" />
    <a ref="downloadRef" style="display:none;"></a>

    <div class="terminal-header">
        <div>{{ props.username }}@{{ props.host }}</div>
        <div @click="socketConnect" class="rigth-icon">
            <RedoOutlined style="font-size: 22px;" />
            Reconnect
        </div>
    </div>
    <template v-if="connectionStatus">
        <div class="terminal-div" ref="terminalDiv">
            <div id="terminal" ref="terminal"></div>
        </div>
    </template>
    <template v-else>
        <div class="break-style">已断开，请重新连接</div>
    </template>


</template>

<script setup lang='ts'>
import { onMounted, ref, reactive, onUnmounted, computed } from "vue";
import { RedoOutlined } from '@ant-design/icons-vue';
import { message } from "ant-design-vue";
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import { useI18n } from "vue-i18n";
import { debounce } from "lodash";
import "xterm/css/xterm.css";
import { Modal } from 'ant-design-vue';
import { secterm, } from "@/../secterm/secterm";
import { fileUpload } from "@/api/admin.ts"
import { useStore } from 'vuex'
import {
    sectermConnectRequest,
    sectermTeminalResize,
    sectermTeminalCharacters,
    sectermFileUploadReq,
    sectermFileUploadFulfilleTheAllReq,
    sectermFileCancelUploadReq
} from "@/common/method/proto";
import { initSocket } from "@/common/method/socket"

const props = defineProps<{
    username: string
    password: string
    submitLoading: boolean
    host: string
    index: number
    port: number
    multiActiveKey: number | undefined
    itemKey: number

}>();
const v1 = secterm.v1;
let terminal = ref(null);
let path = ref<string>(import.meta.env.VITE_Chard_Addr);

let websocket = <any>(null);
let term = reactive<any>({});
let fitAddon = reactive<any>({});

const { t } = useI18n();
const emit = defineEmits(["connectResult", 'tabName']);
let connectionStatus = ref<boolean>(true);
let inFileSelect = ref<boolean>(false)
let fileInputRef = ref<HTMLInputElement>();
const store = useStore()
onMounted(() => {
    initXterm();
    socketConnect()
})

const socketConnect = () => {
    let socket = initSocket(path.value, 5000, 'arraybuffer', onOpen, onData, onError, onClose);
    websocket = socket
}

const initXterm = () => {
    let copy = "";
    let _term: any = new Terminal({
        convertEol: true,
        disableStdin: false,
        cursorBlink: true,
        fontSize: 14,
        fontWeight: "500",
        rightClickSelectsWord: true,
        theme: {
            foreground: "#333333",
            background: "#FFFFFF",
            cursor: "#6376C2",
            selectionBackground: '#cccccc'

        },
    });
    _term.open(terminal.value);
    _term.prompt = (_: any) => {
        _term.write("\r\n\x1b[33m$\x1b[0m ");
        term.selectLines(0, 0);
    };
    _term.onKey((e: any) => {
        if (e.key == "\x16" || (e.domEvent.metaKey && e.key === 'c')) {
            navigator.clipboard.readText().then((clipText) => {
                sendCharacters(clipText);
            });
        } else if (e.key == "\x03" && term.hasSelection()) {
            navigator.clipboard.writeText(term.getSelection());
        }
    });
    fitAddon = new FitAddon();
    _term.loadAddon(fitAddon);
    fitAddon.fit();
    console.log(terminalDiv.value);
    if (terminalDiv.value) {
        observer.observe(terminalDiv.value);
    }




    _term.onTitleChange((e: any) => {
        // console.log(e);
        emit('tabName', props.index, e)
    });


    _term.onSelectionChange(() => {
        if (_term.hasSelection()) {
            copy = _term.getSelection();
            console.log("onselectchange", copy);
        }
    });
    if (!_term._initialized) {
        _term._initialized = true;
        _term.onData((raw: string) => {
            if (raw == '\x03') {
                // navigator.clipboard.writeText(copy);
                console.log("^C", copy);
                message.success("复制成功");
            } else if (raw == '\x16') {
                // _term.write(copy);
                console.log("1");
            } else {
                sendCharacters(raw)
            }

        });
    }
    term = _term;
};




const sendCharacters = (data: any) => { sectermTeminalCharacters(data, websocket) };

let downloadedFileList: { uuid: string | null | undefined }[] = []
let isdbeDownloading: boolean = false

const onData = async (msg: any) => {
    let sm = v1.SectermMessage.decode(new Uint8Array(msg.data));
    if (sm.secConnect) return connectManage(sm?.secConnect);
    if (sm?.secTerminal) return terminalManage(sm?.secTerminal)
    if (sm?.secFile) return fileManage(sm?.secFile)
    console.log(sm, "未知的消息类型")

};

const connectManage = (sm: secterm.v1.ISectermConnectMessage) => {
    if (sm.connectRes?.code != v1.SectermCode.LOGON_SUCCESS) {
        console.log("connect error deu to " + sm.connectRes?.code);
    } else {
        if (props.submitLoading) {
            emit("connectResult", false);
            localStorage.setItem("username", props.username);
            localStorage.setItem("password", props.password);
        }
    }

    console.log("connect success!");
}

const terminalManage = (sm: secterm.v1.ISectermTerminalMessage) => {
    if (sm?.characters?.Data) {
        term.write(sm?.characters?.Data);
    }
}
const fileManage = (sm: secterm.v1.ISectermFileMessage) => {
    if (sm?.fileTransReq?.upload == true) {
        // 上传请求
        Modal.confirm({
            title: '是否确定上传文件?',
            okText: '上传文件',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                if (fileInputRef.value) {
                    fileInputRef.value.click()
                    inFileSelect.value = true
                }
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    } else if (sm.fileTransRes) {
        //下载响应
        downloadedFileList.push({ uuid: sm.fileTransRes?.uuid })
        if (!isdbeDownloading) downloadFile()
    } else {
        console.log('file文件处理错误类型', sm?.fileTransReq?.upload)
    }
}

type FileList = {
    file: File
    totalChunks: number
    currentChunk: number
}


//文件列表
let filesList = ref<FileList[]>([])
const startUploads = async (event: any) => {
    console.log(event.target.files, 'event.target.files');
    if (event.target.files.length !== 0) {
        filesList.value = []
        let files = event.target.files
        console.log(files, 'files');
        let requestList = []
        for (let i = 0; i < files.length; i++) {
            const formData = new FormData();
            let file = files[i];
            formData.append('file', file);
            requestList.push(makeRequest(formData))
        }
        await Promise.all(requestList)
        sectermFileUploadFulfilleTheAllReq(websocket)

        if (fileInputRef.value) {
            (fileInputRef.value as HTMLInputElement).value = '';
        }

    } else {
        sectermFileCancelUploadReq(websocket)
        console.log("未选择文件");
    }
    inFileSelect.value = false
}

const makeRequest = async (formData: FormData) => {
    await fileUpload(formData).then(async (res: { data: string }) => {
        let FileUploadReqData: secterm.v1.SectermFileTransReq = {
            uuid: res.data,
            upload: true,
            cover: true,
            filepath: "",
            filename: "",
            proto: secterm.v1.TransProtocol.ZMODEM,
            mode: secterm.v1.ActionMode.ACTIVE,
            toJSON: function (): { [k: string]: any; } {
                throw new Error("Function not implemented.");
            }
        }
        return sectermFileUploadReq(FileUploadReqData, websocket)
    })
}

let downloadRef = ref<HTMLAnchorElement>();

const sleep = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const downloadFile = async () => {
    if (downloadedFileList.length === 0 || isdbeDownloading) return
    console.log('开始下载')
    isdbeDownloading = true
    const downloadedIitem = downloadedFileList.shift();
    const a: any = document.createElement('a');
    a.style.display = 'none';
    a.href = `${import.meta.env.VITE_Chard_FILE}/file/download?uuid=${downloadedIitem!.uuid}`;
    a.setAttribute('target', '_self')
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    await sleep(1000);
    isdbeDownloading = false
    downloadFile()
}

const onOpen = () => {
    let { cols, rows } = term;
    const token: string | null = localStorage.getItem("token");
    let connectParams = {
        protocol: v1.SectermProtocols.SECTERM_SSH,
        token: token,
        Colums: cols,
        Rows: rows,
        unmanaged: true,
        username: props.username,
        hostname: props.host,
        port: props.port,
        password: props.password,

    };
    console.log(connectParams)
    sectermConnectRequest(connectParams, websocket);
};
const onError = () => {
    if (props.submitLoading) {
        // emit("connectResult", true);
    }
    message.error(t("socket.error"));
};
const onClose = () => {
    // console.log(websocket)

    term.write(`\r\nSSH  ${props.host}: session closed\r\n`);
    // connectionStatus.value = false
    console.log("socket已经关闭");
};


const handleResize = debounce(() => {
    console.log(props.multiActiveKey)
    console.log(props.itemKey)



    if (props.multiActiveKey === props.itemKey) resizeEvent()

}, 500);


const observer = new ResizeObserver(handleResize);

onUnmounted(() => {

    observer.disconnect();
});

const terminalDiv = ref(null);

const resizeEvent = () => {
    try {
        fitAddon.fit();
        let { cols, rows } = term;
        console.log("resize", cols, rows);
        let resizeParams = { Colums: cols, Rows: rows };
        sectermTeminalResize(resizeParams, websocket);
        // console.log("resizeEvent");
    } catch (e: any) {
        console.log("e", e.message);
    }
}
const styleBackgroundColor = computed(() => store.state.globalConfiguration.colorPrimary);

</script>

<style scoped lang='less'>
.rigth-icon {
    display: flex;
    align-items: center;
    cursor: pointer;


}

.rigth-icon:hover {
    color: v-bind(styleBackgroundColor) !important;
}

.uploading-div {
    max-height: 60vh;
    overflow-y: auto;
    overflow-x: hidden;
}

.terminal-div {
    width: calc(100% - 30px);
    height: calc(100% - 30px - 40px);
    position: relative;
}

.file-name {
    width: 80px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 16px;
}

#terminal {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    padding: 10px 10px 20px 20px;

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #888;
        border-radius: 4px;
    }

    ::-webkit-scrollbar-track:hover {
        background-color: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: #555;
    }
}

.break-style {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

}


.terminal-header {
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    background-color: #EFEFEF;
}
</style>