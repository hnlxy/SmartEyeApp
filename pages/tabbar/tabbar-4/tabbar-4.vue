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
				:badge-positon="chat.badgePositon"
				:link="reLaunch"
				:to="pages/chat/chats"
				@click="openChat(chat.note)"
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
		note: "+13344333344", 
		badgePosition: "left", 
	},
	{
		id:2,
		title: "小红护工",
		avatar:"../../../static/img/face/hugong1.png",
		note: "+13344333344", 
		badgePosition: "left", 
	},
	{
		id:3,
		title: "李院长",
		avatar:"../../../static/img/face/yuanzhang.png",
		note: "+13344333344", 
		badgePosition: "left", 
	}
]);

const router = useRouter();

const openChat = (chatId) => {
	console.log("打开聊天",chatId);
	router.push('/pages/chat/chats');
};
</script>

<style>

	

	

	

</style>
