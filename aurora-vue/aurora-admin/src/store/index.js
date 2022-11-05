import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    collapse: false,
    tabList: [{ name: '首页', path: '/' }],
    userInfo: null,
    userMenus: [],
    articleListState: {
      page: 1
    },
    categoryState: {
      page: 1
    },
    tagState: {
      page: 1
    }
  },
  mutations: {
    saveTab(state, tab) {
      if (state.tabList.findIndex((item) => item.path === tab.path) == -1) {
        state.tabList.push({ name: tab.name, path: tab.path })
      }
    },
    removeTab(state, tab) {
      var index = state.tabList.findIndex((item) => item.name === tab.name)
      state.tabList.splice(index, 1)
    },
    resetTab(state) {
      state.tabList = [{ name: '首页', path: '/' }]
    },
    trigger(state) {
      state.collapse = !state.collapse
    },
    login(state, user) {
      sessionStorage.setItem('token', user.token)
      state.userInfo = user
    },
    saveUserMenus(state, userMenus) {
      state.userMenus = userMenus
    },
    logout(state) {
      state.userInfo = null
      sessionStorage.removeItem('token')
      state.userMenus = []
    },
    updateAvatar(state, avatar) {
      state.userInfo.avatar = avatar
    },
    updateUserInfo(state, user) {
      state.userInfo.nickname = user.nickname
      state.userInfo.intro = user.intro
      state.userInfo.webSite = user.webSite
    },
    updateArticleListState(state, articleListState) {
      state.articleListState.page = articleListState.page
    },
    updateCategoryState(state, categoryState) {
      state.categoryState.page = categoryState.page
    },
    updateTagState(state, tagState) {
      state.tagState.page = tagState.page
    }
  },
  actions: {},
  modules: {},
  plugins: [
    createPersistedState({
      storage: window.sessionStorage
    })
  ]
})
