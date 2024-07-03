// src/store/index.js

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state() {
    return{
      showEffectBtn: '',
      showMenuFlag: false,
    }
  },
  mutations: {
    setShowEffectBtn(state, data) {
      state.showEffectBtn = data
    },
    setShowMenuFlag(state, data) {
      state.showMenuFlag = data
    }
  },
  actions: {
    updateShowEffectBtn({ commit }, data) {
      commit('setShowEffectBtn', data)
    },
    updateShowMenuFlag({ commit }, data) {
      commit('setShowMenuFlag', data);
    }
  },
  getters: {
    getShowEffectBtn(state) {
      return state.showEffectBtn;
    },
    getShowMenuFlag(state) {
      return state.showMenuFlag;
    }
  },
  modules: {
    // 모듈 정의
  }
})
