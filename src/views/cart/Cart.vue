<template>
	<div>
<!--    1、导航栏-->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
<!--    2、购物车信息-->
    <cart-list/>
<!--    3、结算-->
    <bottom-bar/>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";
  import CartList from "./childComps/CartList";
  import BottomBar from "./childComps/BottomBar";
  import {mapGetters} from 'vuex'

	export default {
		name:'Cart',
    components: {
      NavBar,
      CartList,
      BottomBar,
    },
    computed: {
		  ...mapGetters(['cartLength'])
    }
	}
</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: #FFFFFF;
  }
</style>
