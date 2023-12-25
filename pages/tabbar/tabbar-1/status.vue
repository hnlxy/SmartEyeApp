<template>
	<view class="calendar">
		<view class="dates">
			<view v-for="(dateInfo, index) in dates" :key="index" :class="{ 'selected': index === selectedIndex }"
				class="date" @click="selectDate(index)">
				<!-- <view>{{ dateInfo.week }}</view> -->
				<view>{{ dateInfo.day }}</view>
			</view>
		</view>
	</view>
	<!-- 分界限 -->
	<view class="divider"></view>
	<view class="name">
		{{ elderName }}
	</view>
	<view class="divider"></view>
	<view class="event">
		{{ actionEvent }}
	</view>
	<view class="charts-box">
		<qiun-data-charts type="tarea" :opts="opts" :chartData="chartData" />
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	import {
		onLoad
	} from '@dcloudio/uni-app';
	const actionEvent = ref('');
	const elderName = ref('');
	const dates = [];
	const selectedIndex = ref(6); // 默认选中今天

	// 生成今天及过去六天的日期和星期名
	for (let i = 6; i >= 0; i--) {
		let day = new Date();
		day.setDate(day.getDate() - i);
		const weekday = day.toLocaleDateString('en-US', {
			weekday: 'short'
		});
		const monthDay = day.toLocaleDateString('en-US', {
			month: 'numeric',
			day: 'numeric'
		});
		dates.push({
			// week: weekday,
			day: monthDay
		});
	}

	// 选择日期的函数
	const selectDate = (index) => {
		selectedIndex.value = index;
	};

	// 定义响应式数据
	const chartData = ref({});
	const opts = ref({
		color: ["#EE6666", "#91CB74", "#FAC858", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4", "#ea7ccc"],
		padding: [15, 10, 0, 15],
		enableScroll: false,
		legend: {},
		xAxis: {
			disableGrid: true,
			boundaryGap: "justify",
			format: "xAxisDemo2"
		},
		yAxis: {
			gridType: "dash",
			dashLength: 2,
			data: [{
				min: 0,
				max: 150
			}]
		},
		extra: {
			area: {
				type: "curve",
				opacity: 0.2,
				addLine: true,
				width: 2,
				gradient: true,
				activeType: "hollow"
			}
		}
	});

	// 模拟从服务器获取数据
	const getServerData = () => {
		setTimeout(() => {
			let res = {
				series: [{
					name: actionEvent.value, // ref在模板或响应式上下文中直接使用时会自动解包 故用value
					data: [
						[20000, 120],
						[30000, 123],
						[50000, 115],
						[70000, 125],
						[90000, 110]
					]
				}]
			};
			chartData.value = JSON.parse(JSON.stringify(res));
		}, 500);
	};

	// 页面加载时接收参数
	onLoad((options) => {
		console.log(options)
		if (options.actionEvent) {
			actionEvent.value = decodeURIComponent(options.actionEvent);
		}
		if (options.elderName) {
			elderName.value = options.elderName;
		}
		getServerData();
	});
</script>

<style scoped>
	/* 请根据实际需求修改父元素尺寸，组件自动识别宽高 */
	.charts-box {
		width: 100%;
		height: 50%;
	}

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

	.event {
		font-size: 20px;
		text-align: center;
		margin-top: 10px;
	}

	.name {
		font-size: 35px;
		text-align: center;
		margin-left: 20px;
	}

	.divider {
		height: 1px;
		background-color: #e0e0e0;
		width: 100%;
		margin: 20px 0;
	}
</style>