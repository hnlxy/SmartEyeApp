<template>
  <view class="page-container">
    <view class="logo-container">
      <image class="logo" src="/static/logo.jpg" />
    </view>
    <view class="list-container">
      <view class="list-item" @click="goToVersion">
        <text>当前版本</text>
      </view>
      <view class="list-item" @click="goToUpdate">
        <text>版本更新</text>
      </view>
      <view class="list-item" @click="goToFeatures">
        <text>功能介绍</text>
      </view>
    </view>
    <view class="footer">
      <text class="footer-text" @click="goToTerms">服务协议</text>
      <text class="footer-text" @click="goToPrivacy">隐私政策</text>
    </view>
  </view>
</template>

<script setup>
// 在这里添加您的 Vue 3 逻辑

function goToVersion() {
  // 导航到当前版本页面
}

function goToUpdate() {
  // 导航到版本更新页面
}

function goToFeatures() {
  // 导航到功能介绍页面
}

function goToTerms() {
  // 导航到服务协议页面
}

function goToPrivacy() {
  // 导航到隐私政策页面
}
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.logo-container {
	margin-top: 30px;
	margin-bottom: 30px;
}

.logo {
  width: 100px;
  height: 100px; 
}

.list-container {
  width: 100%;
  margin-top: 30px;
}

.list-item {
  padding: 15px;
  border-bottom: 1px solid #eee;
  text-align: left;
}

.footer {
  margin-top: 30px;
  font-size: 12px;
}

.footer-text {
  margin-right: 10px;
  color: #007aff;
}
</style>
