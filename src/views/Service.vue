<template>
  <carousel :per-page="1" :navigation-enabled="true" :autoplay="true" :autoplayTimeout="3500" :loop="true">
    <slide>
      <div class="slick-container">
        <div class="cafelog_container">
          <img src="@/assets/mokku_macbook.png" alt="" class="mokku_macbook" />
          <div class="cafelog_info">
            <p class="cafelog_info_main_text">cafelog</p>
            <hr />
            <p class="cafelog_info_sub_text">
              社会人になってから営業の合間にweb会議があり、出先のカフェを利用することがよくあります。
              その中で問題に感じたのが、お店によってテレワークに適しているお店とそうでないお店が
              あるという点です。コロナ禍で私と同じような状況の人に少しでも作業に集中できるカフェを
              紹介できればと思い作成しました。
            </p>
          </div>
        </div>
      </div>
    </slide>
    <slide class="service-card-container">
      <service-card
      v-for="(ServiceCard, index) in this.ServiceCards"
        :key="index"
        :post="ServiceCard"></service-card>
    </slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import ServiceCard from "@/components/ServiceCard.vue"
export default {
  data() {
    return {
      ServiceCards:[
{
  mainMessage:"インスタ映えに",
  subMessage:"インスタ映え等を意識した綺麗なカフェを紹介することができます。",
image: require("@/assets/cafelog_instagrammable.png"),
},
{
mainMessage:"デートに",
subMessage:"デートでお勧めのカフェを見つけることができます。",
image: require("@/assets/cafelog_date.png"),
},
{
mainMessage:"テレワークに",
subMessage:"テレワークで仕事のしやすい環境を求めている人にお勧めのカフェを紹介します。",
image: require("@/assets/cafelog_telework.png"),
},
{
mainMessage:"一人で過ごしたい",
subMessage:"一人で静かに過ごしたい時にも適したカフェを紹介することができます。",
image: require("@/assets/cafelog_stayalone.png"),
},
      ]
      
    };
  },
  components: {
    Carousel,
    Slide,
    ServiceCard
  },
  mounted(){
    console.log(this.ServiceCards)
  }
};
</script>

<style scope>
.VueCarousel-pagination[data-v-438fd353] {
    display: none;
}
.service-card-container{
  width: 100%;
  height: auto;
  display: flex;
}
.slick-container {
  width: 100%;
  height: auto;
 
}
.cafelog_container {
  width: 100%;
  height: auto;
  display: flex;
}
/* .mokku_iphone{
  width: 200px;
  height: auto;
} */
.mokku_macbook {
  width: 45%;
  height: auto;
  margin: 0 2.5% 0;
}
.slick-dots li {
  background-color: white;
}
.cafelog_info {
  width: 43%;
  height: 350px;
  background-color: white;
  margin: 100px 5% 0 2%;
  padding: 20px;
  border-radius: 10px;
}
hr {
  margin: 10px 0 50px;
}
.cafelog_info_main_text {
  font-size: 30px;
  color: #2c3e50;
  font-weight: bold;
}
.cafelog_info_sub_text {
  font-size: 20px;
  color: #2c3e50;
  font-weight: bold;
}
</style>