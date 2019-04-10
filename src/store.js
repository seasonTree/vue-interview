import Vue from 'vue'
import Vuex from 'vuex'
import mockGenerator from './mock'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataList: []
  },
  mutations: {

  },
  getters: {
    getAverage: state => 0,
    getData: state => state.dataList
  },
  actions: {
    getDataCall (context) {
      // TODO
      mockGenerator()
    }
  }
})
