<template>
  <div>
    <nav-bar>
      <div slot="left" class="left" @click="backClick">
        <img src="@/assets/img/common/back.svg">
      </div>
      <div slot="center" class="title">
        <div v-for="(item, index) in titles"
             class="title-item"
             :class="{active: index === currentIndex}"
             @click="itemClick(index)">
          {{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
    import NavBar from '@/components/common/navbar/NavBar'

    export default {
        name: "DetailNavBar",
        components: {
          NavBar
        },
        data() {
          return {
            titles: ['商品', '参数', '评论', '推荐'],
            currentIndex:0
          }
        },
      methods: {
        itemClick(index) {
          this.currentIndex = index
          this.$emit('titleClick',index)
        },
        backClick() {
          this.$router.back()
        }
      }
    }
</script>

<style scoped>
  .title{
    display: flex;
    font-size: 14px;
  }
  .title-item{
    flex: 1;
  }
  .active{
    color: var(--color-high-text);
  }
  .left img {
    margin-left: 10px;
    margin-top: 10px;
  }
</style>
