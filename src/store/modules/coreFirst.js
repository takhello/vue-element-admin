const actions = {
  coreFirst(store) {
    console.log('coreFirst')
    console.log(store)
  },
  coreFirst2(store) {
    console.log('coreFirst2')
  }
}

export default {
  namespaced: true,
  actions
}
