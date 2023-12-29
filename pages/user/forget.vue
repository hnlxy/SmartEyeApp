<template>
	<view class="container">
		<view style="margin-top: 30%; text-align: center; font-size: 25px;">忘记密码</view>
		<view class="form">
			<view class="form-item">
				<label for="telephone">账号</label><input class="input" id="telephone" placeholder="请输入手机号"
					@input="updateField('telephone', $event.detail.value)" />
			</view>
			<view class="form-item">
				<label for="code">验证码</label>
				<view class="code-input-container">
					<input class="input" id="code" placeholder="请输入验证码"
						@input="updateField('code', $event.detail.value)" />
					<button class="send-code-button" :disabled="countdown > 0" @click="sendCode">
						{{ countdown > 0 ? countdown + 's 后重新发送' : '发送验证码' }}
					</button>
				</view>
			</view>
			<view class="form-item">
				<label for="password">新密码</label><input password class="input" id="password" placeholder="请输入新密码"
					@input="updateField('password', $event.detail.value)" />
			</view>
			<button class="button" @click="modify">确认修改</button>
			<view class="login-link" @click="goToLogin">已有账号？返回登录</view>
		</view>
	</view>
</template>
<script setup>
	import {
		reactive,
		ref
	} from 'vue';
	const state = reactive({
		telephone: '',
		code: '',
		password: ''
	});

	const updateField = (field, value) => {
		state[field] = value;
	};

	const modify = () => {
		// 提交表单逻辑
		console.log(state);
	};
	const goToLogin = () => {
		uni.navigateTo({
			url: '/pages/user/login'
		});
	};
	const countdown = ref(0);

	const sendCode = () => {
		// 发送验证码逻辑
		// 在这里添加发送验证码的相关代码
		// 开始倒计时
		countdown.value = 60;
		const timer = setInterval(() => {
			if (countdown.value > 0) {
				countdown.value--;
			} else {
				clearInterval(timer);
			}
		}, 1000);
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

	.send-code-button {
		background-color: #007aff;
		color: white;
		padding: 10px;
		border-radius: 4px;
		line-height: 25px;
		cursor: pointer;
		white-space: nowrap;
	}

	.send-code-button:disabled {
		background-color: #ccc;
		cursor: not-allowed;
	}

	.code-input-container {
	    display: flex;
	    align-items: baseline;
	  }
</style>