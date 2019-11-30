
export default {
    async getTravelData(goodsId) {
        let res = await fetch('http://117.78.9.95/api/view_detail/?v_id='+goodsId)
        let data = await res.json()
        return data
    },

}