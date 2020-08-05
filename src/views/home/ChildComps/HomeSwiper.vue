<template>
	<swiper>
		<swiper-item v-for="item in banner">
			<a :href="item.link">
				<img :src="item.image" @load="swiperImgLoad"/>
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
    data() {
		  return {
		    isLoad: false
      }
    },
		components:{
			Swiper,
			SwiperItem
		},
    methods: {
      swiperImgLoad() {
        if(!this.isLoad) {
          this.$emit('swiperImg')
          this.isLoad = true
        }
      }
    }
	}
</script>

<style>
</style>
