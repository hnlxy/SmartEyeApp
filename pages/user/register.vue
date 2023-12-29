<template>
	<view class="container">
		<view style="margin-top: 30%; text-align: center; font-size: 25px;">注册</view>
		<view class="form">
			<view class="form-item">
				<label for="telephone">账号</label><input class="input" id="telephone" placeholder="请输入手机号"
					@input="updateField('telephone', $event.detail.value)" />
			</view>
			<view class="form-item">
				<label for="password">密码</label><input password class="input" id="password" placeholder="请输入密码"
					@input="updateField('password', $event.detail.value)" />
			</view>
			<view class="form-item">
				<label for="password2">重复密码</label><input password class="input" id="password2" placeholder="请再次输入密码"
					@input="updateField('password2', $event.detail.value)" />
			</view>
			<button class="button" @click="register">提交注册</button>
			<view class="login-link" @click="goToLogin">已有账号？返回登录</view>
		</view>
	</view>
</template>
<script setup>
	import {
		reactive
	} from 'vue';

	const state = reactive({
		telephone: '',
		password: '',
		password2: ''
	});

	const updateField = (field, value) => {
		state[field] = value;
	};

	const register = () => {
		// 提交表单逻辑
		console.log(state);
	};
	const goToLogin = () => {
		uni.navigateTo({
			url: '/pages/user/login'
		});
	};
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