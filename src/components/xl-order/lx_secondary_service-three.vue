<template>
    <div class="information">
        <my-secondary-header :head="head"></my-secondary-header>
        <div class="information-context">
            <!--有出行人信息时，显示该div-->
            <div></div>
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
    import { ContactCard, ContactList, ContactEdit } from 'vant';
    import { Popup } from 'vant';
    import axios from 'axios';
    export default {
        name: "lx_secondary_service-three",
        components:{
            mySecondaryHeader,
            [Popup.name]:Popup,
            [ContactCard.name]:ContactCard,
            [ContactList.name]:ContactList,
            [ContactEdit.name]:ContactEdit
        },
        data(){
            return{
                head:"常用信息 · 出行人",
                chosenContactId: null,
                editingContact: {},
                showList: false,
                showEdit: false,
                isEdit: false,
                ud_id:'',
                name:'',
                phone_num:'',
                // gender:'女',
                // id_card:'',
                list: [{
                    // ud_id:this.ud_id,
                    name: this.u_name,
                    phone_num: this.phone_num,
                    // gender:this.gender,
                    // id_card:this.id_card,
                }]
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

                axios({
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    transformRequest: [function(data) {
                        data = JSON.stringify(data)
                        return data
                    }],
                    url:"http://10.35.167.69:8080/api/traveler/",
                    method:"POST",
                    data:{ //body
                        ud_id:1,
                        name:this.name,
                        // phone_num:this.phone_num
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
</style>