<template>
    <a-watermark v-bind="store.state.globalConfiguration.watermarkConfiguration">

        <div class="configuration-style">
            <div class="configuration-nav">
                <a-dropdown v-for="(item, itemIndex) in headMenu">
                    <a class="ant-dropdown-link" @click.prevent>
                        {{ item.name }}
                    </a>
                    <template #overlay>
                        <a-menu>
                            <template v-for="(el, index) in item.children">
                                <a-menu-divider v-if="el.name === 'divider'" />
                                <a-sub-menu v-else-if="el.children" :key="index + '' + itemIndex" :title="el.name">
                                    <a-menu-item v-for="i in el.children">{{ i.name }}</a-menu-item>
                                </a-sub-menu>
                                <a-menu-item :key="index" v-else>{{ el.name }}</a-menu-item>
                            </template>
                        </a-menu>
                    </template>
                </a-dropdown>
            </div>
            <div class="Content-style">
                <div class="Content-left " :style="{ width: `${leftWidth}px` }"
                    :class="[isSpread ? 'Content-left-lessen' : '', transitionClass ? 'transition-style' : '']">
                    <div class="Content-left-search"  >
                        <!-- <div class="search-sty" v-if="!isSpread">
                            <a-input :bordered="false" placeholder="" />
                            <SearchOutlined class="search-icon" />
                        </div> -->
                        <SyncOutlined class="menu-icon" @click="refreshTree"  v-if="!isSpread"/>
                        <MenuUnfoldOutlined class="menu-icon" @click="onSpread" />

                    </div>
                    <div class="Content-left-tree" v-if="!isSpread" @scroll="handleScroll">
                        <div v-for="(item, index) in treeData" :key="index" class="tree-node" :ref="treeRefArr[index]">
                            <div class="items-center tree-parent-node " @click="item.isUnfold = !item.isUnfold">
                                <DownOutlined v-if="item.isUnfold" class="unfold-icon" />
                                <RightOutlined v-else class="unfold-icon" />
                                <img v-if="item.icon === 'linux'" src='@/assets/img/linux.png' alt="">
                                <img v-if="item.icon === 'windows'" src='@/assets/img/windows.png' alt="">
                                <div>
                                    {{ item.title }}
                                </div>
                            </div>
                            <template v-if="item.isUnfold">
                                <div v-for="(child, ins) in item.children" :key="ins" class="tree-child-node">
                                    <div @click="onOperatingSystem(child)" class="tree-child-div">
                                        <DownOutlined v-if="child.isUnfold" class="unfold-icon" />
                                        <RightOutlined v-else class="unfold-icon" />
                                        <a-tooltip>
                                            <template #title>{{ child.name }}({{ child.host }})</template>
                                            <div class="text-hidden">{{ child.name }}({{ child.host }})</div>
                                        </a-tooltip>

                                    </div>
                                    <template v-if="child.isUnfold">
                                        <div v-for="(childs, inss) in child.children" :key="inss"
                                            class="tree-child-node hover-bg"
                                            @click="onAccount(child.name, child.host, childs.port, childs)">
                                            <div class="text-hidden">{{ childs.username }}</div>
                                        </div>
                                    </template>
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
                <div class="resize-style" @mousedown="mouseDown"></div>
                <div class="Content-right">
                    <!-- <xterm @connectResult="connectResult" :submitLoading="submitLoading.valueOf" /> -->
                    <div class="xterm-div" v-if="multiList.length !== 0">
                        <a-tabs v-model:activeKey="multiActiveKey"  hide-add type="editable-card" :forceRender="true"
                            @edit="(key: number) => onTabsEdit(key, 3)" style="width:100%" >
                            <a-tab-pane v-for="(item, index) in multiList" :key="item.key" :closable="true"
                                class="tab-pane" display-directive="show" >
                                <template #tab>
                                    <a-dropdown :trigger="['contextmenu']">
                                        <div style="height: 100%;width: 100%;">
                                            {{ item.name }}
                                        </div>
                                        <template #overlay>
                                            <a-menu>
                                                <a-menu-item key="1" @click="onTabsEdit(item.key, 3)">关闭</a-menu-item>
                                                <!-- <a-menu-item v-if="index !== 0" key="1"
                                                    @click="onTabsEdit(multiList[index - 1].key)">关闭左边</a-menu-item> -->
                                                <a-menu-item v-if="index !== multiList.length - 1" key="2"
                                                    @click="onTabsEdit(item.key, 0)">关闭右边</a-menu-item>
                                                <a-menu-item key="3" @click="onTabsEdit(item.key, 1)">关闭其他</a-menu-item>
                                                <a-menu-item key="4" @click="onTabsEdit(item.key, 2)">全部关闭</a-menu-item>
                                                <a-menu-item key="5" @click="onTabAdd(item, index)">新建会话</a-menu-item>
                                            </a-menu>
                                        </template>
                                    </a-dropdown>
                                </template>
                                <template v-if="item.type === 'ssh'">
                                    <xterm ref="childXterm" @connectResult="connectResult" :host="item.host"
                                        :port="item.port" :submitLoading="submitLoading.valueOf"
                                        :username="item.username"
                                        @tabName="(index: number, name: string) => multiList[index].name = name"
                                        :password="item.password" :index="index" :itemKey="item.key" :multiActiveKey="multiActiveKey" />
                                </template>
                                <template v-else="item.type === 'sftp'">
                                    <sftp @connectResult="connectResult" :host="item.host" :port="item.port"
                                        :submitLoading="submitLoading.valueOf" :username="item.username"
                                        @tabName="(index: number, name: string) => multiList[index].name = name"
                                        :password="item.password" :index="index" />
                                </template>
                            </a-tab-pane>
                            <template #rightExtra>
                                <div class="tab-right">
                                    <!-- <PlusSquareOutlined class="nav-icon" /> -->
                                </div>
                            </template>
                        </a-tabs>
                    </div>

                    <div v-else class="placeholder-style">
                        <div>
                            <div>切换实例</div>
                            <div>最近访问</div>
                            <div>会话列表</div>
                            <div>显示/隐藏菜单栏</div>
                            <div>显示/隐藏按钮栏</div>
                            <div>显示/隐藏状态栏</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- <input type="file" ref="fileInputRef" multiple @change="beforeUpload" /> -->

        <!-- <div @click="xz">
            132131123
        </div> -->


        <a-modal v-model:open="connectOpen" :title='`连接${connectName}`' :footer="null" :width="800">
            <a-watermark v-bind="store.state.globalConfiguration.watermarkConfiguration">
                <a-form :model="connectFormState" name="basic" @finish="on_connectFinish" :label-col="{ span: 3 }"
                    :wrapper-col="{ span: 21 }" autocomplete="off">
                    <a-form-item label="登录方式" name="network">
                        <a-radio-group v-model:value="connectFormState.network">
                            <a-radio :value="1">自动登录</a-radio>
                            <a-radio :value="2">手动登录</a-radio>
                        </a-radio-group>
                    </a-form-item>

                    <a-form-item label="认证方式" name="attestationType">
                        <a-radio-group v-model:value="connectFormState.attestationType">
                            <a-radio :value="1">密码认证</a-radio>
                            <a-radio :value="2">SSH密钥认证</a-radio>
                        </a-radio-group>
                    </a-form-item>


                    <a-form-item label="终端类型" name="attestationType">
                        <a-radio-group v-model:value="connectFormState.type">
                            <a-radio value="ssh">SSH</a-radio>
                            <a-radio value="sftp">SFTP</a-radio>
                        </a-radio-group>
                    </a-form-item>


                    <a-form-item label="账号" name="username"
                        :rules="[{ required: true, message: 'Please input your username!' }]">
                        <a-input v-model:value="connectFormState.username" :disabled="connectFormState.network === 1" />
                    </a-form-item>
                    <template v-if="connectFormState.attestationType === 1">
                        <a-form-item label="密码" name="password"
                            :rules="[{ required: true, message: 'Please input your password!' }]"
                            v-if="connectFormState.network === 2">
                            <a-input-password v-model:value="connectFormState.password" />
                        </a-form-item>
                    </template>
                    <template v-else-if="connectFormState.attestationType === 2 && connectFormState.network === 2">

                        <a-form-item label="私钥" name="password"
                            :rules="[{ required: true, message: 'Please input your username!' }]">
                            <div>
                                <div class="private-key">
                                    <a-textarea class="textarea-style" :autosize="false"
                                        v-model:value="connectFormState.password">
                                    </a-textarea>
                                    <a-form-item-rest>
                                        <a-upload name="file" :file-list="[]"
                                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                            :before-upload="beforeUpload">
                                            <a-button>
                                                <upload-outlined></upload-outlined>
                                            </a-button>
                                        </a-upload>
                                    </a-form-item-rest>
                                    <div class="shibboleth-style">
                                        <div class="shibboleth-text">
                                            私钥口令：
                                        </div>
                                        <a-form-item-rest>
                                            <a-input class="shibboleth-input" v-model:value="connectFormState.password"
                                                placeholder="Basic usage">
                                                <template #prefix>
                                                    <LockOutlined />
                                                </template>
                                            </a-input>
                                        </a-form-item-rest>
                                    </div>
                                </div>
                            </div>
                        </a-form-item>
                    </template>

                    <a-form-item :wrapper-col="{ offset: 0, span: 24 }">
                        <a-button :loading="submitLoading" style="width: 100%" type="primary" html-type="submit">
                            {{ t("public.Submit") }}
                        </a-button>
                    </a-form-item>
                </a-form>
            </a-watermark>
        </a-modal>
    </a-watermark>
