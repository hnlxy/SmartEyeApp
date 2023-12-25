<template>
	<div class="video-wrapper">
		<video class="video-player" :src="videoSrc" controls></video>
	</div>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	const videoSrc = ref('/static/video.mp4');
</script>

<style>
	.video-wrapper {
		text-align: center;
	}
</style>