<template>
  <view>
    <text>{{ $t('message.hello') }}</text>
    <picker mode="selector" :range="languages" @change="changeLanguage">
      <view>当前语言: {{ currentLanguage }}</view>
    </picker>
  </view>
</template>

<script>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  setup() {
    const { t, locale } = useI18n()
    const languages = ref(['English', '中文'])
    const currentLanguage = ref('中文')

	const changeLanguage = (event) => {
	  const lang = event.detail.value === 0 ? 'en' : 'zh';
	  locale.value = lang;
	  currentLanguage.value = languages.value[event.detail.value];
	};

    return { t, currentLanguage, languages, changeLanguage }
  }
}
</script>
<style>
/* 全局样式 */
view {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
}

/* 文本样式 */
text {
  font-size: 18px;
  color: #333;
  margin-bottom: 20px;
}

/* 选择器样式 */
picker {
  border: 1px solid #999;
  border-radius: 5px;
  padding: 10px 20px;
  background-color: #f3f3f3;
}

/* 当前语言显示样式 */
.current-language {
  margin-top: 20px;
  color: #666;
  font-size: 16px;
}
</style>