</template>


<script setup lang='ts'>
import {
    onMounted,
    ref,
    reactive,
    createVNode,
    onUnmounted,
} from "vue";
import { useI18n } from "vue-i18n";
import { headMenu } from "./menu.ts"
import { useStore } from 'vuex'
import { deviceList, accountList } from "@/api/admin"
import { UploadOutlined, LockOutlined, RightOutlined, DownOutlined ,SyncOutlined} from '@ant-design/icons-vue';
import { ExclamationCircleOutlined, } from '@ant-design/icons-vue';
import { Modal } from 'ant-design-vue';
import { resTable } from "@/common/type/type"
import { MenuUnfoldOutlined, } from '@ant-design/icons-vue';
import { throttle } from 'lodash';
import { fileUpload } from "@/api/admin.ts"
import { message } from "ant-design-vue";
import xterm from "./components/xterm.vue"
import sftp from "./components/sftp.vue";

type MultiList = {
    name: string
    username: string
    password: string
    key: number
    host: string
    port: number
    type: string | undefined

}
type TableType = {
    name: string
    host: string
    id: number
}

const store = useStore()
const { t } = useI18n();
let isSpread = ref<boolean>(false);
let connectOpen = ref<Boolean>(false);
let connectName = ref<string>('')
const submitLoading = ref<Boolean>(false);
const multiActiveKey = ref<undefined | number>(undefined);
const soleKey = ref<number>(0);


