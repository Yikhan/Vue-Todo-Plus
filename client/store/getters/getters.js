// getters可以视为一种computed 但是是在共享的数据state里面进行计算处理的computed

export default {
  fullName (state) {
    return `${state.firstName} ${state.lastName}`
  }
}
