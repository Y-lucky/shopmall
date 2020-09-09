export default {
    addtoCart(context, payload) {
        return new Promise((resolve) => {
            // 查找之前数组中是否有该属性商品
            let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
            if (oldProduct) {
                // 产品数量加1
                context.commit('addCounter', oldProduct)
                resolve('成功加入购物车')
            } else {
                // 添加新的产品
                payload.count = 1
                context.commit('addCart', payload)
                resolve('成功加入购物车')
            }
        })
    }
}