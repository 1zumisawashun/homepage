<template>
  <div class="all-container">
    <div class="user-container">
      <img src="../assets/userimage2.jpg" class="user-image" />
      <div class="user-info">
        <strong>{{ user.name }}</strong>
        <div class="summary-block">
          <div class="Item-Box JS_ScrollItem">
            <div class="Item-Box-ImgBox">
              <strong>{{ user.firstInfo }}</strong> <br />
            </div>
          </div>
          <div class="Item-Box JS_ScrollItem">
            <div class="Item-Box-ImgBox">
              <strong>{{ user.secondInfo }}</strong> <br />
            </div>
          </div>
          <div class="Item-Box JS_ScrollItem">
            <div class="Item-Box-ImgBox">
              <strong>{{ user.thirdInfo }}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="skill-container">
      <div class="skill-title">SKILLSET</div>
      <div class="skill">
        <h2 class="skill-block animation type-1">{{ skills[0].title }}</h2>
        <h2 class="skill-block animation type-2">{{ skills[1].title }}</h2>
        <h2 class="skill-block animation type-3">{{ skills[2].title }}</h2>
        <h2 class="skill-block animation type-4">{{ skills[3].title }}</h2>
        <h2 class="skill-block animation type-5">{{ skills[4].title }}</h2>
        <h2 class="skill-block animation type-6">{{ skills[5].title }}</h2>
        <h2 class="skill-block animation type-7">{{ skills[6].title }}</h2>
      </div>
      <div class="skill-title">STUDYING</div>
      <div class="stydying skill">
        <h2 class="skill-block animation type-1">{{ skills[7].title }}</h2>
        <h2 class="skill-block animation type-2">{{ skills[8].title }}</h2>
      </div>
    </div>
    <div class="timeline-title">TIMELINE</div>
      <timeline></timeline>
  </div>
</template>

<script>
import Timeline from '../components/Timeline.vue';
export default {
  data() {
    return {
      user: {
        name: "しゅん",
        firstInfo:
          "IT企業の総合職（営業職）として新卒入社、仕事の傍大学時代から趣味でやっていたプログラミングをしています。",
        secondInfo: "大学は駒澤大学でアルバイトはスタバでやっていました。",
        thirdInfo: "コーヒーが大好きで、よくカフェに行って勉強をしています。",
      },
      skills: [
        { title: "HTML" },
        { title: "CSS" },
        { title: "Ruby" },
        { title: "Ruby on Rails" },
        { title: "JavaScript" },
        { title: "Vue.js" },
        { title: "Firebase" },
        { title: "Docker" },
        { title: "Cercle CI/CD" },
      ],
    };
  },
  components:{
Timeline
  },
  mounted(){
    /* global $ */
    $(".JS_ScrollItem").each(function () {
      let $item = $(this);
      $(window).on("scroll", function () {
        let top = $item.offset().top; // ターゲットの位置取得
        let position = top - $(window).height(); // イベントを発火させたい位置
        if ($(window).scrollTop() > position) {
          $item.addClass("isShow");
          // 一定の位置までスクロールしたらクラスisshowを付与する
        }
      });
    });
  }
};
</script>

<style scoped>

.summary-block {
  width: 60%;
  margin: 0 auto;
  height: auto;
  padding: 2%;
}
.fade-enter-active {
  transition: all 1s 0s ease;
}
.fade-enter {
  opacity: 0;
}

.user-container {
  width: 100%;
  height: auto;
}
.user-image {
  width: 150px;
  height: 150px;
  margin: 0 auto;
  border-radius: 50%;
  object-fit: cover;
}
.user-info p {
  width: 50%;
  margin: 0 auto;
  text-align: center;
  font-size: 18px;
  padding-top: 25px;
}
.skill-container {
  width: 100%;
  height: auto;
  margin: 0 auto;
}
.skill-block {
  width: auto;
  height: auto;
  border: solid 1px #f1f1f1;
  padding: 1%;
  margin: 1%;
}
.skill {
  justify-content: center;
  /* これで要素を真ん中にしている */
  font-size: 10px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
}
.skill-title,
.timeline-title {
  font-size: 30px;
  font-weight: bold;
  color:white;
  padding: 3% 0 0 0;
}
/* JQueryのためのCSS要素 */
.Item-Box {
  overflow: hidden;
}
.Item-Box-ImgBox {
  overflow: hidden;
  position: relative;
  width: 100%;
  transform: translate3d(-100.5%, 0, 0);
  transform-origin: left;
  transition-duration: 1s;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  transition-delay: 0s;
}

.Item-Box.isShow .Item-Box-ImgBox {
  transform: translate3d(0, 0, 0);
}
/* .Item-Box-ImgBox:before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  background-color: black; 
  transform: scaleX(1);
  transform-origin: right;
  transition-duration: 1s;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  transition-delay: 0.4s;
}
.Item-Box.isShow .Item-Box-ImgBox:before {
  transform: scale(0, 1);
} */

/* ふわふわ浮かす要素 */
@keyframes pluse {
  0% {
    transform: scale3d(1, 1, 1);
  }
  50% {
    transform: scale3d(1.1, 1.1, 1.1);
  }
  100% {
    transform: scale3d(1, 1, 1);
  }
}

.animation {
  animation-duration: 1s;
  animation-name: pluse;
  animation-iteration-count: infinite;
}

.type-1 {
  animation-duration: 1s;
}
.type-2 {
  animation-duration: 1.1s;
}
.type-3 {
  animation-duration: 1.2s;
}
.type-4 {
  animation-duration: 1.3s;
}
.type-5 {
  animation-duration: 1.4s;
}
.type-6 {
  animation-duration: 1.5s;
}
.type-7 {
  animation-duration: 1.6s;
}
.type-8 {
  animation-duration: 1.7s;
}
</style>
