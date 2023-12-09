<template>
	<view class="notifications-container">
		<view class="notification" v-for="item in notifications" :key="item.id" @click="goToReplay(item)">
			<view class="avatar-container">
				<img :src="item.avatar" class="avatar" alt="avatar" />
			</view>
			<view class="notification-content">
				<view class="notification-message">{{ item.message }}</view>
				<view class="notification-time">{{ item.time }}</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	// 按时间排列显示
	const notifications = ref([{
			id: 1,
			message: '张三 吃饭',
			time: '2023-12-02 10:30',
			avatar: '../../../static/img/face/face2.png'
		},
		{
			id: 2,
			message: '李四 喝水',
			time: '2023-12-02 10:30',
			avatar: '../../../static/img/face/face3.png'
		},
		{
			id: 3,
			message: '李四 翻身',
			time: '2023-12-02 10:30',
			avatar: '../../../static/img/face/face3.png'
		},
		{
			id: 4,
			message: '王五 喝水',
			time: '2023-12-02 10:30',
			avatar: '../../../static/img/face/face4.png'
		},
	]);
	import {
		useRouter
	} from 'vue-router';
	const router = useRouter();
	const goToReplay = (item) => {
		router.push('/pages/tabbar/tabbar-1/video_replay');
	};
</script>


<style scoped>
	.notifications-container {
		padding: 16px;
		background-color: #EBF5F5;
		height: 100%;
		overflow-y: auto;
	}

	.notification {
		background-color: #fff;
		border-radius: 10px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		display: flex;
		align-items: center;
		margin-bottom: 16px;
		padding: 10px;
	}

	.avatar-container {
		padding-right: 16px;
	}

	.avatar {
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}

	.notification-content {
		flex-grow: 1;
	}

	.notification-message {
		font-weight: bold;
		margin-bottom: 4px;
	}

	.notification-time {
		color: #888;
		font-size: 0.8em;
	}
</style>