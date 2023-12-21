<template>
	<view class="app">
		<!-- 统计区域 -->
		<view class="stats">
			<!-- 动态显示当前选中的 Tab 统计信息 -->
			<view class="stat-item">
				<view class="stat-key">本周总次数</view>
				<view class="stat-value">{{ currentStats.weekly }}</view>
			</view>
			<view class="stat-item">
				<view class="stat-key">本月总次数</view>
				<view class="stat-value">{{ currentStats.monthly }}</view>
			</view>
		</view>

		<!-- Tab 切换区域 -->
		<view class="tabs">
			<view class="tab-item" v-for="(tab, index) in tabs" :key="index"
				:class="{ active: currentTab === tabs[index].value }" @click="switchTab(index)">
				{{ tab.label }}
			</view>
		</view>

		<!-- 当前 Tab 内容区域 -->
		<view class="tab-content">
			<view class="event-item" v-for="event in currentTabEvents" :key="event.id" @click="goToReplay(item)">
				<img :src="event.avatar" class="avatar" />
				<view class="event-info">
					<view class="event-name">{{ event.name }}</view>
					<view class="event-time">{{ event.time }}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		reactive,
		computed
	} from 'vue';
	import {
		useRouter
	} from 'vue-router';
	const router = useRouter();
	const goToReplay = (item) => {
		router.push('/pages/tabbar/tabbar-1/video_replay');
	};
	const tabEvents = {
		tab1: [{
				id: 1,
				name: '张三',
				time: '2023-12-02 10:30',
				avatar: '../../../static/img/face/face2.png'
			},
			{
				id: 2,
				name: '李四',
				time: '2023-12-17 16:30',
				avatar: '../../../static/img/face/face3.png'
			},
		],
		tab2: [{
				id: 1,
				name: '王五',
				time: '2023-12-02 10:30',
				avatar: '../../../static/img/face/face4.png'
			},
			{
				id: 2,
				name: '赵六',
				time: '2023-12-17 16:30',
				avatar: '../../../static/img/face/face5.png'
			},
		],
		tab3: [{
				id: 1,
				name: '孙七',
				time: '2023-12-02 10:30',
				avatar: '../../../static/img/face/face6.png'
			},
			{
				id: 2,
				name: '王八',
				time: '2023-12-17 16:30',
				avatar: '../../../static/img/face/face7.png'
			},
		]
	};

	const tabStats = {
		tab1: {
			weekly: 10,
			monthly: 40
		},
		tab2: {
			weekly: 5,
			monthly: 20
		},
		tab3: {
			weekly: 20,
			monthly: 80
		},
	};

	const tabs = reactive([{
			label: '翻身',
			value: 'tab1'
		},
		{
			label: '喝水',
			value: 'tab2'
		},
		{
			label: '穿衣',
			value: 'tab3'
		},
	]);
	const currentTabEvents = computed(() => {
		return tabEvents[currentTab.value] || [];
	});
	const currentTab = ref(tabs[0].value);

	const currentStats = computed(() => {
		return tabStats[currentTab.value];
	});

	function switchTab(index) {
		currentTab.value = tabs[index].value;
	}
</script>

<style scoped>
	.app {
		font-family: 'Arial', sans-serif;
		max-width: 600px;
		margin: auto;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		border-radius: 8px;
		overflow: hidden;
		height: 100%;
	}

	.stats {
		display: flex;
		justify-content: space-around;
		background-color: #ffffff;
		padding: 16px;
		border-bottom: 1px solid #eee;
	}

	.stat-item {
		text-align: center;
	}

	.stat-key {
		font-size: 14px;
		color: red;
		margin-bottom: 8px;
	}

	.stat-value {
		font-size: 20px;
		color: #333333;
		font-weight: bold;
	}

	.tabs {
		display: flex;
		background-color: #f7f7f7;
		overflow: auto;
		/* 允许水平滚动 */
	}

	.tab-item {
		flex: 1;
		padding: 12px 0;
		cursor: pointer;
		text-align: center;
		background-color: #f7f7f7;
		transition: background-color 0.3s, color 0.3s;
		font-size: 16px;
		color: #666666;
	}

	.tab-item.active {
		background-color: #ffffff;
		color: #4a90e2;
		font-weight: bold;
		border-top: 3px solid #4a90e2;
	}



	.tab-content {
		padding: 20px;
		background-color: #ffffff;
	}

	.event-item {
		display: flex;
		align-items: center;
		margin-bottom: 10px;
		padding: 10px;
		background-color: #f2f2f2;
		border-radius: 8px;
	}

	.avatar {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		margin-right: 10px;
	}

	.event-info {
		display: flex;
		flex-direction: column;
	}

	.event-name {
		font-size: 16px;
		color: #333;
		font-weight: bold;
	}

	.event-time {
		font-size: 14px;
		color: #666;
	}
</style>