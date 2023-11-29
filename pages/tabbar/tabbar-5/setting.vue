<template>
	<view class="container">
		<uni-section type="line" style="margin-top: -65vw;">
			<uni-list>
				<uni-list-item clickable @click="goToPage('/pages/tabbar/tabbar-5/person_change')" style="width: 100vw; height: 20vw;" title="语言" note="" showArrow
					thumb="../../../static/img/user/setting/language.png"
					thumb-size="sm" rightText=""/>
					
				<uni-list-item clickable @click="goToPage('/pages/tabbar/tabbar-5/address')" style="width: 100vw; height: 20vw;" title="支持" note="" showArrow
					thumb="../../../static/img/user/setting/support.png"
					thumb-size="sm" rightText=""/>
					
				<uni-list-item clickable @click="goToPage('/pages/tabbar/tabbar-5/help')" style="width: 100vw; height: 20vw;" title="更改PIN" note="" showArrow
					thumb="../../../static/img/user/setting/change_password.png"
					thumb-size="sm" rightText=""/>
			</uni-list>
		</uni-section>
		
		<uni-section type="line" style="margin-top: 5vw;">
			<uni-list>
				<uni-list-item clickable @click="goToPage('/pages/tabbar/tabbar-5/person_change')" style="width: 100vw; height: 20vw;" title="消息提醒" note=""
					thumb="../../../static/img/user/text.png"
					thumb-size="sm" rightText="" showSwitch switchChecked/>
			</uni-list>
		</uni-section>
		
		
		<uni-section type="line" style="margin-top: 5vw;">
			<uni-list>
				<uni-list-item clickable @click="goToPage('/pages/tabbar/tabbar-5/person_change')" style="width: 100vw; height: 20vw;" title="关于我们" note=""
					thumb="../../../static/img/user/setting/about_us.png"
					thumb-size="sm" rightText="" showArrow/>
				<uni-list-item class=" slot-text" clickable @click="goToPage('/pages/tabbar/tabbar-5/person_change')" style="width: 100vw; height: 20vw;" title="退出账号" note=""
					thumb="../../../static/img/user/setting/close.png"
					thumb-size="sm"/>
			</uni-list>
		</uni-section>
	</view>
</template>

<script>
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