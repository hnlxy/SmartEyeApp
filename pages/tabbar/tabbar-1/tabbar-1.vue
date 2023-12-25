<template>
	<view class="container">
		<view class="user">
			<image class="head-pic" :src="selectedUser.avatar"></image>
			<text class="welcome">{{ selectedUser.name }}</text>
			<image class="notice" src="../../../static/img/tabbar/news.png" mode="aspectFit"
				@click="goToPage('/pages/tabbar/tabbar-1/messages')"></image>
			<select class="user-select" @change="switchUser($event)">
				<option v-for="user in users" :value="user.id" :key="user.id">
					{{ user.name }}
				</option>
			</select>
		</view>
		<view class="row">
			<uni-section>
				<uni-card title="血压"
					@click="goToPage('/pages/tabbar/tabbar-1/status', {elderName: selectedUser.name, actionEvent: '血压'})"
					extra="详细信息" class="xueya"
					style="background-color: #D3D8FF; font-weight: bold; background-image:url('static/img/tabbar/xueya.png');">
					<text class="uni-body" style="font-size: 25px;">{{ selectedUser.healthData.bloodPressure }}</text>
				</uni-card>
			</uni-section>

			<uni-section style="margin-left: -20px;">
				<uni-card title="血氧"
					@click="goToPage('/pages/tabbar/tabbar-1/status', {elderName: selectedUser.name, actionEvent: '血氧'})"
					extra="详细信息" class="xueyang"
					style="background-color: #F7DAEC; font-weight: bold; background-image:url('static/img/tabbar/xueyang.png');">
					<text class="uni-body" style="font-size: 25px;">{{ selectedUser.healthData.bloodOxygen }}</text>
				</uni-card>
			</uni-section>
		</view>
		<view class="row">
			<uni-section style="margin-top: -20px;">
				<uni-card title="血糖"
					@click="goToPage('/pages/tabbar/tabbar-1/status', {elderName: selectedUser.name, actionEvent: '血糖'})"
					extra="详细信息" class="xuetang"
					style="background-color: #F7E8CC; font-weight: bold;background-image:url('static/img/tabbar/xuetang.png');">
					<text class="uni-body" style="font-size: 25px;">{{ selectedUser.healthData.bloodSugar }}</text>
				</uni-card>
			</uni-section>

			<uni-section style="margin-top: -70px; margin-left: -20px; margin-top: -50px;">
				<uni-card title="心率"
					@click="goToPage('/pages/tabbar/tabbar-1/status', {elderName: selectedUser.name, actionEvent: '心率'})"
					extra="详细信息" class="xinlv"
					style="background-color: #C4F1F2; font-weight: bold;background-image:url('static/img/tabbar/xinlv.png');">
					<text class="uni-body" style="font-size: 25px;">{{ selectedUser.healthData.heartRate }}</text>
				</uni-card>
			</uni-section>
		</view>

		<image class="sos" mode="aspectFit" src="../../../static/img/tabbar/sos.png"></image>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	const users = ref([{
			id: '1',
			name: 'Thomas',
			avatar: '../../../static/img/face/face3.png',
			healthData: {
				bloodPressure: '120mmHg',
				bloodOxygen: '98%',
				bloodSugar: '5mmol/l',
				heartRate: '60bpm'
			}
		},
		{
			id: '2',
			name: 'Alice',
			avatar: '../../../static/img/face/face2.png',
			healthData: {
				bloodPressure: '110mmHg',
				bloodOxygen: '97%',
				bloodSugar: '5.5mmol/l',
				heartRate: '70bpm'
			}
		},
		{
			id: '3',
			name: 'Bob',
			avatar: '../../../static/img/face/face4.png',
			healthData: {
				bloodPressure: '100mmHg',
				bloodOxygen: '95%',
				bloodSugar: '5.6mmol/l',
				heartRate: '72bpm'
			}
		},
	]);

	// 当前选中的用户
	const selectedUser = ref(users.value[0]);
	const goToPage = (path, params = {}) => {
		const query = Object.entries(params)
			.map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
			.join('&');
		const url = `${path}?${query}`;
		console.log(url);
		uni.navigateTo({
			url: url
		});
	};

	const switchUser = (event) => {
		const userId = event.target.value;
		const user = users.value.find(u => u.id === userId);
		selectedUser.value = user || users.value[0];
	};
</script>

<style lang="scss">
	.container {
		background: #EBF5F5;
		min-height: 100vh;
	}

	.user {
		display: flex;
		/* 使用Flexbox布局 */
		justify-content: space-between;
		/* 在子元素之间平均分配空间，使其水平排列 */
		align-items: center;
		padding-right: 0;
		/* 确保右侧没有内边距 */
	}

	.row {
		display: flex;
		/* 使用Flexbox布局 */
		justify-content: space-between;
		/* 在子元素之间平均分配空间，使其水平排列 */
	}

	.uni-flex {
		width: 1000rpx;
		height: 1000rpx;
		border: 1rpx solid red;
		background-color: bisque;
	}

	.head-pic {
		width: 55px;
		height: 55px;
		border-radius: 27.5px;
		margin-right: 10px;
		color: #41555d;
	}

	.notice {
		width: 40px;
		height: 40px;
		border-radius: 27.5px;
		margin-left: 5vw;
		color: #41555d;
	}

	.list {
		width: 40px;
		height: 40px;
		border-radius: 27.5px;
		color: #41555d;
		margin-right: 0;
		/* 确保右侧没有外边距 */
	}

	.xueya {
		width: 40vw;
		height: 45vw;
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
		align-items: center;
		background-size: contain;
		/* 确保图片填充整个卡片 */
		background: no-repeat center bottom;
	}

	.xueyang {
		width: 40vw;
		height: 35vw;
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
		align-items: center;
		background-size: contain;
		/* 确保图片填充整个卡片 */
		background: no-repeat center bottom;
	}

	.xuetang {
		width: 40vw;
		height: 35vw;
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
		align-items: center;
		background-size: contain;
		/* 确保图片填充整个卡片 */
		background: no-repeat center right;
	}

	.xinlv {
		width: 40vw;
		height: 43vw;
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
		align-items: center;
		background-size: contain;
		/* 确保图片填充整个卡片 */
		background: no-repeat center;
	}

	.sos {
		width: 50vw;
		height: 50vw;
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
		align-items: center;
		background-size: contain;
		/* 确保图片填充整个卡片 */
		position: relative;
		top: 1vw;
		left: 25vw;
	}

	.welcome {
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

	.user-select {
		padding: 8px 16px;
		font-size: 1rem;
		border: 1px solid transparent;
		border-radius: 4px;
		background-color: white;
		cursor: pointer;
	}

	.user-select:focus {
		outline: none;
		border-color: #aaa;
	}

	.user-select option {
		padding: 8px;
		font-size: 1rem;
	}
</style>