<template>
	<view class="calendar">
		<view class="dates">
			<view v-for="(dateInfo, index) in dates" :key="index" :class="{ 'selected': index === selectedIndex }"
				class="date" @click="selectDate(index)">
				<view>{{ dateInfo.day }}</view>
			</view>
		</view>
	</view>
	<view class="divider"></view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	import {
		onLoad
	} from '@dcloudio/uni-app';
	const dates = [];
	const selectedIndex = ref(6);
	for (let i = 6; i >= 0; i--) {
		let day = new Date();
		day.setDate(day.getDate() - i);
		const monthDay = day.toLocaleDateString('en-US', {
			month: 'numeric',
			day: 'numeric'
		});
		dates.push({
			day: monthDay
		});
	}

	// 选择日期的函数
	const selectDate = (index) => {
		selectedIndex.value = index;
	};
</script>

<style>
	.calendar {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20rpx;
		margin-top: 5%;
	}

	.dates {
		display: flex;
		justify-content: space-around;
		width: 100%;
	}

	.date {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: calc(100% / 7);
		cursor: pointer;
		transition: transform 0.3s;
		font-size: 28rpx;
	}

	.date.selected {
		background-color: #FFC0CB;
		border-radius: 25rpx;
		padding: 10rpx;
		transform: scale(1.1);
	}

	.divider {
		height: 1px;
		background-color: #e0e0e0;
		width: 100%;
		margin: 20px 0;
	}
</style>