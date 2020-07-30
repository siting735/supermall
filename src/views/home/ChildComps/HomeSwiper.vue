<template>
	<swiper>
		<swiper-item v-for="item in banner">
			<a :href="item.link">
				<img :src="item.image"/>
			</a>
		</swiper-item>
	</swiper>
</template>

<script>
	import {Swiper, SwiperItem} from '@/components/common/swiper/index.js'
	export default {
		name:'HomeSwiper',
		props:{
			banner:{
				type:Array,
				default:[],
			}
		},
		components:{
			Swiper,
			SwiperItem
		}
	}
</script>

<style>
</style>
