<template>
	<view class="container">
		<view class="input-container">
			<input v-model="phoneNumber" type="text" placeholder="请输入您的手机号" />
		</view>
		<view class="input-container">
			<input v-model="verificationCode" type="text" placeholder="请输入验证码" />
			<button @click="sendVerificationCode" :disabled="isCountingDown">
				{{ isCountingDown ? `${countdown}秒后重试` : '发送验证码' }}
			</button>
		</view>
		<view class="input-container">
			<input v-model="uid" type="text" placeholder="请输入新密码" />
		</view>
		<button class="bind-button" @click="bindUid">修改密码</button>
	</view>
</template>

<script setup>
	import {
		ref,
		watch
	} from 'vue';

	const phoneNumber = ref('');
	const verificationCode = ref('');
	const uid = ref('');
	const countdown = ref(60);
	const isCountingDown = ref(false);

	const sendVerificationCode = () => {
		console.log(`发送验证码到手机号: ${phoneNumber.value}`);
		// 在这里添加发送验证码的逻辑
		startCountdown();
	};

	const startCountdown = () => {
		if (isCountingDown.value) {
			return;
		}

		isCountingDown.value = true;
		countdown.value = 60;
		const interval = setInterval(() => {
			countdown.value--;
			if (countdown.value === 0) {
				clearInterval(interval);
				isCountingDown.value = false;
			}
		}, 1000);
	};

	const bindUid = () => {
		console.log(`绑定的手机号是: ${phoneNumber.value}, 验证码是: ${verificationCode.value}, UID是: ${uid.value}`);
		// 在这里添加绑定UID的逻辑
	};
</script>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
	}

	.input-container {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 20px;
		width: 100%;
	}

	.input-container input {
		flex: 1;
		margin-right: 10px;
		margin-left: 10px;
	}

	.input-container button {
		flex-shrink: 0;
	}

	.bind-button {
		background-color: #4CAF50;
		color: white;
		padding: 10px 20px;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		width: 50%;
		line-height: 20px;
	}

	input {
		border: 1px solid #ccc;
		padding: 10px;
		border-radius: 4px;
		width: 70%;
	}
</style>