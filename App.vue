<script>
    export default {
        onLaunch: function() {
            console.log('App Launch');

            // setTimeout(() => {
            //     uni.setTabBarBadge({
            //         index: 1,
            //         text: '31'
            //     });
            //     uni.showTabBarRedDot({
            //         index: 3
            //     });
            // }, 1000);
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
        height: 100%;
        overflow: hidden;
        background-color: #DEEEE8;
    }

    .uni-title {
        text-align: center;
    }

    .uni-title-text {
        font-size: 60rpx;
    }

    .uni-button {
        width: 600rpx;
        border-radius: 30rpx;
    }

    .uni-input {
        width: 600rpx;
        height: 70rpx;
        border: 1px solid #C2D8D2;
    }
	

</style>