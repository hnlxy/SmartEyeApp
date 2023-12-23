<template>
  <!-- 监控录像部分 -->
  <view class="Surveillancefootage">
	<uni-section>
		<uni-card :is-shadow="true">
			<h3 style="color: black;margin-bottom: 5vw;">监控录像</h3>
			<view class="video-container">
			  <view class="arrow left-arrow" @click="switchVideo('previous')">←</view>
			  <video src="/static/video/teach/cut_nails.mp4" ref="videoPlayer" width="750" controls autoplay></video>
			  <view class="arrow right-arrow" @click="switchVideo('next')">→</view>
			</view>
		</uni-card>
	</uni-section> 
  </view>
  
  <!-- 实时监控部分 -->
  <view class="Real-time-monitoring" style="margin-top: 15vw;">
		<uni-section title="基础卡片" type="line">
			<uni-card :is-shadow="true">
				<h3 style="color: black; margin-bottom: 5vw;">实时监控</h3>
				<video src="/static/video/teach/drink_water.mp4"></video>
			</uni-card>
		</uni-section>
  </view>
  
</template>


<script>
import { ref, reactive } from 'vue';

export default {
  setup() {
    const videoPlayer = ref(null);
    const state = reactive({
      currentVideoIndex: 0,
      videoUrls: [
        '/static/video/teach/fanshen.mp4', // 视频 URL 示例
        'video2.mp4',
        // 更多视频 URL...
      ]
    });

    const switchVideo = (direction) => {
      if (direction === 'next') {
        state.currentVideoIndex = (state.currentVideoIndex + 1) % state.videoUrls.length;
      } else if (direction === 'previous') {
        state.currentVideoIndex = (state.currentVideoIndex - 1 + state.videoUrls.length) % state.videoUrls.length;
      }
      videoPlayer.value.src = state.videoUrls[state.currentVideoIndex];
      videoPlayer.value.load();
      videoPlayer.value.play();
    };

    return {
      videoPlayer,
      switchVideo
    };
  }
};
</script>



<style>
.Real-time-monitoring,
.Surveillancefootage {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.video-container {
  display: flex;
  align-items: center;
}

.arrow {
  font-size: 24px;
  cursor: pointer;
  padding: 0 10px;
}


</style>


