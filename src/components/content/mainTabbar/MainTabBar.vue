<template>
	<div>
		<TabBar>
			  <TabBarItem path="/home">
				  <img slot='item-icon' src="@/assets/img/tabbar/all.png" >
				  <img slot='item-icon-active' src="@/assets/img/tabbar/all-active.png" >
				  <div slot="item-text">首页</div>
			  </TabBarItem>
			  <TabBarItem path="/category" >
				  <img slot='item-icon' src="@/assets/img/tabbar/category.png" >
				  <img slot='item-icon-active' src="@/assets/img/tabbar/category-active.png" >
				  <div slot="item-text">分类</div>
			  </TabBarItem>
			  <TabBarItem path="/cart" >
				  <img slot='item-icon' src="@/assets/img/tabbar/cart.png" >
				  <img slot='item-icon-active' src="@/assets/img/tabbar/cart-active.png" >
				  <div slot="item-text">购物车</div>
			  </TabBarItem>
			  <TabBarItem path="/user">
				  <img slot='item-icon' src="@/assets/img/tabbar/user.png" >
				  <img slot='item-icon-active' src="@/assets/img/tabbar/user-active.png" >
				  <div slot="item-text">我的</div>
			  </TabBarItem>
		</TabBar>
	</div>
</template>

<script>
	import TabBar from '@/components/common/tabbar/TabBar.vue'
	import TabBarItem from '@/components/common/tabbar/TabBarItem.vue'
	export default {
		name:'MainTabBar',
		components:{
			TabBar,
			TabBarItem
		}
	}
</script>

<style>
</style>
