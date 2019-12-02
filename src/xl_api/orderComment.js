
export default {

    //获取评论页面的接口
    async getCommentData(goodsId) {
        //http://10.35.167.122:8080/api
       let res = await fetch('http://117.78.9.95/api/view_detail/?v_id=' + goodsId )
        // let res = await fetch('http://10.35.167.122:8080/api/view_detail/?v_id=' + goodsId )
        let data = await res.json()
        return data
    },

    //发表评价提交数据
    // ud_id: this.userId, //用户id
    // order_id: 32,   //订单
    // stars: this.value1, //星星数
    // content: this.com  //评论内容

    async submitComment(userid,orderId,stars,content) {
        //console.log(userid,orderId,stars,content)
        let res = await fetch('http://117.78.9.95/api/discuss/', {
        // let res = await fetch('http://10.35.167.122:8080/api/discuss/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            },
            body: JSON.stringify({
                "ud_id":userid,
                "order_id":orderId,
                "stars":stars,
                "content":content
            })
        })
        return await res.json()
    },

}


