<template>
	<div class="recommend">
		<div v-for="item in recommend" class="recommend-item">
			<a :href="item.link">
				<img :src="item.image"/>
				<div>{{item.title}}</div>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		name:'RecommendView',
		props:{
			recommend:{
				type: Array,
				default: []
			}
		}
	}
</script>

<style>
	.recommend{
		display: flex;
		text-align: center;
		font-size: 12px;
		border-bottom: 10px #eee solid;
		padding: 10px 0 20px;
	}
	
	.recommend-item{
		flex: 1;
	}
	
	.recommend-item img{
		width: 65px;
		height: 65px;
		margin-bottom: 10px;
	}
</style>
