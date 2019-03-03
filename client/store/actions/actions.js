// action专门处理异步情况 mutation处理同步

export default {
  updateCounterAsync (store, data) {
    setTimeout( () => {
      store.commit('updateCounter', data.num)
    }, data.time)
  }
}
