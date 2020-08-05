<template>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <slot></slot>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    data() {
      return {
        scroll: null,
      }
    },
    props: {
      probeType: 0,
      pullingUp: false
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click:true,
        probeType: this.probeType,
        pullUpLoad: this.pullingUp
      })

      if(this.probeType === 2 || this.probeType === 3) {
        this.scroll.on('scroll', (position) => {
          this.$emit('scroll', position)
        })
      }

      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })


    },
    methods: {
      scrollTo(x, y, time=300){
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      finishPullUp(){
        this.scroll &&  this.scroll.finishPullUp()
      },
      refresh() {
        // console.log('-----');
        this.scroll &&  this.scroll.refresh()
      }

    }

  }
</script>

<style scoped>

</style>
