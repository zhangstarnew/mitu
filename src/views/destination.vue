<template>
	<div>
		<div v-if="data">
			<destination-top></destination-top>
			<destination-content :data="data"></destination-content>
		</div>
		<loading v-else></loading>
	</div>
</template>

<script>
	import destinationTop from "../components/destination/destinationTop";
	import destinationContent from "../components/destination/destinationContent";
	import loading from "../components/loadingCommon/loading";
	export default{
		name:'destination',
		components:{
			destinationTop,
			destinationContent,
			loading

		},
		methods:{
			_initDestinationContentInfo(){
				this.$axios.get('http://117.78.9.95/api/views1')
						.then(res=>{
							// eslint-disable-next-line no-mixed-spaces-and-tabs
							 //console.log(res)
							this.data=res.data.data
							//console.log(this.data)
						})
						.catch(err=>{
							console.log(err)
						})
			}
		},
		created(){
			this._initDestinationContentInfo()
		},
		data(){
			return {
				data:null,
			}
		}
	}
</script>

<style scoped>

</style>
