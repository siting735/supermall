<template>
    <div class="toast" v-show="isShow">
      {{message}}
    </div>
</template>

<script>
    export default {
        name: "Toast",
        data() {
          return {
            message: 'hhhhhhh',
            isShow: false
          }
        },
      methods: {
          show(message = '默认信息', time = 1500) {
            this.message = message
            this.isShow = true

            setTimeout(() => {
              this.message = ''
              this.isShow = false
            }, time)
          }
      }
    }
</script>

<style scoped>
  .toast {
    position: fixed;

    top: 50%;
    left: 50%;
    z-index: 10;
    transform: translate(-50%,-50%);
    padding: 8px 10px;
    color: #FFFFFF;
    background-color: rgba(0, 0, 0, .75);
  }
</style>
