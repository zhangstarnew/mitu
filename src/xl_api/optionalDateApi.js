export default {

    // 商品信息渲染页面  用户提交订单页
    async getTravelData(goodsId) {
        let res = await fetch('http://117.78.9.95/api/view_detail/?v_id='+goodsId)
        let data = await res.json()
        return data
    },


    //订单提交
    async setmessageData(userid,goodId,userName,userPhone,email) {
        console.log(userid,goodId,userName,userPhone,email)
        let res = await fetch('http://117.78.9.95/api/order/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            },
            body: JSON.stringify({
                "ud_id":userid,
                "v_id":goodId,
                "name":userName,
                "phone_":userPhone,
                "email_":email,
                "type_":2
            })
        })
        return await res.json()
    },

}