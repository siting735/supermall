<template>
  <div id="detail">
    <detail-nav-bar @titleClick="titleClick" ref="detailNavBar"/>
    <scroll class="content" ref="scroll" @scroll="contentScroll" :probeType=3>
      <detail-swiper :top-images="topImg"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad" />
      <detail-param-info ref="params" :param-info="paraminfo"/>
      <detail-comment-info ref="comment" :comment-info="commentInfo"/>
      <detail-recommend-info ref="recommend" :recommend-list="recommendList"/>
    </scroll>
    <back-top  @click.native="backTop" v-show="isShowBackTop"/>
    <detail-bottom-bar @addToCart="addToCart"/>
  </div>
</template>

<script>
  import DetailNavBar from './ChildComps/DetailNavBar'
  import DetailSwiper from "./ChildComps/DetailSwiper";
  import DetailBaseInfo from "./ChildComps/DetailBaseInfo";
  import DetailShopInfo from "./ChildComps/DetailShopInfo";
  import DetailGoodsInfo from "./ChildComps/DetailGoodsInfo";
  import DetailParamInfo from "./ChildComps/DetailParamInfo";
  import DetailCommentInfo from "./ChildComps/DetailCommentInfo";
  import DetailRecommendInfo from "./ChildComps/DetailRecommendInfo";
  import DetailBottomBar from "./ChildComps/DetailBottomBar";

  import {getDetail, getRecommend, Goods, Shop, GoodsParam} from '@/network/detail.js'
  import {debounce} from "@/common/utils";

  import {backTopMixin} from '@/common/mixin'
  import {mapActions} from 'vuex'

  import Scroll from '@/components/common/scroll/Scroll.vue'

    export default {
        name: "Detail",
        components: {
          DetailNavBar,
          DetailSwiper,
          DetailBaseInfo,
          DetailShopInfo,
          Scroll,
          DetailGoodsInfo,
          DetailParamInfo,
          DetailCommentInfo,
          DetailRecommendInfo,
          DetailBottomBar
        },
        data() {
          return {
            iid: null,
            topImg: null,
            goods: {},
            shop: {},
            detailInfo: {},
            paraminfo: {},
            commentInfo: {},
            recommendList: [],
            themeTopYs: [],
            getThemeTopYs: null,
            currentIndex: 0
          }
        },
      created() {
          this.iid = this.$route.params.iid
          getDetail(this.iid).then(res => {
            //1、获取顶部图片
            const data = res.result
            this.topImg = data.itemInfo.topImages
          //  2、获取商品信息
            this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

          //  3、获取店铺信息
            this.shop = new Shop(data.shopInfo)
          //  4、获取商品详情展示信息
            this.detailInfo = data.detailInfo

          //  5、获取参数信息
            this.paraminfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

            // 6、保存评论信息
            if (data.rate.list) {
              this.commentInfo = data.rate.list[0];
            }

          })
          //  7、获取推荐信息
          getRecommend().then((res, error) => {
            if (error) return
            this.recommendList = res.data.list
          })
          this.getThemeTopYs = debounce(() => {
            this.themeTopYs = []
            this.themeTopYs.push(0)
            this.themeTopYs.push(this.$refs.params.$el.offsetTop)
            this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
            this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
            this.themeTopYs.push(this.$refs.recommend.$el.offsetTop+1)
            // console.log(this.themeTopYs);
          }, 50)

      },
      mixins: [backTopMixin],
      mounted() {
        const refresh = debounce(this.$refs.scroll.refresh, 500)

        this.$bus.$on('detailimgLoadFinish', () => {
          refresh()
        })
      },
      methods: {
        ...mapActions(['addCart']),
        imageLoad() {
          this.$refs.scroll.refresh()
          this.getThemeTopYs()
        },
        titleClick(index) {
          this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200)
        },
        contentScroll(position) {
          const positionY = -position.y
          let length = this.themeTopYs.length
          for(let i = 0; i < length-1; i++){
            if(this.currentIndex !== i && (positionY >= this.themeTopYs[i]
                && positionY < this.themeTopYs[i+1])){
                this.currentIndex = i
                this.$refs.detailNavBar.currentIndex = i
            }
          }
          this.isShowBackTop = -position.y > 1000
          // for(let i = 0; i < length; i++){
          //   if (this.currentIndex !== i && ((i < length -1 && positionY >= this.themeTopYs[i]
          //   && positionY < this.themeTopYs[i+1] || (i === length - 1 && positionY >= this.themeTopYs[i])))){
          //     this.currentIndex = i
          //     this.$refs.detailNavBar.currentIndex = i
          //   }
          // }

        },
        addToCart(){
          //1、获取购物车需要展示的信息
          const product = {}
          product.image = this.topImg[0]
          product.title = this.goods.title
          product.desc = this.goods.desc
          product.price = this.goods.nowPrice
          product.iid = this.iid

        //  2、将数据放入到vuex中
        //   this.$store.commit('addCart', product).then(res => {
        //     console.log(res);
        //   })
          this.addCart(product).then(res => {
            this.$toast.show(res)
          })
        }
      },
    }
</script>

<style scoped>

  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }

  .content {
    height: calc(100% - 44px - 49px);
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0px;
    right: 0px;
  }
</style>
