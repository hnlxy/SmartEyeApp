<template>
	<view class="container">
		<uni-section type="line" style="margin-top: -65vw;">
			<uni-list>
				<uni-list-item clickable @click="goToPage('/pages/tabbar/tabbar-5/setting/language')" style="width: 100vw; height: 20vw;" title="语言" note="" showArrow
					thumb="../../../static/img/user/setting/language.png"
					thumb-size="sm" rightText=""/>
					
				<uni-list-item clickable @click="goToPage('/pages/tabbar/tabbar-5/setting/support')" style="width: 100vw; height: 20vw;" title="支持" note="" showArrow
					thumb="../../../static/img/user/setting/support.png"
					thumb-size="sm" rightText=""/>
					
				<uni-list-item clickable @click="goToPage('/pages/tabbar/tabbar-5/setting/change_PIN')" style="width: 100vw; height: 20vw;" title="修改密码" note="" showArrow
					thumb="../../../static/img/user/setting/change_password.png"
					thumb-size="sm" rightText=""/>
			</uni-list>
		</uni-section>
		
		<uni-section type="line" style="margin-top: 5vw;">
			<uni-list>
				<uni-list-item clickable @click="goToPage('/pages/tabbar/tabbar-5/setting')" style="width: 100vw; height: 20vw;" title="消息提醒" note=""
					thumb="../../../static/img/user/text.png"
					thumb-size="sm" rightText="" showSwitch switchChecked/>
			</uni-list>
		</uni-section>
		
		
		<uni-section type="line" style="margin-top: 5vw;">
			<uni-list>
				<uni-list-item clickable @click="goToPage('/pages/tabbar/tabbar-5/setting/about_us')" style="width: 100vw; height: 20vw;" title="关于我们" note=""
					thumb="../../../static/img/user/setting/about_us.png"
					thumb-size="sm" rightText="" showArrow/>
				<uni-list-item class=" slot-text" clickable @click="goToPage('/pages/user/login')" style="width: 100vw; height: 20vw;" title="退出账号" note=""
					thumb="../../../static/img/user/setting/close.png"
					thumb-size="sm"/>
			</uni-list>
		</uni-section>
	</view>
</template>

<script setup>

	//跳转页面
	 const goToPage = (path) => {
	        uni.navigateTo({
	        	url: path
	        })
	    };
</script>

<style lang="scss">
	.container{
		display: flex;	
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: #EBF5F5;
		min-height: 100%;
	}
</style>