// src/store/index.js

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state() {
    return{
      showEffectBtn: false,
      showMenuFlag: false,
      isPopupOpen: false,
      typeFlag: '',
    }
  },
  mutations: {
    setShowEffectBtn(state, data) {
      state.showEffectBtn = data
    },
    setShowMenuFlag(state, data) {
      state.showMenuFlag = data
    },
    TOGGLE_POPUP(state, type) {
      state.isPopupOpen = !state.isPopupOpen;
      state.typeFlag = type || '';
    },
    CLOSE_POPUP(state) {
      state.isPopupOpen = false;
      state.typeFlag = '';
    },
  },
  actions: {
    updateShowEffectBtn({ commit }, data) {
      commit('setShowEffectBtn', data)
    },
    updateShowMenuFlag({ commit }, data) {
      commit('setShowMenuFlag', data);
    },
    togglePopup({ commit }, type) {
      commit('TOGGLE_POPUP', type);
    },
    closePopup({ commit }) {
      commit('CLOSE_POPUP');
    },
  },
  getters: {
    getShowEffectBtn(state) {
      return state.showEffectBtn;
    },
    getShowMenuFlag(state) {
      return state.showMenuFlag;
    },
    isPopupOpen(state) {
      return state.isPopupOpen
    },
    typeFlag(state) {
      return state.typeFlag
    },
  },
  modules: {
    // 모듈 정의
  }
})
