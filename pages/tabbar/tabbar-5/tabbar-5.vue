<template>
	<view class="container">
		<image class="head-pic" src="../../../static/img/face/face1.png"></image>
		<view class="name">Thomas</view>

		<view class="row">
			<!-- <image class="gps" src="../../../static/img/icon/gps.png"></image> -->
			<view class="address" style="color: #0dcbd7; margin-left: 5vw;">UID：123456</view>
		</view>
		<button @click="edit()" class="set" style="background-color: #0dcbd7; color: aliceblue; margin-top: 3vw;">
			<image src="../../../static/img/icon/edit.png" style="width: 6vw;height: 6vw;"></image>
			更改
		</button>

		<uni-section title="显示图标或图片" type="line" style="margin-top: 3vw;">
			<uni-list>
				<uni-list-item clickable @click="goToPage('/pages/tabbar/tabbar-5/bind_uid')"
					style="width: 100vw; height: 20vw;" title="绑定UID" note="" showArrow
					thumb="../../../static/img/user/setting/change_password.png" thumb-size="sm" rightText="" />

				<uni-list-item clickable @click="goToPage('/pages/tabbar/tabbar-5/address')"
					style="width: 100vw; height: 20vw;" title="地址" note="" showArrow
					thumb="../../../static/img/user/address.png" thumb-size="sm" rightText="" />

				<uni-list-item clickable @click="goToPage('/pages/tabbar/tabbar-5/help')"
					style="width: 100vw; height: 20vw;" title="帮助与反馈" note="" showArrow
					thumb="../../../static/img/user/text.png" thumb-size="sm" rightText="" />

				<uni-list-item clickable @click="goToPage('/pages/tabbar/tabbar-5/setting')"
					style="width: 100vw; height: 20vw;" title="设置" note="" showArrow
					thumb="../../../static/img/user/setting.png" thumb-size="sm" />

			</uni-list>
		</uni-section>
	</view>
</template>

<script setup>
	const goToPage = (path) => {
		uni.navigateTo({
			url: path
		})
	};
</script>

<style>
	.container {
		background: #EBF5F5;

	}

	.row {
		display: flex;
		align-items: center;
		/*垂直居中*/
	}

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.head-pic {
		width: 100px;
		height: 100px;
		border-radius: 50px;
		color: #41555d;
		margin-top: 5vw;

	}

	.name {
		margin-top: 2vw;
		font-size: 8vw;
	}

	.gps {
		width: 10vw;
		height: 10vw;
	}
</style>