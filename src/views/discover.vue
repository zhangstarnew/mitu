<template>
	<div class="discover">
		<div class="header">
			<div :class="change===true?'cmd-change':'cmd-noChange'" @click="changeOne">精彩</div>
			<div :class="change===true?'cmd-noChange':'cmd-change'" @click="changeTwo">旅行家</div>
		</div>
			<div v-if="change">
				<div class="searchBox">
					<a href="#/seach">
						<svg t="1574930098741" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1281" width="20" height="20"><path d="M998.417847 968.923523 738.389131 712.967573c68.050929-73.967263 109.909294-171.800228 109.909294-279.479317 0-230.345352-189.746575-417.036095-423.778057-417.036095-234.030475 0-423.77705 186.690742-423.77705 417.036095 0 230.297023 189.746575 416.986758 423.77705 416.986758 101.131452 0 193.870691-34.971414 266.723355-93.126882l261.095991 256.924553c12.70864 12.514315 33.370499 12.514315 46.078132 0C1011.174816 1001.759377 1011.174816 981.436831 998.417847 968.923523L998.417847 968.923523 998.417847 968.923523zM424.520368 786.354882c-198.040115 0-358.5393-157.977996-358.5393-352.86562 0-194.88863 160.499184-352.866627 358.5393-352.866627C622.562497 80.622635 783.110011 238.600632 783.110011 433.489262 783.110011 628.376886 622.562497 786.354882 424.520368 786.354882L424.520368 786.354882 424.520368 786.354882z" p-id="1282" fill="#8a8a8a"></path></svg>
						<input type="text" placeholder="搜索精彩内容" href="#/seach"></a>
				</div>
				<div>
					<img src="../../public/images/cmdimg/banner.png" />
				</div>
				<user-show :data="user"></user-show>
			</div>
			<div v-else class="traveller">
				<img src="../../public/images/cmdimg/travellerBanner.png" />
				<traveller></traveller>
			</div>
	</div>

</template>

<script>
	import userShow from "../components/discover/userShow";
	import traveller from "../components/discover/traveller";
	export default{
		name:"Discover",
		components:{
			userShow,
			traveller
		},
		data(){
			return {
				change:true,
				isLoading: false,
				user:null
			}
		},
		methods:{
			changeOne(){
				this.change=true;
			},
			changeTwo(){
				this.change=false;
			},
			//获取数据
            _initDiscoverInfo(){
                this.$axios.get('http://39.105.52.171/api/discover/jc/')
                    .then(res=>{
                        this.user=res.data.data
                    })
                    .catch(err=>{
                        console.log(err)
                    })
            }
		},
		beforeMount() {
			// let allData =require('../api/api');
			// this.user=allData;
            this._initDiscoverInfo()
		}
	}
</script>

<style scoped>
.discover{
	font-size: 0.12rem;
	text-align: left;
	margin-bottom: 0.5rem;
	overflow: hidden;

}
.discover>div{
	width: 100%;
}
.discover>.header{
	display: flex;
	justify-content: center;
	width:100%;
	height:0.5rem;
	background-color: #fff;
	border-bottom: 1px solid #dfdfdf;
	text-align: center;
	position: fixed;
	top: 0;
	z-index: 10;
}
.cmd-noChange{
	width:0.8rem;
	margin: 0 0.1rem;
	font-size: 0.17rem;
	font-weight: 600;
	line-height: 0.44rem;
}
.cmd-change{
    width:0.8rem;
	margin: 0 0.1rem;
	border-color: rgb(240, 100, 60);
	color: rgb(240, 100, 60);
	font-size: 0.17rem;
	font-weight: 600;
	border-bottom: 2px solid rgb(240, 100, 60);
	line-height: 0.44rem;
}
.searchBox{
	position: relative;
}
.searchBox>a{
	margin-top: 0.5rem;
	padding: 0.1rem 0.2rem;
	flex: auto;
	display: -webkit-box;
	display: flex;
	background-color: rgb(245,245,245);
}
	.searchBox>a>input{
		display: block;
		flex: 1;
		background-color: #fff;
		border-radius: 1rem;
		position: relative;
		padding-left: 0.45rem;
		height: 0.3rem;
		line-height: 0.3rem;
		font-size: 0.17rem;
		color: #999;
		border: 0.01rem solid #dfdfdf;
		text-align: left;
		outline: none;
	}
	img{
		width:100%;
	}
	.traveller{
     margin-top: 0.5rem;
	}
.traveller>img{
	width: 100%;
	height: 2.2rem;
}
.searchBox svg{
	position: absolute;
	z-index: 2;
	left: 0.35rem;
	top:0.17rem;
}

</style>


