<script>
    export default {
        onLaunch: function() {
            console.log('App Launch');

            setTimeout(() => {
                uni.setTabBarBadge({
                    index: 1,
                    text: '31'
                });
                uni.showTabBarRedDot({
                    index: 3
                });
            }, 1000);
        },
        onShow: function() {
            console.log('App Show');
        },
        onHide: function() {
            console.log('App Hide');
        }
    };
</script>

<style>
    uni-page-body,
    html,
    body {
        height: 100%;
    }

    .uni-container {
        width: 750rpx;
        height: 100%;
        overflow: hidden;
    }

    .uni-title-text {
        color: white;
        font-size: 60rpx;
    }

    .uni-button {
        width: 600rpx;
        border-radius: 30rpx;
    }
</style>