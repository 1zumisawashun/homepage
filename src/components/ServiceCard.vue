<template>
  <div class="profile-card">
  <div class="profile-card__inner">
  <div class="profile-thumb">
    <img :src="post.image" alt="アイコン">
  </div>
  <div class="profile-content">
        <span class="profile-name">{{post.mainMessage}}</span>
    <!-- <span class="profile-job">デザイナー・フロントエンジニア</span> -->
    <span class="profile-intro">{{post.subMessage}}</span>
  </div>
    </div>
</div>
</template> 

<script>
export default {
  data() {
    return {
    
    }
  },
  props: ["post"],
  mounted(){
    console.log(this.post);
    console.log(this.post.mainMessage)
  }
};
</script>

<style scoped>
.profile-card{
  width: 100%;
  height: 400px;
  border-radius: 5px;
  position: relative;
  background: #fff; /*背景の色*/
  box-shadow: 0px 1px 3px rgba(0,0,0,.18);
  overflow: hidden;
  margin: auto 15px;
}

/* .profile-card:before{
 width:120%;
 height:175px;
 content:"";
 transform:skew(15deg,10deg);
 background:#3cb371;
 position:  absolute;
 top:-15%;
 left:-10%;
 z-index: 0;
} */

.profile-card__inner{
 position: relative;
}

.profile-thumb{
    overflow: hidden;
    width: 100%;
    height: 225px;
    text-align: center;
    background: #fff;
}

.profile-thumb img{
  margin: 20px 0;
  display: inline-block;
    width: 90%;
    height: auto;
    /* margin: auto 2.5%; */
}

.profile-content{
  padding: 15px;
}

.profile-content span{
  display: block;
}

.profile-name{
  color: black;
  font-weight: bold;
  font-size:20px;
  text-align: center;
}

/* .profile-job{
  margin-bottom: 10px;
  color: black;
  font-size: 10px;
  text-align: center;
} */

.profile-intro{
  color: black;
  font-size: 13px;
  margin-top: 10px;
}
</style>