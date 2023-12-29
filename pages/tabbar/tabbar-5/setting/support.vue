<template>
  <view class="container">
    <!-- 图片列表区域 -->
    <view class="card" v-for="(item, index) in imageList" :key="index" @click="previewImage(item.src)">
      <image class="card-image" :src="item.src" />
	  <view class="card-description">{{ item.description }}</view>	
	</view>
  </view>
</template>

<script setup>
import { ref } from 'vue';

// 假定有一个图片列表

const imageList = ref([
  { src: '/static/img/user/setting/support/product-1.png', description: '产品研发合作' },
  { src: '/static/img/user/setting/support/product-2.png', description: '产品测试合作' },
  { src: '/static/img/user/setting/support/product-3.png', description: '产品生产合作' },
  { src: '/static/img/user/setting/support/product-4.png', description: '产品咨询合作' },
  // 更多图片对象
]);

// 点击图片进行预览
const previewImage = (src) => {
  uni.previewImage({
    urls: imageList.value.map(item => item.src), // 所有图片的数组
    current: src // 当前点击的图片
  });
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.card {
  width: 90%;
  border: 1px solid #ccc;
  border-radius: 40px;
  overflow: hidden;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-image{
	height: 125vw;
}

.card-description {
  padding: 10px;
  text-align: center;
  color: #333;
}
</style>
