<template>
  <div class="container">
    <video id="video" width="750" controls autoplay></video>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.setupVideoStream();
  },
  methods: {
    setupVideoStream() {
      // 假设你的WebSocket流在9999端口
      const wsUrl = 'ws://localhost:9999';
      const videoElement = document.getElementById('video');
      // 这里需要一个适当的方法来处理WebSocket流
      // 可以使用像'jsmpeg'这样的库来解码视频
    }
  }
};
</script>

<style>
.video {
  width: 100%;
  height: auto;
}
</style>

