<template>
    <view class="uni-container">
        <view class="body">
            <view class="title">
                <text class="uni-title-text">智眼守护</text>
            </view>
            <navigator url="/pages/user/login">
                <button class="uni-button login-button" type="default">登录</button>
            </navigator>
            <navigator url="/pages/user/register">
                <button class="uni-button register-button" type="default">注册</button>
            </navigator>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            goto(url) {
                uni.navigateTo({
                    url: url
                })
            }
        }
    }
</script>

<style lang="scss">
    .body {
        overflow: hidden;
        height: 100%;
        background-color: #00CDC4;
        background-image: url(../../static/img/login.png);
        background-repeat: no-repeat;
        background-size: 750rpx;
        background-position: 0 100rpx;
    }

    .title {
        text-align: center;
        margin-top: 700rpx;
    }

    .login-button {
        color: black;
        margin-top: 100rpx;
        background-color: #DDF2EC;
    }

    .register-button {
        color: white;
        margin-top: 50rpx;
        background-color: #60CBC8;
    }
</style>