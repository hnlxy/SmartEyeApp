<template>
	<div v-html="videoHtml"></div>
</template>

<script setup>
	import {
		ref,
		computed
	} from 'vue';

	const videoSrc = ref('/static/video.mp4');

	const videoHtml = computed(() => {
		return `<video autoplay loop muted controls width="100%" direction=90>
            <source src="${videoSrc.value}" type="video/mp4">
          </video>`;
	});
</script>

<style>
	.video-replay-page {
		position: relative;
		width: 100%;
		height: 100%;
	}

	.fullscreen-video {
		width: 100%;
		height: 100%;
		object-fit: cover;
		/* 确保视频填满整个容器 */
	}
</style>