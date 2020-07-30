<template>
	<div id="Home">
		<nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>
    <scroll class="content" ref="scroll">
      <home-swiper :banner='banner'/>
      <recommend-view :recommend='recommend'/>
      <feature/>
      <tab-contrtol class="tab-control" :title="['精选', '流行', '新款']" @tabClick='tabClick' click="true"/>
      <good-list :goods="showGoods"/>
    </scroll>
    <back-top @click.native="backClick"/>
	</div>
</template>

<script>
	import NavBar from '@/components/common/navbar/NavBar.vue'
  import Scroll from '@/components/common/scroll/Scroll.vue'
  import BackTop from "@/components/common/backTop/BackTop";

	import TabContrtol from '@/components/content/tabControl/TabControl.vue'
	import GoodList from '@/components/content/goods/GoodList.vue'

	import {getHomeMultidata, getHomeGoods} from '@/network/home.js'

	import Feature from './ChildComps/Feature.vue'
	import RecommendView from './ChildComps/RecommendView.vue'
	import HomeSwiper from './ChildComps/HomeSwiper.vue'

	export default {
		name:'Home',
		components:{
			NavBar,
			HomeSwiper,
			RecommendView,
			Feature,
			TabContrtol,
			GoodList,
      Scroll,
      BackTop
		},
		data(){
			return {
				banner:null,
				recommend:null,
				goods: {
					'pop': {page:0, list: []},
					'new': {page:0, list: []},
					'sell': {page:0, list: []}
				},
				currentType: 'sell'
			}
		},
		computed: {
			showGoods () {
				return this.goods[this.currentType].list
			}
		},
		created() {
			this.getHomeMultidata()
			this.getHomeGoods('pop')
			this.getHomeGoods('new')
			this.getHomeGoods('sell')
		},
		methods: {
      backClick(){
        // 设置返回的位置，第三个参数是返回的毫秒数
        this.$refs.scroll.scrollTo(0, 0);
      },

			tabClick(index) {
				switch (index){
					case 0: this.currentType = 'sell'
					break
					case 1: this.currentType = 'pop'
					break
					case 2: this.currentType = 'new'
				}
			},

			/*
				网络请求相关函数
			*/
			getHomeMultidata() {
				getHomeMultidata().then(res => {
					// console.log(res)
					this.banner = res.data.banner.list
					this.recommend = res.data.recommend.list
				})
			},

			getHomeGoods(type) {
				const page = this.goods[type].page + 1
				getHomeGoods(type, page).then(res => {
					// console.log(res.data.list)
					this.goods[type].list.push(...res.data.list)
					this.goods[type].page += 1
				})
			}
		}
	}
</script>

<style scoped>
	#Home {
		padding-top: 44px;
		z-index: 9;
    /*position: relative;*/
	}

	.home-nav {
		background-color: var(--color-tint);
		color: var(--color-background);
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		z-index: 9;
	}

	.tab-control{
		position: sticky;
		top: 44px;
		z-index: 9;
	}

  .content {
    /*height: 400px;*/
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0px;
    right: 0px;
  }
</style>
