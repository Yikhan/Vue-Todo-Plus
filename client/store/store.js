import Vuex from 'vuex'
import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'

const isDev = process.env.NODE_ENV === 'development'

export default () => {
  return new Vuex.Store({
    // 强制不能在mutation外改变state 建议不要在正式发布里面使用
    strict: isDev,
    state: defaultState,
    mutations,
    getters,
    actions,
    // Vuex的模块化功能
    modules: {

    }
  })
}
