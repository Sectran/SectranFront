import { reactive, ref, onMounted, } from "vue";
import type { Ref } from "vue"


type requestApi = {
    listApi:Function,
    deleteApi:Function
}

type pageData = {
    pageNum: number,
    pageSize: number
}

// type resTable = {
//     list: any
//     PageInfo: {
//         total:number
//     }
// }

/**
 * 
 * @param SearchObject 搜索表单数据
 * @param requestApi 请求api的方法
 * @returns sizeChange 数据
 */
export const useTableHooks = <K extends object>(searchFrom: K, requestApi: requestApi) => {
    //表格头部颜色
    const headerStyle = { background: '#F8F8F9' }
    const FromSearchRef: Ref = ref<any>()
    //表格高度
    let tabHeight = ref<number>(100)
    //分页
    let pageData = reactive<pageData>({
        pageNum: 1,
        pageSize: 10
    })
    //表格是否正在加载
    const Table_loading = ref(false)


    //当前表格数据
    const tableData = ref([]);
    //分页参数
    const paginationOpt = reactive({
        current: 1,
        pageSize: 10,
        pageSizeOptions: [10, 20, 50, 100, 200],
        total: 0,
        onChange: (current: number, size: number) => {
            console.log(current)
            console.log(size)
            paginationOpt.current = current
            paginationOpt.pageSize = size
            pageData.pageNum = current
            pageData.pageSize = size
            requestList()
        },
    })



    /**
     * 点击搜索，确认搜索条件
     * @param data 搜索条件，如果没有传入就用初始化传入的搜素条件(主要功能是为了搜索条件可能需要二次处理)  非必传
     */
    const on_search = () => {
        requestList()
    }

    //表单重置
    const Fromreset = (FromRef: any) => {
        if (FromRef) {
            FromRef.resetFields()
        }
    }


    onMounted(() => {
        let tableDom = document.querySelector('.table-style')
        if (tableDom) {
            let Height = tableDom.getBoundingClientRect().height
            tabHeight.value = Height - 120
        }
        requestList()

    })

    //请求接口
    const requestList = () => {
        console.log({...pageData,...searchFrom})
        return
        // requestApi.listApi(fromData).then((res: { data: resTable }) => {
        //     let { list, PageInfo } = res.data
        //     tableData.value = list
        //     paginationOpt.total = PageInfo.total
        // })
    }
    //删除接口
    const handleDelete = (params:number) =>{
        requestApi.deleteApi(params)
    }


    return {
        headerStyle,
        tableData,
        FromSearchRef,
        Table_loading,
        tabHeight,
        paginationOpt,
        Fromreset,
        on_search,
        requestList,
        handleDelete
    };
}