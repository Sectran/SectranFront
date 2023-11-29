//全局配置
type configurationStore = {
    colorPrimary: string | null
    theme: string | null
    isCompact:boolean
}

export default {
    namespaced: true,
    state: {
        colorPrimary: localStorage.getItem('colorPrimary') || "rgb(22, 119, 255)",
        theme: localStorage.getItem('theme') || "theme-light",
        isCompact:false
    },
    mutations: {
        alterColorPrimary(state: configurationStore, color: string) {
            state.colorPrimary = color
            localStorage.setItem('colorPrimary', color)
        },
        alterTheme(state: configurationStore) {
            state.theme = state.theme == 'theme-light' ? 'theme-dark' : 'theme-light'
            localStorage.setItem('theme', state.theme)
            window.document.documentElement.setAttribute('data-theme', state.theme)
        },
        compactMutations(state: configurationStore) {
            state.isCompact = ! state.isCompact
        }

    }

}