<template>
	<view class="container">
		<view style="margin-top: 30%; text-align: center; font-size: 25px;">注册</view>
		<!-- <form action="" method="post"> -->
		<!-- <view class="uni-form-item">
			<input class="uni-input" focus placeholder="请输入邮箱或手机号码" />
		</view>
		<view class="uni-form-item">
			<input class="uni-input" focus placeholder="请输入密码" />
		</view>
		<view class="uni-form-item">
			<switch checked="true" @change="" style="transform:scale(0.7)" />
			<text class="">是否保存密码</text>
		</view>
		<view class="uni-form-item">
			<button class="uni-button" @click="goto('/pages/tabbar/tabbar-1/tabbar-1')">登录</button>
		</view> -->
		<!-- </form> -->
		<view class="form">
			<view class="form-item">
				<label for="telephone">账号</label><input class="input" id="telephone" placeholder="请输入手机号"
					@input="updateField('telephone', $event.detail.value)" />
			</view>
			<view class="form-item">
				<label for="password">密码</label><input password class="input" id="password" placeholder="请输入密码"
					@input="updateField('password', $event.detail.value)" />
			</view>
			<button class="button" @click="login">登录</button>
			<view class="login-link" @click="goto('/pages/user/forget')">忘记密码？</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';

	const username = ref(''); // 绑定输入框的用户名
	const password = ref(''); // 绑定输入框的密码
	const rememberPassword = ref(true); // 是否保存密码的状态

	// 用户点击登录按钮时触发的函数
	const login = () => {
		// 调用登录接口，验证用户名和密码
		// 如果登录成功，保存登录状态
		const userInfo = {
			id: 1,
			username: username.value,
			// 其他用户信息
		};
		saveLoginStatus(userInfo);
		// 跳转到首页或其他页面
		uni.switchTab({
			url:'/pages/tabbar/tabbar-1/tabbar-1'
		})
	};

	// 登出操作
	const logout = () => {
		uni.removeStorageSync('userInfo');
		uni.removeStorageSync('isLoggedIn');
		// 跳转到登录页面或首页
		goto('/pages/user/login'); // 跳转到登录页面
	};

	// 在应用启动时检查登录状态
	autoLoginCheck();

	// 保存登录状态
	function saveLoginStatus(userInfo) {
		uni.setStorageSync('userInfo', userInfo);
		uni.setStorageSync('isLoggedIn', true);
	}

	// 自动登录检查
	function autoLoginCheck() {
		const isLoggedIn = uni.getStorageSync('isLoggedIn');
		if (isLoggedIn) {
			// 用户已登录，可以执行自动登录操作
			const userInfo = uni.getStorageSync('userInfo');
			// 调用自动登录接口，例如刷新令牌，向服务器验证token
			// 如果自动登录成功，将登录状态设置为已登录
			if (userInfo) {
				// 设置登录状态
				saveLoginStatus(userInfo);
			}
		}
	}
	// 跳转函数
	const goto = (url) => {
		uni.navigateTo({
			url: url
		});
	}
	
</script>


<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
		padding: 20px;
		background-color: #E0F0E9;
	}
	
	.form {
		width: 100%;
	}
	
	.form-item {
		display: flex;
		flex-direction: column;
		margin-bottom: 20px;
	}
	
	.label {
		margin-bottom: 5px;
	}
	
	.input {
		border: 1px solid #ddd;
		padding: 10px;
		border-radius: 4px;
	}
	
	.button {
		background-color: #007aff;
		color: white;
		padding: 10px;
		border-radius: 10px;
		line-height: 25px;
	}
</style>