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
		avatar:"https://th.bing.com/th/id/R.23093389b15e24231a082d0290d9df1a?rik=bnfi9ib8ksJ91Q&riu=http%3a%2f%2fphoto16.zastatic.com%2fimages%2fphoto%2f24555%2f98219285%2f1480052631396.jpg%3fscrop%3d1%26crop%3d1%26w%3d650%26h%3d650%26cpos%3dnorth&ehk=y66Nd6kRGDdwd%2bJ7pO41u5avDQ%2boouz4tMQVL5TPHVA%3d&risl=&pid=ImgRaw&r=0",
		note: "请照顾好我的母亲!", 
		time: "2020-02-02 20:20", 
		badgePosition: "left", 
		badgeText: ""
	},
	{
		id:2,
		title: "小红护工",
		avatar:"https://i.postimg.cc/3NnBf7xW/afa7c4fa3aa65d7d1279ef445e725f2.jpg",
		note: "您好,我是小红护工", 
		time: "2020-02-02 20:20", 
		badgePosition: "left", 
		badgeText: "9"
	},
	{
		id:3,
		title: "李院长",
		avatar:"https://i.postimg.cc/44VRL0GP/4fdc592c00882a55e124663bafc73b4.jpg",
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
