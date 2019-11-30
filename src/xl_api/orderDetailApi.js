export default {
    //订单详情页
    async getOrderData(orderId) {
        let res = await fetch('http://117.78.9.95/api/order_detail/?order_id='+orderId)
        let data = await res.json()
        return data
    },

    //取消订单页面的接口
    async delOrder(orderId) {
        let res = await fetch('http://117.78.9.95/api/order_detail/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            },
            body: JSON.stringify({
                "order_id": orderId,   //
                "type_": 1
            })
        })
        return await res.json()
    },

    //去付款
    async goPay(userId,orderId,payPrice) {
        let res = await fetch('http://117.78.9.95/api/pay/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            },
            body: JSON.stringify({
                "ud_id":userId,
                "order_id": orderId,   //
                "price": payPrice
            })
        })
        return await res.json()
    },

}