<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="(item, index) in topImages">
      <img :src="item">
    </swiper-item>
  </swiper>
</template>

<script>
    import {Swiper,SwiperItem} from '@/components/common/swiper'

    export default {
      name: "DetailSwiper",
      components:{
        Swiper,
        SwiperItem
      },
      props:{
        topImages:{
          type: Array,
          default: []
        }
      }
    }
</script>

<style scoped>
  .detail-swiper {
    height: 300px;
  }
</style>
