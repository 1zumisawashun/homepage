<template>
  <div class="timeline-container">
    <div class="timeline">
      <div>
        <p class="timeline-date">2016年4月</p>
        <div class="timeline-content">
          <h3>
            駒澤大学グローバルメディア・スタディーズ・スタディーズ学部入学
          </h3>
          <p>英語、情報学、経営学を学ぶ</p>
        </div>
      </div>
      <div>
        <p class="timeline-date">2020年4月</p>
        <div class="timeline-content">
          <h3>ソースネクスト株式会社入社</h3>
          <p>セールスグループに所属、家電量販店営業を担当</p>
        </div>
      </div>
      <div>
        <p class="timeline-date">2021年6月</p>
        <div class="timeline-content">
          <h3>アルサーガパートナーズ株式会社入社</h3>
          <p>フロントエンドエンジニアとして働く</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.timeline-container {
  width: 60%;
  height: auto;
  padding: 2% 0 3% 3%;
  margin: 0 auto;
}

.timeline > div {
  overflow: hidden;
  margin:0;
  position: relative;
}
.timeline-date {
  width: 110px;
  float: left;
  margin-top: 20px;
}
.timeline-content {
  width: 80%;
  margin: 0 auto;
  float: left;
  padding: 2% 0;
  border-left: 5px #e5e5d1 solid;
}

.timeline-content:before {
  content: "";
  width: 12px;
  height: 12px;
  background: #3cb371;
  /* ここまでで緑色の四角を作る */
  border-radius: 100%;
  /* これで四角から丸にする */
  position: absolute;
  left: 106px;
  top: 24px;
  /* timeline-contentのborder-leftの白線に緑丸を乗せる */
}
</style>