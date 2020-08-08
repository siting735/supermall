<template>
    <div>
      <scroll class="content" ref="scroll">
        <cart-list-item v-for="(item, index) in cartList" :product="item"/>
      </scroll>
    </div>
</template>

<script>
  import Scroll from "@/components/common/scroll/Scroll";

  import CartListItem from "./CartListItem";

  import {mapGetters} from 'vuex'
    export default {
        name: "CartList",
        components: {
          Scroll,
          CartListItem
        },
      computed:{
          ...mapGetters(['cartList'])
      },
      activated() {
          this.$refs.scroll.refresh()
      }
    }
</script>

<style scoped>
  .content {
    height: calc(100vh - 49px - 44px - 44px);
    overflow: hidden;
  }
</style>
