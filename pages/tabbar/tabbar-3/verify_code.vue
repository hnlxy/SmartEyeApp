<template>
	<view class="verification-modal">
		<view class="input-row">
			<input type="text" v-model="emailCode" placeholder="输入验证码" class="input-code" />
			<button :disabled="isCountingDown" @click="sendCode" class="btn-send">
				{{ countdownMessage }}
			</button>
		</view>
		<view class="button-row">
			<button @click="verifyCode" class="btn-confirm">确认</button>
			<button @click="closeModal" class="btn-close">关闭</button>
		</view>
	</view>
</template>


<script setup>
	import {
		ref,
		computed,
		defineEmits
	} from 'vue';
	const emit = defineEmits(['close', 'verify-success']);

	const emailCode = ref('');
	const countdown = ref(0);

	const isCountingDown = computed(() => countdown.value > 0);
	const countdownMessage = computed(() => isCountingDown.value ? `${countdown.value}秒后重新发送` : '发送验证码');

	const sendCode = () => {
		// TODO: 实现发送验证码的逻辑
		countdown.value = 60;
		const interval = setInterval(() => {
			countdown.value--;
			if (countdown.value === 0) clearInterval(interval);
		}, 1000);
	};

	const verifyCode = () => {
		// TODO: 实现验证码验证的逻辑
		let code = emailCode.value;
		if (code === 'smarteye') {
			console.log('验证成功');
			emit('verify-success');
		} else {
			console.log('验证失败');
		}
	};

	const closeModal = () => {
		emit('close');
	};
</script>

<style scoped>
	.verification-modal {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 1000;
		padding: 20px;
		background: white;
		border: 1px solid #ccc;
		border-radius: 10px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
		width: 300px;
	}

	.input-row,
	.button-row {
		display: flex;
		justify-content: space-between;
		margin-bottom: 10px;
	}

	.input-code {
		flex-grow: 1;
		margin-right: 10px;
		padding: 8px 12px;
		border: 1px solid #ddd;
		border-radius: 4px;
		height: 36px;
	}

	.btn-send {
		padding: 8px 12px;
		border: 1px solid #ddd;
		border-radius: 4px;
		background-color: #f7f7f7;
		cursor: pointer;
		line-height: 36px;
		min-width: 120px;
		white-space: nowrap;
		/* 防止文字换行 */
		overflow: hidden;
		/* 超出部分隐藏 */
		text-overflow: ellipsis;
		/* 超出部分显示省略号 */
		font-size: 12px;
	}

	.btn-confirm,
	.btn-close {
		padding: 8px 12px;
		border: 1px solid #ddd;
		border-radius: 4px;
		background-color: #f7f7f7;
		cursor: pointer;
		line-height: 36px;
	}

	.btn-send:disabled {
		background-color: #ccc;
		cursor: not-allowed;
	}
</style>