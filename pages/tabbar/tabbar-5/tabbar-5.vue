<template>
	<view class="container">
		<image class="head-pic" src="../../../static/img/face/face1.png"></image>
		<view class="name">Thomas</view>
		
		<view class="row">
			<image class="gps" src="../../../static/img/icon/gps.png"></image>	
			<view class="address" style="color: #0dcbd7; margin-left: 5vw;">保定 莲池区</view>
		</view>
		<button @click="edit()" class="set" style="background-color: #0dcbd7; color: aliceblue;"
		>
		<image src="../../../static/img/icon/edit.png" style="width: 6vw;height: 6vw;"></image>
		更改</button>
		
		<uni-section title="显示图标或图片" type="line">
			<uni-list>
				<uni-list-item style="width: 100vw; height: 20vw;" title="人员变动" note="" showArrow
					thumb="../../../static/img/user/person_change.png"
					thumb-size="sm" rightText=""/>
					
				<uni-list-item style="width: 100vw; height: 20vw;" title="地址" note="" showArrow
					thumb="../../../static/img/user/address.png"
					thumb-size="sm" rightText=""/>
					
				<uni-list-item style="width: 100vw; height: 20vw;" title="帮助中心" note="" showArrow
					thumb="../../../static/img/user/text.png"
					thumb-size="sm" rightText=""/>
				
				<uni-list-item style="width: 100vw; height: 20vw;" title="设置" note="" showArrow
					thumb="../../../static/img/user/setting.png"
					thumb-size="sm" rightText=""/>

			</uni-list>
		</uni-section>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				unicodeChar: '\ue623'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>
	
<style>	
	.container{
		background: linear-gradient(#d3cce3,#e9e4f0);
		
	}

	.row{
		display: flex;
		align-items: center;/*垂直居中*/
	}

	.container{
		display: flex;	
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	
	.head-pic{
		width: 100px;
		height: 100px;
		border-radius: 50px; 
		color: #41555d;
		
	}
	
	.name{
		margin-top: 2vw;
		font-size: 8vw;
	}
	
	.gps{
		width: 10vw;
		height: 10vw;
	}
</style>
