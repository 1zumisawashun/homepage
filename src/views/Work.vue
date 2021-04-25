<template>
  <div style="padding: 0 0 50px 0">
    <div class="all-works-container">
      <div class="title">ポートフォリオ</div>
      <div class="works-container">
        <div
          class="works-block"
          v-for="Portfolio in Portfolios"
          v-bind:key="Portfolio"
        >
          <transition name="fade">
            <div class="card card-skin">
              <a :href="Portfolio.url">
                <img
                  :src="Portfolio.image"
                  :href="Portfolio.url"
                  class="card__image"
                />
              </a>
              <div class="card__textbox">
                <div class="card__titletext">
                  {{ Portfolio.title }}
                </div>
                <div class="card__overviewtext">
                  {{ Portfolio.text }}
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
    <div class="all-works-container">
      <div class="title">Note</div>
      <div class="works-container">
        <div class="works-block" v-for="note in notes" v-bind:key="note">
          <transition name="fade">
            <div class="card card-skin">
              <a :href="note.url">
                <img :src="note.image" class="card__image" />
              </a>
              <div class="card__textbox">
                <div class="card__titletext">
                  {{ note.title }}
                </div>
                <div class="card__overviewtext">
                  {{ note.text }}
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
    <div class="all-works-container">
      <div class="title">日経未来面</div>
      <div class="works-container">
        <div
          class="works-block"
          v-for="miraimen in miraimens"
          v-bind:key="miraimen"
        >
          <transition name="fade">
            <div class="card card-skin">
              <a :href="miraimen.url">
                <img :src="miraimen.image" class="card__image" />
              </a>
              <div class="card__textbox">
                <div class="card__titletext">
                  {{ miraimen.title }}
                </div>
                <div class="card__overviewtext">
                  {{ miraimen.text }}
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Output",
  data() {
    return {
      Portfolios: [
        {
          title: "cafelog",
          text: "カフェ情報発信サイト",
          url: "https://vuestagram-20f8d.firebaseapp.com/",
          image: require("@/assets/portfolio1.jpg"),
        },
        {
          title: "college-market",
          text: "大学生のための物々交換サイト",
          url: "https://college-market-c83c3.firebaseapp.com/",
          image: require("@/assets/portfolio2.jpg"),
        },
        {
          title: "homepage",
          text: "自己紹介サイト",
          image: require("@/assets/logo.png"),
        },
        {
          title: "puppeteer",
          text: "webスクレイピングサイト",
          image: require("@/assets/puppeteer.png"),
        },
      ],
      notes: [
        {
          title: "Vue.jsとFirebaseでポートフォリオを作ってみた",
          text: "プログラミング",
          image: require("@/assets/note1.jpg"),
        },
        {
          title: "No Title",
          text: "No Content",
          image: "https://placehold.jp/640x360.png",
        },
        {
          title: "No Title",
          text: "No Content",
          image: "https://placehold.jp/640x360.png",
        },
        {
          title: "No Title",
          text: "No Content",
          image: "https://placehold.jp/640x360.png",
        },
      ],
      miraimens: [
        {
          title: "未来のwell-beingな生活のために何をつくる？",
          text: "2018/7/23 ライオン",
          url: "https://www.nikkei.com/article/DGXMZO33096310Y8A710C1TBU000",
          image: require("@/assets/miraimen1.jpg"),
        },
        {
          title: "デジタル技術でどんな暮らしを実現する？",
          text: "2019/4/22 三菱ケミカルホールディングス",
          url: "https://www.nikkei.com/article/DGXZZO43817810W9A410C1000000",
          image: require("@/assets/miraimen2.jpg"),
        },
        {
          title: "社会をスムーズにするための新しい動きとは？",
          text: "2019/10/28 日本精工",
          url: "https://www.nikkei.com/article/DGXMZO51387840V21C19A0TBU000",
          image: require("@/assets/miraimen3.jpg"),
        },
        {
          title: "No Title",
          text: "No Content",
          image: "https://placehold.jp/640x360.png",
        },
      ],
    };
  },
  mounted() {},
};
</script>

<style scoped>
.title {
  font-size: 30px;
  font-weight: bold;
  margin: 1%;
  color: white;
}
.works-container {
  width: 90%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
}
.works-block {
  width: 23%;
  margin: 1%;
}

.card-skin {
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}
.card {
  width: 100%;
  height: auto;
  background-color: white;
}

.card__image {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-bottom: solid 0.5px #f1f1f1;
}
.card__textbox {
  width: 100%;
  height: auto;
  /* ここで高さを調節できる20px以下だと画像との間に隙間ができる */
  padding: 22px 18px;
  box-sizing: border-box;
  background-color: white;
}

.card__textbox > * + * {
  margin-top: 10px;
}

.card__titletext {
  font-size: 20px;
  font-weight: bold;
  line-height: 125%;
}

.card__overviewtext {
  font-size: 12px;
  line-height: 150%;
}

/* */
.fade-enter-active {
  transition: all 1s 0s ease;
}
.fade-enter {
  transform: translate(-200px, 0);
}

/* */
.top-left-enter-active,
.top-left-leave-active {
  transform: translate(0px, 0px);
  transition: transform 1s cubic-bezier(0, 0, 0.2, 1) 0ms;
}
.top-left-enter,
.top-left-leave-to {
  transform: translateY(-100vh) translateX(-100vh);
}
</style>