let transitionClass = ref<Boolean>(true)
const treeData = ref<any>([
    {
        title: 'Linux',
        key: '0-0',
        icon: "linux",
        isUnfold: false,
        children: [],
    }, {
        title: 'Windows',
        key: '0-1',
        icon: "windows",
        isUnfold: false,
        children: [],
    },
]);
type accounType = {
    username: string
    password: string
}

const onOperatingSystem = async (item: any) => {
    console.log(item.id)
    if (!item.isUnfold && !item.children) {
        await accountList({ page: 1, pageSize: 100, deviceId: item.id, detail: true }).then((res: { data: resTable<accounType[]> }) => {
            let { data } = res.data
            item.children = data
            console.log(item)
        })
    }

    item.isUnfold = !item.isUnfold
}
const onAccount = (name: string, host: string, port: number, childs: accounType) => {
    connectFormState.username = childs.username
    connectFormState.password = childs.password
    connectFormState.port = port
    connectFormState.host = host
    connectName.value = name
    connectOpen.value = true
}
const childXterm = ref([]);
const onSpread = () => {
    isSpread.value = !isSpread.value
    setTimeout(() => {
        childXterm.value.forEach((child: any) => {
            if (child && child.resizeEvent) {
                child.resizeEvent();
            }
        });
    }, 2000);
}



onMounted(() => {
    document.addEventListener('mouseup', handleMoveThrottled)
    window.addEventListener("beforeunload", (e: any) => {
        e.returnValue = "您确定要离开吗？请确认是否保存您的更改。";
        e.preventDefault();
    });
    refreshTree()

});

const refreshTree = () =>{
    for (let index = 0; index < treeData.value.length; index++) {
        deviceList({ page: 1, pageSize: 100, type: treeData.value[index].title }).then((res: { data: resTable<TableType[]> }) => {
            console.log(res)
            let { data } = res.data
            treeData.value[index].children = data
        })
    }
}

