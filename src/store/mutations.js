export  default {
  // addCounter(state, payload) {
  //   const res = state.cartList.find(item => item.iid === payload.iid)
  //   res.count += 1
  // },
  // addToCart(state, payload) {
  //   state.cartList.push(payload)
  // },
  addCart(state, info) {
    // 1.查看是否添加过
    const oldInfo = state.cartList.find(item => item.iid === info.iid)

    // 2.+1或者新添加
    if (oldInfo) {
      oldInfo.count += 1
    } else {
      info.count = 1
      info.checked = true
      state.cartList.push(info)
    }
  },
  allCheckedTrue(state){
    state.cartList.forEach((item, index) => {
      item.checked = true
    })
  },
  allCheckFalse(state){
    state.cartList.forEach((item, index) => {
      item.checked = false
    })
  }
}
