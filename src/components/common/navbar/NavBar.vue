<template>
	<div class="nav-bar">
		<div class="left"><slot name="left"></slot></div>
		<div class="center"><slot name="center"></slot></div>
		<div  class="right"><slot name="right"></slot></div>
	</div>
</template>

<script>
	export default {
		name:'NabBar'
	}
</script>

<style>
	.nav-bar {
		display: flex;
		height: 44px;
		line-height: 44px;
		box-shadow: 0 1px 1px rgba(100,100,100,0.1);
	}
	
	.left, .right{
		/* background-color: red; */
		width: 60px;
	}
	
	.center{
		text-align: center;
		/* background-color: blue; */
		flex: 1;
	}
</style>
