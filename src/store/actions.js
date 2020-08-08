export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      if (oldProduct){
          resolve('当前商品数量+1')
      }
      else {
          resolve('添加了新的商品')
      }
      context.commit('addCart', payload)
    })
  }
}
