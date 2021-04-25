<template>
  <span>
    <div class="first-parallax-block"></div>

    <div  id="home" class="my-info">
      <div class="Item-Box JS_ScrollItem1">
        <div class="Item-Box-ImgBox">HELLO <br /></div>
      </div>

      <div class="Item-Box JS_ScrollItem2">
        <div class="Item-Box-ImgBox">I'M<br /></div>
      </div>

      <div class="Item-Box JS_ScrollItem3">
        <div class="Item-Box-ImgBox">SHUN</div>
      </div>

      <div class="Item-Box JS_ScrollItem4">
        <div class="Item-Box-ImgBox-mini">Front-end Engineer.
          I combine the best of our skills and ideas 
          to present you products really worth your attention 
          that will change the way you think about design,
           structure, color and website itself.
        </div>
      </div>

    </div>

    <div  id="about" class="about-scrollbox">
      <div class="Heading-Box JS_ScrollItem">
        <div class="Heading-Box-ImgBox">
          <div class="heading"><span class="green">01</span> PFOFILE</div>
        </div>
      </div>
      <about></about>
    </div>
    
    <div  id="service" class="service-scrollbox">
      <div class="Heading-Box JS_ScrollItem">
        <div class="Heading-Box-ImgBox">
          <div class="heading"><span class="green">02</span> SERVICE</div>
        </div>
      </div>
      <service></service>
    </div>

    <div  id="work" class="work-scrollbox">
      <div class="Heading-Box JS_ScrollItem">
        <div class="Heading-Box-ImgBox">
          <div class="heading"><span class="green">03</span> WORK</div>
        </div>
      </div>
      <work></work>
    </div>

    <div class="second-parallax-block"></div>
    
    <div  id="contact" class="contact-scrollbox">
      <div class="Heading-Box JS_ScrollItem">
        <div class="Heading-Box-ImgBox">
          <div class="heading"><span class="green">04</span> CONTACT</div>
        </div>
      </div>
      <contact></contact>
    </div>
  </span>
</template>

<script>
import work from "../views/Work.vue";
import about from "../views/About.vue";
import contact from "../views/Contact.vue";
import service from "../views/Service.vue";
export default {
  components: {
    work,
    about,
    contact,
    service
  },
  mounted() {
    /* global $ */
    $(function () {
      // $(".JS_ScrollItem1").each(function () {
        setTimeout(function () {
          $(".JS_ScrollItem1").addClass("isShow");
        }, 250);
      });
    // });
    $(function () {
      $(".JS_ScrollItem2").each(function () {
        setTimeout(function () {
          $(".JS_ScrollItem2").addClass("isShow");
        }, 500);
        // 0.5秒後にクラスを付与する
      });
    });
    $(function () {
      $(".JS_ScrollItem3").each(function () {
        setTimeout(function () {
          $(".JS_ScrollItem3").addClass("isShow");
        }, 750);
      });
    });
    $(function () {
      $(".JS_ScrollItem4").each(function () {
        setTimeout(function () {
          $(".JS_ScrollItem4").addClass("isShow");
        }, 1000);
      });
    });

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
  },
};
</script>

<style scoped>
/*固定する背景*/
.first-parallax-block {
  width: 100%;
  height: 850px;
  background-image: url("../assets/userimage.jpg");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  box-sizing: border-box;
  display: flex;
  padding: 20% 0 20% 5%;
}
.first-parallax-block::before {
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 850px;
  content: " ";
}
.my-info {
  position: absolute;
  text-align: left;
  top: 80px;
  left: 30%;
  width: 70%;
  color: white;
  padding: 100px 0;
  font-weight: bold;
  font-size: 6rem;
}

.second-parallax-block {
  width: 100%;
  height: 300px;
  background-image: url("../assets/note1.jpg");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
}

/*スクロールするコンテンツ*/

.about-scrollbox {
  padding: 60px 0;
  color: #f1f1f1;
  background-color: #2c3e50;
  width: 100%;
  height: auto;
  border-bottom: solid 1px #f1f1f1;
}
.service-scrollbox {
  padding: 60px 0;
  color: #f1f1f1;
  background-color: #2c3e50;
  width: 100%;
  height: auto;
  border-bottom: solid 1px #f1f1f1;
}
.work-scrollbox {
  padding: 60px 0;
  background-color: #2c3e50;
  width: 100%;
  height: auto;
  border-bottom: solid 1px #f1f1f1;
}
.contact-scrollbox {
  padding: 60px 0;
  background-color: #2c3e50;
  width: 100%;
  height: 500px;
}
.heading {
  width: 50%;
  margin: 0 auto;
  justify-content: center;
  padding: 0 2% 2% 2%;
  display: flex;
  color: #f1f1f1;
  font-size: 4rem;
  font-weight: bold;
}
.green {
  color: #3cb371;
}

.Item-Box-ImgBox-mini{
  font-size: 18px;
  width: 35%;
}

/* JQueryのためのCSS要素 */
.Item-Box {
  overflow: hidden;
}
.Item-Box-ImgBox {
  overflow: hidden;
  position: relative;
  width: 40%;
  transform: translate3d(-100.5%, 0, 0);
  /* マイナスに入れて隠す */
  transform-origin: left;
  transition-duration: 1s;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  transition-delay: 0s;
}

.Item-Box.isShow .Item-Box-ImgBox {
  transform: translate3d(0, 0, 0);
}
.Item-Box-ImgBox:before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  background-color: #3cb371; /*黒ブロックの色指定*/
  transform: scaleX(1);
  transform-origin: right;
  transition-duration: 1s;
  /* １秒間かけて変化する */
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  /* どのように変化していくかを指定 */
  transition-delay: 0.5s;
  /* 変化する前に２秒間待つ */
}
.Item-Box.isShow .Item-Box-ImgBox:before {
  transform: scale(0, 1);
}
/* ここからもう一個のスクロール要素 */
.Heading-Box-ImgBox {
  overflow: hidden;
  position: relative;
  width: 100%;
  transform: translate3d(-100.5%, 0, 0);
  transform-origin: left;
  transition-duration: 1s;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  transition-delay: 0s;
}

.Heading-Box.isShow .Heading-Box-ImgBox {
  transform: translate3d(0, 0, 0);
}
.Heading-Box-ImgBox:before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  right: 30%;
  bottom: 0;
  left: 30%;
  z-index: 2;
  background-color: #3cb371; /*黒ブロックの色指定*/
  transform: scaleX(1);
  transform-origin: right;
  transition-duration: 1s;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  transition-delay: 0.7s;
}
.Heading-Box.isShow .Heading-Box-ImgBox:before {
  transform: scale(0, 1);
}
</style>
