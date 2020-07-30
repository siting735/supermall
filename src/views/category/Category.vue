<template>
	<div class="wrapper">
	  <ul class="content">
		<li>1</li>
		<li>2</li>
		<li>3</li>
		<li>4</li>
		<li>5</li>
		<li>6</li>
		<li>1</li>
		<li>2</li>
		<li>3</li>
		<li>4</li>
		<li>5</li>
		<li>6</li>
		<li>1</li>
		<li>2</li>
		<li>3</li>
		<li>4</li>
		<li>5</li>
		<li>6</li>
		<li>1</li>
		<li>2</li>
		<li>3</li>
		<li>4</li>
		<li>5</li>
		<li>6</li>
	  </ul>
	  <!-- 这里可以放一些其它的 DOM，但是会被忽略，且不会影响content部分滚动 -->
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	
	export default {
		name:'Category',
		data() {
			return {
				scroll: null
			}
		},
		mounted() {
			this.scroll = new BScroll(document.querySelector('.wrapper'),{
				// 监听选择
				probeType:3,
				// 上拉加载
				pullUpLoad:true
			});
			this.scroll.on('scroll', (position) => {
				// console.log(position)
			});
			this.scroll.on('pullingUp', () => {
				console.log('上拉加载更多')
			})
		}
	}
</script>

<style>
	.wrapper {
		height: 150px;
		background-color: red;
		
		overflow: hidden;
		/* overflow-y: scroll; */
	}
</style>