onUnmounted(() => {
    document.removeEventListener('mouseup', handleMoveThrottled)
})
let treeRefArr = ref([ref(null), ref(null)])

const handleScroll = (event: any) => {
    console.log(event)
    // const target = event.target;
    // console.log(target.scrollTop)
    // let treeRef = document.querySelector(`Linux`)
    // console.log(treeRefArr.value[1].value[0].scrollTop)
};


let leftWidth = ref<number>(260);
//拖动改变宽度
// 鼠标移动事件，将鼠标指针相对于屏幕的 X 轴坐标赋值给需要动态变化的元素宽度
const mouseMove = (event: any) => {
    if (event.screenX > 200 && event.screenX < 500) leftWidth.value = event.screenX
}
// 鼠标按下事件
const mouseDown = (event: any) => {
    document.addEventListener('mousemove', mouseMove)
    transitionClass.value = false
    leftWidth.value = event.screenX
}
// 鼠标释放事件
const mouseUp = () => {
    transitionClass.value = true
    const moveX = leftWidth.value > 500 ? 500 : leftWidth.value < 200 ? 200 : leftWidth.value
    leftWidth.value = moveX
    document.removeEventListener('mousemove', mouseMove)
}
// 鼠标释放节流事件
const handleMoveThrottled = throttle(mouseUp, 0)
interface ConnectFormState {
    username: string;
    password: string;
    attestationType: number
    network: number
    remember: boolean
    host: string
    port: number
    type: string | undefined
}

const connectFormState = reactive<ConnectFormState>({
    username: "",
    password: "",
    attestationType: 1,
    network: 1,
    remember: false,
    host: "",
    port: 0,
    type: 'ssh'
});
let multiList = ref<MultiList[]>([])
const on_connectFinish = () => {
    let { username, password, host, port, type } = connectFormState

    console.log(username, password, host, port, type);
    soleKey.value++
    multiList.value.push({ username, password, name: '', host, key: soleKey.value, port, type })
    multiActiveKey.value = soleKey.value
    submitLoading.value = true
};

const onTabAdd = (item: MultiList, index: number) => {
    soleKey.value++
    index++
    console.log(index)
    multiList.value.splice(index, 0, { ...item, name: '', key: soleKey.value })
    multiActiveKey.value = soleKey.value
    submitLoading.value = true
}
/**
 * 
 * @param targetKey 当前操作的key
 * @param type 关闭类型 0关闭右边 1关闭其他 2关闭全部 3关闭当前
 */
const onTabsEdit = (targetKey: number, type: number) => {
    console.log(targetKey, type)
    let targetKeyIndex = multiList.value.findIndex((item: MultiList) => item.key === targetKey)

    Modal.confirm({
        title: '再次确认',
        icon: createVNode(ExclamationCircleOutlined),
        content: `${['Close tabs to the right', 'Close other tabs', 'Close all', 'Close at present'][type]}?`,
        onOk() {
            switch (type) {
                case 0:
                    multiList.value.splice(targetKeyIndex + 1)
                    if (!multiList.value.some((item: MultiList) => item.key === multiActiveKey.value)) {
                        console.log(multiList.value.at(-1)?.key)
                        multiActiveKey.value = multiList.value.at(-1)?.key
                    }
                    break;
                case 1:
                    multiList.value = multiList.value.filter((item: MultiList) => item.key === targetKey)
                    multiActiveKey.value = targetKey;
                    break;
                case 2:
                    multiList.value = []
                    multiActiveKey.value = undefined
                    break;
                case 3:
                    multiList.value.splice(targetKeyIndex, 1)
                    if (targetKey === multiActiveKey.value) {
                        multiActiveKey.value = multiList.value.at(-1)?.key
                    }
            }
        },
        onCancel() { },
    });

}



const beforeUpload = (event: any) => {

    let file = event.target.files
    console.log(file);
    if (file && file?.length === 0) {
        alert('请选择至少一个文件');
        return;
    }

    // 创建FormData对象
    const formData = new FormData();
    for (let i = 0; i < file!.length; i++) {
        formData.append('file', file[i]);
    }

    console.log(formData);
    fileUpload(formData).then(() => {
        message.success("上传成功")
    })
};




const connectResult = (modalState: boolean) => {
    submitLoading.value = false
    connectOpen.value = modalState
}

</script>
<style scoped lang='less'>
.xterm-div {
    width: 100%;
    height: 100%;
}

