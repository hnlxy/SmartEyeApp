<template>
  <view class="help-center">
	  <view>
	  <uni-section type="line" style="margin-top: -65vw;">
		<uni-list>
			<uni-list-item clickable @click="goToPage('/pages/tabbar/tabbar-5/person_change')" style="width: 100vw; height: 20vw;" title="账号与登录" note="" showArrow
				thumb="../../../static/img/user/account.png"
				thumb-size="sm" rightText="忘记密码"/>
				
			<uni-list-item clickable @click="goToPage('/pages/tabbar/tabbar-5/address')" style="width: 100vw; height: 20vw;" title="通讯录" note="" showArrow
				thumb="../../../static/img/user/通讯录.png"
				thumb-size="sm" rightText="添加好友"/>
				
			<uni-list-item clickable @click="goToPage('/pages/tabbar/tabbar-5/help')" style="width: 100vw; height: 20vw;" title="统计页面" note="" showArrow
				thumb="../../../static/img/user/统计.png"
				thumb-size="sm" rightText="统计问题"/>
				
			<uni-list-item clickable @click="goToPage('/pages/tabbar/tabbar-5/help')" style="width: 100vw; height: 20vw;" title="菜单" note="" showArrow
				thumb="../../../static/img/tabbar/appliance.png"
				thumb-size="sm" rightText="菜单使用"/>
				
				
		</uni-list>
	  </uni-section>
	  </view>
	  
	  
    <view class="bottom-modules">
      <!-- 意见反馈模块 -->
      <view class="feedback">
        <button class="feedback-button" @click="openFeedback">提供反馈</button>
      </view>
      
      <!-- 在线咨询模块 -->
      <view class="chat">
        <button class="chat-button" @click="startChat">在线咨询</button>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    openFeedback() {
      // 在这里处理打开意见反馈页面的逻辑
    },
    startChat() {
      // 在这里处理开始在线咨询的逻辑
    },
  },
};
</script>

<style scoped>
.help-center {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh; /* 使页面占满整个视窗高度 */
}

/* 底部模块样式 */
.bottom-modules {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 20px;
}

.feedback,
.chat {
  flex: 1;
  text-align: center;
  margin: 5px;
}

.section-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.feedback-button,
.chat-button {
  width: 100%;
  padding: 10px;
  background-color:  #FFBB98; /* 按钮背景颜色，可以根据需求自定义 */
  color: #fff; /* 按钮文字颜色，可以根据需求自定义 */
  border: none;
  border-radius: 10px;
}

</style>
