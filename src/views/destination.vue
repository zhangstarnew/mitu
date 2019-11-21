<template>
	<div>
		<destination-top></destination-top>
		<destination-content></destination-content>
	</div>

</template>

<script>
	import destinationTop from "../components/destination/destinationTop";
	import destinationContent from "../components/destination/destinationContent";
	export default{
		name:'destination',
		components:{
			destinationTop,
			destinationContent,
		},

	}
</script>

<style scoped>

</style>
