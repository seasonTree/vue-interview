import Vue from 'vue'
import Vuex from 'vuex'
import mockGenerator from './mock'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataList: [],
    avg: 0
  },
  mutations: {
    setData (state, value) {
      state.dataList = state.dataList.concat(value)
      let sum = 0
      state.dataList.map(item => {
        sum += item.data
      })
      state.avg = (sum / state.dataList.length).toFixed(2)
    }
  },
  getters: {
    getAverage: state => state.avg,
    getData: state => state.dataList
  },
  actions: {
    getDataCall ({ commit }, done) {
      mockGenerator().then(data => {
        commit('setData', data)
        done && done()
      }).catch(error => {
        console.log(`获取数据失败.${error}`)
      })
    }
  }
})
