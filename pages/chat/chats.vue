<template>
	<view class="chat">
		<view v-for="(message, index) in messages" :key="index" class="message" :class="{'self': message.self}">
			<view class="avatar">
				<image :src="message.avatar" alt="avatar" />
			</view>
			<view class="chat-bubble">
				{{ message.text }}
			</view>
		</view>
	</view>
	<view class="message-input">
		<input v-model="new_message" type="text" placeholder="输入消息..." />
		<button @click="sendMessage">发送</button>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	let messages = ref([{
			text: "你好，我是负责你母亲的护工",
			self: false,
			avatar: '../../../static/img/face/hugong1.png'
		},
		{
			text: "你好，请您照顾好我母亲，谢谢！",
			self: true,
			avatar: '../../../static/img/face/face1.png'
		},
		{
			text: "有事及时通知我",
			self: true,
			avatar: '../../../static/img/face/face1.png'
		},
		{
			text: "好的，您放心",
			self: false,
			avatar: '../../../static/img/face/hugong1.png'
		},
	]);
	const new_message = ref('');
	const sendMessage = () => {
		const messageObject = {
			text: new_message.value,
			self: true,
			avatar: '../../../static/img/face/face1.png',
		};
		messages.value.push(messageObject);
		new_message.value = '';
	};
</script>

<style>
	.chat {

		margin: 20px auto;
		text-align: left;
	}

	.message {
		display: flex;
		margin-bottom: 10px;
	}

	.message.self {
		flex-direction: row-reverse;
	}

	.avatar image {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		margin: 0 10px;
	}

	.chat-bubble {
		background-color: #f0f0f0;
		padding: 10px 20px;
		border-radius: 20px;
		display: inline-block;
		max-width: 80%;
		word-wrap: break-word;
		/* 允许长单词或URL地址换行到下一行 */
		word-break: break-word;
		/* 在长单词或URL内部进行换行 */
		white-space: normal;
		/* 允许文本自然换行 */
	}


	.message.self .chat-bubble {
		background-color: #0084ff;
		color: white;
	}

	.message-input {
		display: flex;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 10px;
		background-color: #fff;
		box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
	}

	.message-input input {
		flex: 1;
		padding: 10px;
		margin-right: 10px;
		border: 1px solid #ccc;
		border-radius: 20px;
		outline: none;
		line-height: 20px;
	}

	.message-input button {
		padding: 10px 20px;
		border: transparent;
		border-radius: 20px;
		background-color: #E9E9E9;
		color: #07C160;
		line-height: 20px;
	}
</style>