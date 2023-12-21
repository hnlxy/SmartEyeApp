<template>
  <view class="education-page">
    <view v-for="(video, index) in videoList" :key="index" class="video-container">
      <video :src="video.filePath" controls></video>
      <view class="video-info">
        <text class="video-title">{{ video.title }}</text>
		<br>
        <text class="video-description">{{ video.description }}</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      videoList: [
        {
          title: "翻身（叩背）",
          description: "对于不能自行翻身的老人，定期翻身可以预防床疮（压疮）的发生，维护皮肤健康。",
          filePath: "/static/video/teach/fanshen.mp4", // 请替换成你的本地视频路径
        },
        {
          title: "测体温",
          description: "监测体温可以及早发现患有发热等疾病的老人，并采取必要的医疗措施。",
          filePath: "/static/video/teach/take_ temperature.mp4", // 请替换成你的本地视频路径
        },
        {
          title: "换尿不湿",
          description: "对于需要使用尿不湿的老人，及时更换尿不湿可以防止尿液积聚，减少尿布疹的发生。",
          filePath: "/static/video/teach/change_diapers.mp4", // 请替换成你的本地视频路径
        },
		{
		  title: "换衣服",
		  description: "保持老人的衣着清洁和整洁，提高舒适度和自尊心。",
		  filePath: "/static/video/teach/change_clothes.mp4", // 请替换成你的本地视频路径
		},
		{
		  title: "喂水",
		  description: "保持老人充分饮水，防止脱水，有助于肾功能和整体健康。",
		  filePath: "/static/video/teach/drink_water.mp4", // 请替换成你的本地视频路径
		},
		{
		  title: "吃饭",
		  description: "提供营养均衡的饮食，确保老人获得足够的营养和能量，维持健康和体力。",
		  filePath: "/static/video/teach/eat.mp4", // 请替换成你的本地视频路径
		},
		{
		  title: "吃药",
		  description: "确保老人按时、按量服用医生开具的药物，以控制慢性疾病、减轻症状或预防疾病的进展。",
		  filePath: "/static/video/teach/medicine.mp4", // 请替换成你的本地视频路径
		},
		{
		  title: "排便排尿",
		  description: "确保老人定期排尿和排便，预防尿液滞留或便秘等问题，维护泌尿系统和肠道的健康。",
		  filePath: "/static/video/teach/defecation_urination.mp4", // 请替换成你的本地视频路径
		},
		{
		  title: "洗脚",
		  description: "帮助老人保持足部卫生，减少足部感染和不适感，提高舒适度",
		  filePath: "/static/video/teach/wash_feet.mp4", // 请替换成你的本地视频路径
		},
		{
		  title: "剪指甲",
		  description: "保持老人的指甲整洁和舒适，防止指甲太长而导致不适或划伤皮肤。",
		  filePath: "/static/video/teach/cut_nails.mp4", // 请替换成你的本地视频路径
		},
      ],
    };
  },
};
</script>

<style scoped>
.video-container {
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding: 10px;
}

.video-title {
  font-size: 16px;
  font-weight: bold;
}

.video-description {
  font-size: 14px;
  color: #555;
}

.video-info {
  margin-top: 10px;
}
</style>
