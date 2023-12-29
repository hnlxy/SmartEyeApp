<template>
	<view class="container">
		<!-- 显示老人信息 -->
		<view v-for="elderly in elderlyList" :key="elderly.id" class="profile-card" @click="callElderly(elderly)">
			<image class="profile-image" :src="elderly.avatar" />
			<text class="profile-name">{{ elderly.name }}</text>
			<image class="call-icon" src="/static/img/tabbar-3/see/call.png" />
		</view>

		<!-- 显示护工信息 -->
		<view v-for="caregiver in caregiverList" :key="caregiver.id" class="profile-card"
			@click="callCaregiver(caregiver)">
			<image class="profile-image" :src="caregiver.avatar" />
			<text class="profile-name">{{ caregiver.name }}</text>
			<image class="call-icon" src="/static/img/tabbar-3/see/call.png" />
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	const elders = [{
			id: '1',
			name: 'Thomas',
			avatar: '../../../static/img/face/face3.png',
		},
		{
			id: '2',
			name: 'Alice',
			avatar: '../../../static/img/face/face2.png',
		},
		{
			id: '3',
			name: 'Bob',
			avatar: '../../../static/img/face/face4.png',
		},
	];
	const elderlyList = ref(elders);
	const caregivers = [{
			id: 1,
			name: '护工1',
			avatar: '/static/img/face/hugong2.jpg'
		},
		{
			id: 2,
			name: '护工2',
			avatar: '/static/img/face/hugong1.png'
		},
	]
	const caregiverList = ref(caregivers);
	const callElderly = () => {
		// 打电话给老人的逻辑
	};

	const callCaregiver = () => {
		// 打电话给护工的逻辑
	};
</script>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
		padding: 20px;
	}

	.profile-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 80%;
		border-radius: 20px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		padding: 20px;
		background-image: linear-gradient(to bottom right, #ebca87, #fad0c4);
		margin: 10px;
	}

	.profile-image {
		width: 80px;
		height: 80px;
		border-radius: 10px;
	}

	.profile-name {
		margin: 10px 0;
		font-size: 18px;
		font-weight: bold;
	}

	.call-icon {
		width: 40px;
		height: 40px;
	}
</style>