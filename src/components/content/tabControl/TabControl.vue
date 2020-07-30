<template>
	<div class="tab-control">
		<div class="tab-bar-item" v-for="(item, index) in title"
		:class="{active : index === currentIndex}" @click="divClick(index)">
			<span>{{item}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TabControl',
		props: {
			title:{
				type:Array,
				default:[]
			}
		},
		data() {
			return {
				currentIndex:0
			}
		},
		methods: {
			divClick(index) {
				this.currentIndex = index
				this.$emit('tabClick', index)
			}
		}
	}
</script>

<style>
	.tab-control {
		display: flex;
		height: 44px;
		line-height: 44px;
		font-size: 15px;
		text-align: center;
		background-color: #FFFFFF;
	}
	
	.active {
		color: var(--color-high-text);
		
	}
	
	.active span {
		border-bottom: 3px solid var(--color-tint);
	}
	
	.tab-bar-item {
		flex: 1;
	}
	
	.tab-bar-item span {
		padding: 3px;
	}
</style>
