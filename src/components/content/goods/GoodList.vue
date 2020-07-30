<template>
	<div class="goods">
		<goods-list-item v-for="(item, index) in goods" :goodsItem='item'/>
	</div>
</template>

<script>
	import GoodsListItem from './GoodListItem.vue'
	export default {
		name: 'GoodList',
		components:{
			GoodsListItem
		},
		props:{
			goods: {
				type: Array,
				default: []
			}
		}
	}
</script>

<style>
	.goods {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		
	}
</style>