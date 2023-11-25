<template>
	<view class="container">
		<view class="user">
			<image class="head-pic" src="https://files.oaiusercontent.com/file-OkTG7jvPm8eZfR9XiHRonCvt?se=2023-11-25T04%3A21%3A20Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dc5231dbc-ec34-493e-826e-ee01aed6b714.webp&sig=w72mOdBQn5xcqq3puQAAz24T7Ch1gRgSHj4MmD5rOoE%3D"></image>
			<text class="welcome">Hi,Thomas!</text>
			<image class="notice" src="../../../static/img/tabbar/news.png" mode="aspectFit"></image>
			<image class="list" src="../../../static/img/tabbar/list.png" mode="aspectFit"></image>
		</view>
		<view class="row">
			<uni-section>
				<uni-card title="血压" @click="goToPage('/pages/tabbar/tabbar-1/xueya')" extra="详细信息" class="xueya" style="background-color: #D3D8FF; font-weight: bold; background-image:url('static/img/tabbar/xueya.png');">
					<text class="uni-body" style="font-size: 25px;">100mmHg</text>
				</uni-card>
			</uni-section>
			
			<uni-section style="margin-left: -20px;">
				<uni-card title="血氧" @click="goToPage('/pages/tabbar/tabbar-1/xueyang')"  extra="详细信息" class="xueyang" style="background-color: #F7DAEC; font-weight: bold; background-image:url('static/img/tabbar/xueyang.png');">
					<text class="uni-body" style="font-size: 25px;">90%</text>
				</uni-card>
			</uni-section>
		</view>
		<view class="row">
			<uni-section style="margin-top: -20px;">
				<uni-card title="血糖" @click="goToPage('/pages/tabbar/tabbar-1/xuetang')" extra="详细信息" class="xuetang" style="background-color: #F7E8CC; font-weight: bold;background-image:url('static/img/tabbar/xuetang.png');">
					<text class="uni-body" style="font-size: 25px;">5<br>mmol/l</text>
				</uni-card>
			</uni-section>
			
			<uni-section style="margin-top: -70px; margin-left: -20px; margin-top: -50px;">
				<uni-card title="心率" @click="goToPage('/pages/tabbar/tabbar-1/xinlv')" extra="详细信息" class="xinlv" style="background-color: #C4F1F2; font-weight: bold;background-image:url('static/img/tabbar/xinlv.png');">
					<text class="uni-body" style="font-size: 25px;">67bpm</text>
				</uni-card>
			</uni-section>
		</view>
		
		<image class="sos" mode="aspectFit" src="../../../static/img/tabbar/sos.png"></image>
	</view>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

 const goToPage = (path) => {
        router.push(path);
    };


</script>

<style lang="scss">
	.container{
		background-color: #bdcaca;
		min-height: 100vh;
	}
	
	.user{
		display: flex; /* 使用Flexbox布局 */
		justify-content: space-between; /* 在子元素之间平均分配空间，使其水平排列 */
		align-items: center;
		padding-right: 0; /* 确保右侧没有内边距 */
	}
	
	.row{
		display: flex; /* 使用Flexbox布局 */
		justify-content: space-between; /* 在子元素之间平均分配空间，使其水平排列 */
	}
	
    .uni-flex {
        width: 1000rpx;
        height: 1000rpx;
        border: 1rpx solid red;
        background-color: bisque;
    }
	
	.head-pic{
		width: 55px;
		height: 55px;
		border-radius: 27.5px; 
		margin-right: 10px;
		color: #41555d;
	}
	
	.notice{
		width: 40px;
		height: 40px;
		border-radius: 27.5px;
		margin-left: 5vw;
		color: #41555d;
	}
	
	.list{
		width: 40px;
		height: 40px;
		border-radius: 27.5px; 
		color: #41555d;
		margin-right: 0; /* 确保右侧没有外边距 */
	}
	
	.xueya{
		width: 40vw;
		height: 45vw;
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
		align-items: center;
		background-size: contain; /* 确保图片填充整个卡片 */
		background:no-repeat center bottom;
	}
	
	.xueyang{
		width: 40vw;
		height: 35vw;
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
		align-items: center;
		background-size: contain; /* 确保图片填充整个卡片 */
		background:  no-repeat center bottom;
	}
	
	.xuetang{
		width: 40vw;
		height: 35vw;
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
		align-items: center;
		background-size: contain; /* 确保图片填充整个卡片 */
		background:no-repeat center right;
	}
	
	.xinlv{
		width: 40vw;
		height: 43vw;
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
		align-items: center;
		background-size: contain; /* 确保图片填充整个卡片 */
		background:no-repeat center;
	}
	
	.sos{
		width: 50vw;
		height: 50vw;
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
		align-items: center;
		background-size: contain; /* 确保图片填充整个卡片 */
		position: relative;
		top: 1vw;
		left: 25vw;
	}
	
	.welcome{
		font-size: 25px;
	}
	
    .hover {
        background-color: pink;
    }

    .scroll {
        border: 1rpx solid rebeccapurple;
        width: 750rpx;
        height: 500rpx;
    }


    .swiper {
        background-color: red;
    }
</style>