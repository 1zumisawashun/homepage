<template>
  <div class="cafelog_container"
><img src="@/assets/mokku_macbook.png" alt="" class="mokku_macbook">
<div class="cafelog_info">
  <p class="cafelog_info_main_text">cafelog</p>
  <hr>
<p class="cafelog_info_sub_text">社会人になってから営業の合間にweb会議があり、出先のカフェを利用することがよくあります。
その中で問題に感じたのが、お店によってテレワークに適しているお店とそうでないお店が
あるという点です。コロナ禍で私と同じような状況の人に少しでも作業に集中できるカフェを
紹介できればと思い作成しました。</p>
</div>
</div>

</template>

<script>
export default {};
</script>

<style scope>
.cafelog_container{
  width: 100%;
  height: auto;
  display: flex;
  
}
/* .mokku_iphone{
  width: 200px;
  height: auto;
} */
.mokku_macbook{
  width: 45%;
  height: auto;
  margin: 0 2.5% 0;
}
.cafelog_info{
  width: 43%;
  height: 350px;
  background-color: white;
  margin: 100px 5% 0 2%;
  padding: 20px;
  border-radius: 10px;
  
}
hr{
  margin: 10px 0 50px;
}
.cafelog_info_main_text{
  font-size: 30px;
  color: #2c3e50;
  font-weight: bold;
}
.cafelog_info_sub_text{
  font-size: 20px;
  color: #2c3e50;
  font-weight: bold;
}


</style>