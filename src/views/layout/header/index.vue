<template>
    <a-layout-header class="flex-space-between-center header-style">
        <div class="header-letf">
            <menu-unfold-outlined v-if="collapsed" class="nav-icon" @click="on_icon(false)" />

            <menu-fold-outlined v-else class="nav-icon" @click="on_icon(true)" />
            <!-- <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Breadcrumb> -->
        </div>
        <div class="nav-right">
            <!-- <FullscreenOutlined v-if="store.state.globalConfiguration.isCompact"
                @click="store.commit('globalConfiguration/compactMutations')" class="nav-icon nav-right-space" />
            <FullscreenExitOutlined v-else @click="store.commit('globalConfiguration/compactMutations')"
                class="nav-icon nav-right-space" /> -->
            <WindowsOutlined class="nav-icon nav-right-space" @click="onOutsideChain('/sftp')" />
            <LaptopOutlined class="nav-icon nav-right-space" @click="onOutsideChain('/terminal')" />
            <BulbOutlined @click="on_theme" class="nav-icon nav-right-space" />
            <a-dropdown>
                <TranslationOutlined @click.prevent class="nav-icon nav-right-space" />
                <template #overlay>
                    <a-menu>
                        <a-menu-item :class="{ optCalss: langSrt === item.lang }" v-for="item in languageArr"
                            :key="item.lang" @click='on_language(item.lang)'>
                            {{ item.name }}
                        </a-menu-item>
                    </a-menu>
                </template>
            </a-dropdown>
            <a-dropdown>
                <a class="nav-right-space" @click.prevent>
                    <div class="theme-color-div"
                        :style="{ 'background-color': store.state.globalConfiguration.colorPrimary }">
                    </div>
                </a>
                <template #overlay>
                    <a-menu>
                        <!-- :class="{ optCalss: langSrt === item.lang }"  -->
                        <!--  -->
                        <a-menu-item v-for="item in themeColors" :key="item.color" @click='on_color(item)'>
                            <div class="theme-color">
                                <div class="theme-color-div" :style="{ 'background-color': item.color }"></div>
                                {{ item.name }}
                            </div>
                        </a-menu-item>
                    </a-menu>
                </template>
            </a-dropdown>

            <a-dropdown>
                <a-avatar shape="square" class="nav-right-space">
                    <template #icon>
                        <UserOutlined class="nav-icon" />
                    </template>
                </a-avatar>
                <template #overlay>
                    <a-menu @click="onMenu">
                        <a-menu-item key="0">
                            退出登录
                        </a-menu-item>
                    </a-menu>
                </template>
            </a-dropdown>




        </div>
    </a-layout-header>
</template>

<script setup lang="ts">
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    TranslationOutlined,
    BulbOutlined,
    LaptopOutlined,
    UserOutlined,
    WindowsOutlined
    // FullscreenExitOutlined,
    // FullscreenOutlined
} from "@ant-design/icons-vue";
// Breadcrumb
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
import type { MenuProps } from 'ant-design-vue';

const { locale } = useI18n()
const store = useStore()
const router = useRouter();
let langSrt = ref(localStorage.getItem('lang') || 'zh')
type languageType = {
    name: string,
    lang: string
}

type themeColorsType = {
    color: string,
    name: string,
}
let languageArr: languageType[] = [
    {
        name: '中文',
        lang: 'zh'
    },
    {
        name: 'English',
        lang: 'en'
    }
]

let themeColors: themeColorsType[] = [
    {
        name: "拂晓蓝",
        color: "rgb(22, 119, 255)"
    }, {
        name: "薄暮",
        color: "rgb(245, 34, 45)"
    }, {
        name: "火山",
        color: "rgb(250, 84, 28)"
    }, {
        name: "日暮",
        color: "rgb(250, 173, 20)"
    }, {
        name: "明青",
        color: "rgb(19, 194, 194)"
    }, {
        name: "极光绿",
        color: "rgb(82, 196, 26)"
    }, {
        name: "极客蓝",
        color: "rgb(47, 84, 235)"
    },
    {
        name: "酱紫",
        color: "rgb(114, 46, 209)"
    }
]

onMounted(() => {
    console.log('3.-组件挂载到页面之后执行-------onMounted,header')
})
/**
 * 点击切换全局化语言
 * @param value 
 */
const on_language = (lang: string) => {
    langSrt.value = lang
    locale.value = lang
    localStorage.setItem('lang', lang)
}
const { collapsed } = defineProps(['collapsed'])
const emit = defineEmits(['update:collapsed'])
const on_icon = (type: boolean) => {
    emit("update:collapsed", type)
}
const on_color = (item: themeColorsType) => {
    store.commit('globalConfiguration/alterColorPrimary', item.color)
}

const on_theme = () => {
    store.commit('globalConfiguration/alterTheme')
}

const onOutsideChain = (path:string) =>{
    const url = router.resolve({
        path ,
    });
    window.open(url.href);
    // router.replace('/admin/user',)
}


const onMenu: MenuProps['onClick'] = ({ key }) => {
    switch (key) {
        case '0':
            localStorage.removeItem("token")
            router.replace({ path: '/' });
            break;
    }
};
</script>

<style scoped lang="less">
.header-style {
    background: var(--theme-bg);
    padding: 0 20px;
    border-bottom: 2px solid var(--theme-border-color);

    .header-letf {
        display: flex;
    }
}

.nav-right {
    display: flex;
    align-items: center;

    a {
        display: flex;
    }

    .nav-right-space {
        margin-left: 20px;
    }


}

.theme-color {
    display: flex;
    align-items: center;
}

.theme-color-div {
    width: 20px;
    height: 20px;
    margin-right: 5px;
}
</style>