::v-deep(.ant-tabs) {
    height: 100%;

    .ant-tabs-content {
        height: 100%;
    }
}

.private-key {
    display: flex;

    .textarea-style {
        height: 80px;
        border-radius: 6px 0 0 6px;
        border-right: none;

    }

    button {
        height: 100%;
        border-radius: 0 6px 6px 0;
    }

    .shibboleth-style {
        display: flex;
        margin-left: 40px;

        .shibboleth-text {
            white-space: nowrap;
            margin-top: 10px;
        }

        .shibboleth-input {
            width: 200px;
            height: 45px;
        }
    }

    ::v-deep(.ant-upload) {
        height: 100%;
    }
}


.configuration-style {
    min-width: 1000px;

    .configuration-nav {
        height: 40px;
        padding: 0 40px;
        line-height: 40px;
        background: #463e3e;
        color: #ffffff;
        font-size: 14px;
        box-sizing: border-box;

        ::v-deep(.ant-dropdown-link) {
            margin-right: 20px;
        }
    }

    .Content-style {
        height: calc(100vh - 40px);
        display: flex;

        .Content-left-lessen {
            width: 60px !important;

        }

        .transition-style {
            transition: width 0.3s;
        }

        .Content-left {
            background: #181818;
            display: flex;
            flex-direction: column;
            height: 100%;
            padding: 20px 10px;
            box-sizing: border-box;

            .Content-left-search {
                display: flex;
                justify-content: space-between;
                height: 30px;

                .menu-icon {
                    color: #ffffff;
                    font-size: 18px;
                }
            }

            .Content-left-tree {
                flex: 1;
                overflow-y: auto;
                scrollbar-color: #434343 #181818;
            }

            .Content-left-icon {
                height: 80px
            }
        }

        .Content-right {
            flex: 1;
            overflow: hidden;

            ::v-deep(.ant-tabs-nav) {
                margin: 0;
            }

            // ::v-deep(.ant-tabs-tab-active) {
            //     background: #2E445C;
            //     color: #ffffff;
            //     border-radius:0;
            // }
            // ::v-deep(.ant-tabs-ink-bar) {
            //     background: #2E445C;
            // }

            .item-nav-style {
                background: #2E445C;
                color: #ffffff;
                font-size: 16px;
                padding: 0 20px;
                height: 30px;
                line-height: 30px;

            }

        }

        .placeholder-style {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;

            div {
                div {
                    font-size: 18px;
                    margin-bottom: 20px;
                    color: #267bfc;
                }
            }
        }
    }
}

.tab-pane {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.tab-right {
    padding-right: 20px;
}

.unfold-icon {
    font-size: 16px;
    color: #ffffff;
}

.tree-node {
    color: #ffffff;
    margin-bottom: 10px;

    img {
        width: 20px;
        height: auto;
        margin: 0 5px;
    }

    .tree-parent-node {
        font-size: 16px !important;
        background-color: #181818;
    }

    .tree-child-node {
        margin: 5px 0 5px 20px;
        font-size: 15px;
        padding: 3px;
        border-radius: 5px;
    }

}


.search-sty {
    color: #333;
    width: auto;
    border-radius: 20px;
    height: 100%;
    display: inline-block;
    position: relative;
    overflow: hidden;
    // background-image: linear-gradient(315deg, #6772FF 0, #00F9E5 100%);
    background-color: #ffffff;
    background-size: 104% 104%;
    cursor: pointer;
    display: flex;
    align-items: center;
}

.search-icon {
    position: absolute;
    right: 0;
    top: 0;
    width: 40px;
    height: 100%;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    color: #333333;
}

.search-sty input {
    display: inline-block;
    background: 0 0;
    border: none;
    padding-left: 20px;
    box-sizing: border-box;
    width: 50px;
    vertical-align: 4px;
    font-size: 16px;
    transition: all .2s linear;
}

.search-sty:hover input {
    display: inline-block;
    width: 250px;
    padding-right: 50px;
}

.search-sty input:not(:placeholder-shown) {
    display: inline-block;
    width: 250px;
    padding-right: 50px
}

.resize-style {
    width: 2px;
    background-color: #ffffff;
    height: 100%;
    cursor: w-resize;
}

.tree-child-div {
    display: flex;
    align-items: center;
    width: 100%;
}

.text-hidden {
    padding-left: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;
}
</style>
