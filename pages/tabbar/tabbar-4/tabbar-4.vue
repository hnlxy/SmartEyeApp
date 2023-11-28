<template>
	<view class="container">
		<uni-section title="控制清除/取消按钮" subTitle="使用 clearButton 属性设置清除按钮" type="line">
			<uni-search-bar class="uni-mt-10"  radius="100" placeholder="搜索..." clearButton="none" cancelButton="none" @confirm="search" />
		</uni-section>
		
		<uni-list>
			<uni-list :border="true">
				<uni-list-chat
				v-for="(chat,index) in chats"
				:key="index"
				:title="chat.title"
				:avatar="chat.avatar"
				:note="chat.note"
				:time="chat.time"
				:badge-positon="chat.badgePositon"
				:badge-text="chat.badgeText"
				@click="openChat(chat.id)"
				>	
				</uni-list-chat>
			</uni-list>
		</uni-list>		
	</view>
</template>

<script setup>
import {ref} from 'vue';
import { useRouter } from 'vue-router';

const chats = ref([
	{
		id:1,
		title: "小兰护工",
		avatar:"../../../static/img/face/hugong2.jpg",
		note: "请照顾好我的母亲!", 
		time: "2020-02-02 20:20", 
		badgePosition: "left", 
		badgeText: ""
	},
	{
		id:2,
		title: "小红护工",
		avatar:"../../../static/img/face/hugong1.png",
		note: "您好,我是小红护工", 
		time: "2020-02-02 20:20", 
		badgePosition: "left", 
		badgeText: "9"
	},
	{
		id:3,
		title: "李院长",
		avatar:"../../../static/img/face/yuanzhang.png",
		note: "您好,我是李院长", 
		time: "2020-02-02 20:20", 
		badgePosition: "left", 
		badgeText: "1"
	}
]);

const router = useRouter();

const openChat = (chatId) => {
	console.log("打开聊天",chatId);
	router.push('/chat/' + chatId);
};
	
</script>

<style>

	

	

	

</style>
