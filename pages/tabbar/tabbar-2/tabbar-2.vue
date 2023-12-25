<template>
  <view class="container">
    <view class="selectact">选择活动</view>
    <picker mode="selector" :range="activities" @change="onActivityChange">
      <view class="picker">
        当前选择：{{ selectedActivity }}
      </view>
    </picker>
    <!-- 分界 -->
    <view class="divider"></view>

    <view class="notifications-container">
      <view class="notification" v-for="item in notifications" :key="item.id">
        <view class="avatar-container">
          <img :src="item.avatar" class="avatar" alt="avatar" />
        </view>
        <view class="notification-content">
          <view class="notification-message">{{ item.name }} - {{ getActivityCountForPerson(item) }}次</view>
          <view class="notification-time">{{ item.time }}</view>
        </view>
      </view>
    </view>

    <view class="info">
      <text v-if="selectedActivity">「{{ selectedActivity }}」的统计总次数是：{{ selectedCount }}</text>
      <text v-else>请选择一个活动</text>
    </view>
  </view>
</template>

<script setup>
import { ref, computed } from 'vue';

const activities = ['测体温', '翻身', '换尿不湿', '换衣服', '喂水', '喂饭', '喂药', '排尿排便', '洗脚', '剪指甲']; // 假设的活动列表
const selectedActivity = ref('');

const notifications = ref([
  {
    id: 1,
    name: '张三',
    time: '2023-12-02 10:30',
    avatar: '../../../static/img/face/face2.png',
    activities: {
      '测体温': 2, '翻身': 5, '换尿不湿': 3, '换衣服': 1, '喂水': 2, '喂饭': 4, '喂药': 1, '排尿排便': 3, '洗脚': 2, '剪指甲': 3
    }
  },
  {
    id: 2,
    name: '李四',
    time: '2023-12-02 10:30',
    avatar: '../../../static/img/face/face3.png',
    activities: {
      '测体温': 1, '翻身': 2, '换尿不湿': 4, '换衣服': 2, '喂水': 3, '喂饭': 5, '喂药': 2, '排尿排便': 1, '洗脚': 4, '剪指甲': 2
    }
  },
  {
    id: 3,
    name: '王五',
    time: '2023-12-02 10:30',
    avatar: '../../../static/img/face/face4.png',
    activities: {
      '测体温': 3, '翻身': 1, '换尿不湿': 1, '换衣服': 3, '喂水': 1, '喂饭': 2, '喂药': 3, '排尿排便': 2, '洗脚': 1, '剪指甲': 4
    }
  }
]);


const selectedCount = computed(() => {
  if (!selectedActivity.value) return 0;
  return notifications.value.reduce((sum, item) => sum + (item.activities[selectedActivity.value] || 0), 0);
});

const getActivityCountForPerson = (person) => {
  return person.activities[selectedActivity.value] || 0;
};

const onActivityChange = (event) => {
  const activity = activities[event.detail.value];
  selectedActivity.value = activity;
};
</script>



<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.selectact{
	font-weight: bold;
	margin-bottom: 15px;
}

.picker{
	margin-right: auto;
	margin-left: auto;
	
}

.picker {
  margin-bottom: 5px;
  color: #FFF;
  background-color:  #FFBB98;
  border: 1px solid #ddd;
  border-radius: 15px;
  padding: 10px;
}

.info {
  margin-top: 20px;
}

.divider {
	height: 1px;
	background-color: #e0e0e0;
	width: 100%;
	margin: 20px 0;
}


.notifications-container {
		padding: 16px;
		height: 100%;
		overflow-y: auto;
		width: 100%;
	}

	.notification {
		background-color: #d9d9d9;
		border-radius: 10px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		display: flex;
		align-items: center;
		margin-bottom: 16px;
		padding: 10px;
	}

	.avatar-container {
		padding-right: 16px;
	}

	.avatar {
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}

	.notification-content {
		flex-grow: 1;
	}

	.notification-message {
		font-weight: bold;
		margin-bottom: 4px;
	}

	.notification-time {
		color: #888;
		font-size: 0.8em;
	}


</style>
