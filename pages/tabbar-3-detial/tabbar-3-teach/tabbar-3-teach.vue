<template>
  <div class="container">
    <!-- 循环显示多个视频 -->
    <div v-for="(video, index) in videos" :key="index" class="video-container">
      <video controls width="100%" height="auto">
        <source :src="`@/static/${video.fileName}`" type="video/mp4" />
        您的浏览器不支持视频播放。
      </video>
      <!-- 每个视频的文字内容 -->
      <div class="text-content">
        <h2>{{ video.title }}</h2>
        <p>{{ video.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 假设这些数据来自后端或本地数据源，包含多个视频信息
      videos: [
        {
          fileName: 'video/teach/fanshen.mp4',
          title: '翻身（叩背）',
          description: '长期卧床而自己不能翻身的病人，必须依靠他人协助翻身、拍背，以促进血液循环，给病人以舒适感。然而，长期卧床或体弱无法自行翻身的患者，会导致血液循环障碍，而发生压疮、肌肉挛缩、关节僵硬等并发症。',
        },
        {
          fileName: 'teaching-video2.mp4',
          title: '偏瘫老人穿服',
          description: '',
        },
        // 可以继续添加更多视频信息
      ],
    };
  },
};
</script>

<style scoped>
.container {
  padding: 20px;
}

.video-container {
  margin-bottom: 20px;
}

.video {
  width: 100%;
  height: auto;
}

.text-content {
  margin-top: 10px;
}

/* 根据需要添加其他样式 */
</style>
