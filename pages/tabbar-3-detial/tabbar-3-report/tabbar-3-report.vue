<template>
  <view>
    <!-- 人物选择 -->
    <picker mode="selector" :range="people.map(person => person.name)" @change="selectPerson">
      <view style=" align-items: center; background-color:  #fff;">选择人物: {{ currentPerson.name }}</view>
    </picker>

    <!-- 健康报告详情 -->
    <view class="report-details">
      <text>姓名: {{ currentPerson.name }}</text>
      <text>年龄: {{ currentPerson.age }}</text>
      <text>出生日期: {{ currentPerson.birthDate }}</text>
      <text>体重: {{ currentPerson.weight }} kg ({{ checkRange(currentPerson.weight, 'weight') }})</text>
      <text>血压: {{ currentPerson.bloodPressure }} mmHg ({{ checkRange(currentPerson.bloodPressure, 'bloodPressure') }})</text>
      <text>血糖: {{ currentPerson.bloodSugar }} mg/dl ({{ checkRange(currentPerson.bloodSugar, 'bloodSugar') }})</text>
      <text>血脂: LDL {{ currentPerson.cholesterolLDL }} mg/dl, HDL {{ currentPerson.cholesterolHDL }} mg/dl ({{ checkRange(currentPerson.cholesterolLDL, 'cholesterolLDL') }}, {{ checkRange(currentPerson.cholesterolHDL, 'cholesterolHDL') }})</text>
      <text>血常规: 红细胞计数 {{ currentPerson.rbc }} M/µl ({{ checkRange(currentPerson.rbc, 'rbc') }})</text>
      <text>肝功能: AST {{ currentPerson.ast }} U/L ({{ checkRange(currentPerson.ast, 'ast') }}), ALT {{ currentPerson.alt }} U/L ({{ checkRange(currentPerson.alt, 'alt') }})</text>
      <text>肾功能: 肌酐 {{ currentPerson.creatinine }} mg/dl ({{ checkRange(currentPerson.creatinine, 'creatinine') }})</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      people: [
        { name: 'Thomas', age: 30, birthDate: '1950-01-01', weight: 70, bloodPressure: 120, bloodSugar: 90, cholesterolLDL: 100, cholesterolHDL: 50, rbc: 5, ast: 25, alt: 30, creatinine: 1.0, /* 更多指标 */ },
        { name: 'Alice', age: 40, birthDate: '1953-02-02', weight: 80, bloodPressure: 140, bloodSugar: 110, cholesterolLDL: 130, cholesterolHDL: 40, rbc: 4.5, ast: 30, alt: 35, creatinine: 1.2, /* 更多指标 */ },
        // 更多人物
      ],
      currentPersonIndex: 0,
      normalRanges: {
        weight: { low: 50, high: 100 },
        bloodPressure: { low: 90, high: 120 },
        bloodSugar: { low: 70, high: 140 },
        cholesterolLDL: { low: 0, high: 100 },
        cholesterolHDL: { low: 40, high: 60 },
        rbc: { low: 4.2, high: 5.9 },
        ast: { low: 0, high: 40 },
        alt: { low: 0, high: 56 },
        creatinine: { low: 0.7, high: 1.3 },
        // 更多指标的正常值范围
      }
    };
  },
  computed: {
    currentPerson() {
      return this.people[this.currentPersonIndex];
    }
  },
  methods: {
    selectPerson(event) {
      this.currentPersonIndex = event.detail.value;
    },
    checkRange(value, indicator) {
      const range = this.normalRanges[indicator];
      if (value < range.low) return '偏低';
      if (value > range.high) return '偏高';
      return '正常';
    }
  }
};
</script>

<style>
/* 页面整体布局 */
view {
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
  background-color: #f5f5f5;
}

/* 下拉选择器样式 */
picker {
  margin: 20px 0;
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
}

/* 报告详情区域 */
.report-details {
  width: 100%;
  max-width: 600px;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin-bottom: 20px;
}

/* 文本样式 */
text {
  line-height: 1.6;
  color: #333;
  font-size: 16px;
  margin: 5px 0;
}

</style>
