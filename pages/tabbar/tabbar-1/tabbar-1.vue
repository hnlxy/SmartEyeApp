<template>
	<view class="container">
		<uni-section>
			<uni-card class="user">
				<image class="head-pic" src="../../../static/img/tabbar/me.png"></image>
				<text class="welcome">Hi,Thomas!</text>
				<image class="notice" src="../../../static/img/tabbar/news.png" mode="aspectFit"></image>
				<image class="list" src="../../../static/img/tabbar/list.png" mode="aspectFit"></image>
			</uni-card>
		</uni-section>
		<view class="row">
			<uni-section>
				<uni-card title="血压" extra="详细信息" class="xueya" style="background-color: #D3D8FF; font-weight: bold; background-image:url('static/img/tabbar/xueya.png');">
					<text class="uni-body" style="font-size: 25px;">100mmHg</text>
				</uni-card>
			</uni-section>
			
			<uni-section style="margin-left: -20px;">
				<uni-card title="血氧" extra="详细信息" class="xueyang" style="background-color: #F7DAEC; font-weight: bold; background-image:url('static/img/tabbar/xueyang.png');">
					<text class="uni-body" style="font-size: 25px;">90%</text>
				</uni-card>
			</uni-section>
		</view>
		<view class="row">
			<uni-section style="margin-top: -20px;">
				<uni-card title="血糖" extra="详细信息" class="xuetang" style="background-color: #F7E8CC; font-weight: bold;background-image:url('static/img/tabbar/xuetang.png');">
					<text class="uni-body" style="font-size: 25px;">5mmol/l</text>
				</uni-card>
			</uni-section>
			
			<uni-section style="margin-top: -70px; margin-left: -20px; margin-top: -50px;">
				<uni-card title="心率" extra="详细信息" class="xinlv" style="background-color: #C4F1F2; font-weight: bold;background-image:url('static/img/tabbar/xinlv.png');">
					<text class="uni-body" style="font-size: 25px;">67bpm</text>
				</uni-card>
			</uni-section>
		</view>
		
		<image class="sos" mode="aspectFit" src="../../../static/img/tabbar/sos.png"></image>

		
	</view>
</template>

<script>
    export default {
        data() {
            return {
                title: 'Hello'
            };
        },
        onLoad() {},
        methods: {}
    };
</script>

<style lang="scss">
	.title{
		font-family: Helvetica, sans-serif;
	}
	
	.user{
		margin-left: auto;
		margin-right: auto;
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
		margin-right: 15px;
		margin-right: 15px;
		color: #41555d;
	}
	
	.list{
		width: 40px;
		height: 40px;
		border-radius: 27.5px; 
		margin-right: 5px;
		color: #41555d;
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
		background: #fff no-repeat center bottom;
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
		background: #fff no-repeat center bottom;
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
		background: #fff no-repeat center right;
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
		background: #fff no-repeat center;
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