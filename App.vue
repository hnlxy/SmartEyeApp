<script setup>
import { onMounted, onUnmounted, onActivated, onDeactivated } from 'vue';

// 当应用启动时执行
onMounted(() => {
    console.log('App Launch');
    uni.setTabBarBadge({
        index: 3,
        text: '3',
    });
});

// 当应用显示时执行
onActivated(() => {
    console.log('App Show');
});

// 当应用隐藏时执行
onDeactivated(() => {
    console.log('App Hide');
});
</script>


<style>
    uni-page-body,
    html,
    body {
        height: 100%;
    }

    .uni-container {
        height: 100%;
        overflow: hidden;
        background-color: #DEEEE8;
    }

    .uni-title {
        text-align: center;
    }

    .uni-title-text {
        font-size: 60rpx;
    }

    .uni-button {
        width: 600rpx;
        border-radius: 30rpx;
    }

    .uni-input {
        width: 600rpx;
        height: 70rpx;
        border: 1px solid #C2D8D2;
    }
	
</style>