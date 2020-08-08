<template>
	<div class="goods-item">
		<img  v-lazy="getImg" @load="imgLoad" @click="itemClick"/>
		<div class="goods-info">
			<p>{{goodsItem.title}}</p>
			<span class="price">{{goodsItem.price}}</span>
			<span class="collect">{{goodsItem.cfav}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'GoodListItem',
		props:{
			goodsItem: {
				type: Object
			}
		},
    methods:{
      imgLoad(){
        if(this.$route.path.indexOf('/home')){
          this.$bus.$emit('imgLoadFinish')
        }
        else if(this.$route.path.indexOf('/detail')){
          this.$bus.$emit('detailimgLoadFinish')
        }
      },
      itemClick(){
        this.$router.push('./detail/' + this.goodsItem.iid)
      }
    },
    computed:{
      getImg() {
        return this.goodsItem.img || this.goodsItem.image || this.goodsItem.show.img
      }
    }

	}
</script>

<style scoped>
	.goods-item {
	  padding-bottom: 40px;
	  position: relative;
	  /* padding: 2px; */
	  width: 48%;
	}
	.goods-item img {
	  width: 100%;
	  border-radius: 5px;
	}

	.goods-info {
	  font-size: 12px;
	  position: absolute;
	  bottom: 5px;
	  left: 0;
	  right: 0;
	  overflow: hidden;
	  text-align: center;
	}

	.goods-info p {
	  overflow: hidden;
	  text-overflow: ellipsis;
	  white-space: nowrap;
	  margin-bottom: 3px;
	}

	.goods-info .price {
	  color: var(--color-high-text);
	  margin-right: 20px;
	}

	.goods-info .collect {
	  position: relative;
	}

	.goods-info .collect::before {
	  content: '';
	  position: absolute;
	  left: -15px;
	  top: 0;
	  width: 14px;
	  height: 14px;
	  background: url(../../../assets/img/common/collect.svg) 0 0/14px 14px;
	}
</style>
