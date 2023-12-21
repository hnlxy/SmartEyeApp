<template>
	<view class="container">
		<view class="row">
			<view class="button health-report"
				@click="goToPage('/pages/tabbar-3-detial/tabbar-3-report/tabbar-3-report')">
				<image class="icon" src="../../../static/img/tabbar-3/health_report.png" mode="aspectFit"></image>
				<text class="label">健康报告</text>
			</view>
			<view class="button home-see" @click="handleHomeSeeClick">
				<image class="icon" src="../../../static/img/tabbar-3/see.png" mode="aspectFit"></image>
				<text class="label">家庭监护</text>
			</view>
		</view>
		<view class="row">
			<view class="button record" @click="goToPage('/pages/tabbar-3-detial/tabbar-3-record/tabbar-3-record')">
				<image class="icon" src="../../../static/img/tabbar-3/computer.png" mode="aspectFit"></image>
				<text class="label">视频电话</text>
			</view>
			<view class="button salary" @click="goToPage('/pages/tabbar-3-detial/tabbar-3-teach/tabbar-3-teach')">
				<image class="icon" src="../../../static/img/tabbar-3/teach.png" mode="aspectFit"></image>
				<text class="label">教学管理</text>
			</view>
		</view>
	</view>
	<VerificationModal v-if="showVerificationModal" @close="closeVerificationModal"
		@verify-success="handleVerificationSuccess" />
</template>

<script setup>
	import {
		ref
	} from 'vue';
	import {
		useRouter
	} from 'vue-router';
	import VerificationModal from './verify_code.vue';

	const router = useRouter();
	const isFirstClick = ref(true);
	const isVerified = ref(false);
	const showVerificationModal = ref(false);

	const goToPage = (path) => {
		router.push(path);
	};

	const handleHomeSeeClick = () => {
		if (isFirstClick.value && !isVerified.value) {
			showVerificationModal.value = true;
		} else {
			goToPage('/pages/tabbar-3-detial/tabbar-3-see/tabbar-3-see');
		}
	};

	const closeVerificationModal = () => {
		showVerificationModal.value = false;
	};

	// 处理验证成功
	const handleVerificationSuccess = () => {
		isVerified.value = true;
		closeVerificationModal();
	};
</script>

<style scoped>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.row {
		display: flex;
		justify-content: space-between;
		margin-bottom: 10px;
		/* 调整为所需的间距 */
	}

	.button {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 150px;
		/* 调整为所需的大小 */
		height: 150px;
		/* 调整为所需的大小 */
		border-radius: 20px;
		/* 调整为所需的圆角大小 */
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		/* 根据需要添加阴影 */
		margin: 5px;
		/* 按钮间的间距 */
	}

	.icon {
		width: 60px;
		/* 调整为所需的大小 */
		height: 60px;
		/* 调整为所需的大小 */
		margin-bottom: 5px;
		/* 图标和文本之间的间距 */
	}

	.label {
		font-size: 14px;
		/* 调整为所需的大小 */
		color: #333;
		/* 文本颜色 */
	}

	/* 自定义每个按钮的背景颜色 */
	.health-report {
		background-color: #AECBFA;
	}

	.home-see {
		background-color: #DDA0DD;
	}

	.record {
		background-color: #FAEBD7;
	}

	.salary {
		background-color: #98FB98;
	}
</style>