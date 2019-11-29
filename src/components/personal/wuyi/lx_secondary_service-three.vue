<template>
    <div class="information">
        <my-secondary-header :head="head"></my-secondary-header>
        <div class="information-context">
<!--            <van-address-list-->
<!--                    v-model="chosenAddressId"-->
<!--                    :list="list"-->
<!--                    head="常用出行人"-->
<!--                    add-button-text="新增出行人"-->
<!--                    :show="show"-->
<!--                    @add="onAdd"-->
<!--                    @edit="onEdit"-->
<!--            />-->
<!--            <van-popup :flag="flag">-->
<!--                <van-address-edit-->
<!--                        :area-list="areaList"-->
<!--                        show-delete-->
<!--                        show-set-default-->
<!--                        show-search-result-->
<!--                        :search-result="searchResult"-->
<!--                        :area-columns-placeholder="['请选择', '请选择', '请选择']"-->
<!--                        @save="onSave"-->
<!--                        @delete="onDelete"-->
<!--                        @change-detail="onChangeDetail"-->
<!--                />-->
<!--            </van-popup>-->

            <!-- 联系人卡片 -->
            <van-contact-card
                    :type="cardType"
                    :name="currentContact.name"
                    :tel="currentContact.tel"
                    @click="showList = true"
            />

            <!-- 联系人列表 -->
            <van-popup v-model="showList" position="bottom">
                <van-contact-list
                        v-model="chosenContactId"
                        :list="list"
                        @add="onAdd"
                        @edit="onEdit"
                        @select="onSelect"
                />
            </van-popup>

            <!-- 联系人编辑 -->
            <van-popup v-model="showEdit" position="bottom">
                <van-contact-edit
                        :contact-info="editingContact"
                        :is-edit="isEdit"
                        @save="onSave"
                        @delete="onDelete"
                />
            </van-popup>
        </div>
    </div>
</template>

<script>
    import mySecondaryHeader from './my-secondary-header';
    // import { AddressList,Toast,AddressEdit,Popup } from 'vant';
    import { ContactCard, ContactList, ContactEdit, Popup} from 'vant';
    import axios from 'axios';
    export default {
        name: "lx_secondary_service-three",
        components:{
            mySecondaryHeader,
            // [AddressList.name]:AddressList,
            // [Toast.name]:Toast,
            // [AddressEdit.name]:AddressEdit,
            [Popup.name]:Popup,
            [ContactCard.name]:ContactCard,
            [ContactList.name]:ContactList,
            [ContactEdit.name]:ContactEdit
        },
        data(){
            return {
                    head:"常用信息 · 出行人",
                    chosenContactId: null,
                    editingContact: {},
                    showList: false,
                    showEdit: false,
                    isEdit: false,
                    ud_id:'',
                    name:'',
                    phone_num:null,
                    // gender:'女',
                    // id_card:'',
                    list: [{
                        name: "张三",
                        tel: 13000000000,
                        // gender:"女",
                        // id_card:620422199711292529,
                    }]


                // flag:false,
                // show:true,
                // chosenAddressId: '1',
                // areaList:'',
                // searchResult: [],
                // list: [
                //     {
                //         id: 1,
                //         name: '张三',
                //         tel: 188930901698,
                //         address: 620422199711292529
                //     },
                //     {
                //         id: 2,
                //         name: '李四',
                //         tel: 188930901698,
                //         address: 620422199711292529
                //     },
                //     {
                //         id: 3,
                //         name: '王五',
                //         tel: 188930901698,
                //         address: 620422199711292529
                //     }
                // ]
            }
        },
        computed: {
            cardType() {
                return this.chosenContactId !== null ? 'edit' : 'add';
            },

            currentContact() {
                const id = this.chosenContactId;
                return id !== null ? this.list.filter(item => item.id === id)[0] : {};
            }
        },
        methods: {
            // 添加联系人
            onAdd() {
                this.editingContact = {id: this.list.length};
                this.isEdit = false;
                this.showEdit = true;
            },

            // 编辑联系人
            onEdit(item) {
                this.isEdit = true;
                this.showEdit = true;
                this.editingContact = item;
            },

            // 选中联系人
            onSelect() {
                this.showList = false;
            },

            // 保存联系人
            onSave(info) {
                this.showEdit = false;
                this.showList = false;

                if (this.isEdit) {
                    this.list = this.list.map(item => item.id === info.id ? info : item);
                } else {
                    this.list.push(info);
                }
                this.chosenContactId = info.id;
                let u= sessionStorage.getItem("ud_id");
                axios({
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    url:"http://117.78.9.95/api/traveler/ud_id"+u,
                    method:"POST",
                    data:{ //body
                        name:this.name,
                        phone_num:this.phone_num
                        // gender:'女',
                        // id_card:620425219872013648
                    }
                }).then(res=>{
                    console.log(res.data)
                })
            },

            // 删除联系人
            onDelete(info) {
                this.showEdit = false;
                this.list = this.list.filter(item => item.id !== info.id);
                if (this.chosenContactId === info.id) {
                    this.chosenContactId = null;
                }
            }
        //     onAdd() {
        //         // Toast('新增地址');
        //         this.flag=true;
        //         this.show=false;
        //     },
        //     onEdit(item, index) {
        //         Toast('编辑地址:' + index);
        //     },
        //     onSave() {
        //         Toast('save');
        //     },
        //     onDelete() {
        //         Toast('delete');
        //     },
        //     onChangeDetail(val) {
        //         if (val) {
        //             this.searchResult = [{
        //                 name: '黄龙万科中心',
        //                 address: '杭州市西湖区'
        //             }];
        //         } else {
        //             this.searchResult = [];
        //         }
        //     }
        }
    }

</script>

<style scoped>
    .information{
        width: 100%;
        background-color: #F7F7F7;
    }
    .information-context>.null{
        height: 6.22rem;
    }
    .information-context>.null>img{
        margin-top: 1.3rem;
        width: 0.55rem;
    }
    .information-context>.null>h3{
        line-height: 0.5rem;
        font-size: 0.12rem;
        font-weight: normal;
        color: #CACACA;
    }
    .van-address-list{
        box-sizing: border-box;
        height: 100%;
        padding-bottom: 0rem;
    }
</style>