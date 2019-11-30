export default {

    //获取渲染全部订单页面的接口
    async getOrderData(userId) {
        let res = await fetch('http://117.78.9.95/api/order/?ud_id=' + userId + '&type_=6')
        let data = await res.json()
        return data
    },

}