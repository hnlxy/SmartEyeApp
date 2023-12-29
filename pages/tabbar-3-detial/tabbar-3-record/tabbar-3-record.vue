<template>
  <view class="container">
    <view class="profile-card" @click="callElderly">
      <image class="profile-image" src="/static/img/face/face3.png" />
      <text class="profile-name">Thomas</text>
      <image class="call-icon" src="/static/img/tabbar-3/see/call.png" />
    </view>
    <view class="profile-card" @click="callCaregiver">
      <image class="profile-image" src="/static/img/face/hugong2.jpg" />
      <text class="profile-name">护工1</text>
      <image class="call-icon" src="/static/img/tabbar-3/see/call.png" />
    </view>
  </view>
</template>

<script setup>
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
  margin: 50px;
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
