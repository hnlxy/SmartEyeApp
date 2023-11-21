<template>
    <view class="uni-container container">
        <view class="uni-title subtitle">
            <text class="uni-subtitle-text">登录</text>
        </view>
        <!-- <form action="" method="post"> -->
        <view class="uni-form-item">
            <input class="uni-input" focus placeholder="请输入邮箱或手机号码" />
        </view>
        <view class="uni-form-item">
            <input class="uni-input" focus placeholder="请输入密码" />
        </view>
        <view class="uni-form-item">
            <switch checked="true" @change="" style="transform:scale(0.7)" />
            <text class="">是否保存密码</text>
        </view>
        <view class="uni-form-item">
            <button class="uni-button" @click="goto('/pages/tabbar/tabbar-1/tabbar-1')">登录</button>
        </view>
        <!-- </form> -->
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
                uni.switchTab({
                    url: url
                })
            }
        }
    }
</script>

<style>
    .container {
        padding: 50rpx;
    }

    .uni-form-item {
        display: flex;
        justify-content: center;
    }

    .uni-subtitle-text {
        color: black;
        font-size: 50rpx;
    }

    .subtitle {
        margin-top: 100rpx;
    }
</style>