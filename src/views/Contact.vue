<template>
  <div class="contact-container">
    <div>    </div>
  </div>
</template>


<script>
export default {
  mounted() {
    /* global $ */
    $(function () {
      $("ul li").each(function (i) {
        setTimeout(function () {
          $("ul li").eq(i).addClass("active");
        }, 500 * i);
      });
    });
  },
};
</script>

<style scope>

.contact-container{
width: 100%;
height: 600px;
background-color: #2c3e50;

}
/* img {
  width: 300px;
  height: auto;
  object-fit: cover;
} */
/* 
header {
  width: 50%;
  height: 100vh;
  position: relative;
  overflow: hidden;
} */

ul li:nth-of-type(1) {
  opacity: 0;
  transform: translate(-50%, 0);
  transition: all 1000ms;
  
}

ul li:nth-of-type(2) {
  opacity: 0;
  transform: translate(-50%, 0);
  transition: all 1000ms;
}

/* 
ul li:nth-of-type(3) {
  opacity: 0;
  transform: translateY(200px);
  transition: all 1000ms;
}

ul li:nth-of-type(4) {
  opacity: 0;
  transform: translateY(200px);
  transition: all 1000ms;
} */

ul li:nth-of-type(1).active {
  overflow: hidden;
  position: relative;
  width: 60%;
  transform: translate3d(-100.5%, 0, 0);
  transform-origin: left;
  transition-duration: 1s;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  transition-delay: 0s;
}
ul li:nth-of-type(1).active:before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom:0;
  left: 0;
  z-index: 2;
  background-color: #000; /*黒ブロックの色指定*/
  transform: scaleX(1);
  transform-origin: right;
  transition-duration: 1s;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  transition-delay: 0.4s;
}

ul li:nth-of-type(2).active {
  /* width: calc(100% - 40%);
  height: calc(100% - 20%); */
  width: 50%;
  height: 20%;
  position: absolute;
  background-size: cover;
  color: white;
  left: 0;
  top: 0;
  opacity: 1;
  transform: translate(0, 0);
  /* background: url(https://oki-sitelabo.com/wp-content/uploads/2019/10/01-3.jpg)  */
    /* 50% 50% / cover no-repeat; */
}
/* 
ul li:nth-of-type(3).active {
  width: calc(100% - 40%);
  height: calc(100% - 50%);
  position: absolute;
  right: 0;
  bottom: 0;
  opacity: 1;
  transform: translate(0, 0);
  background: #b5c7d3;
}

ul li:nth-of-type(4).active {
  width: calc(100% - 40%);
  height: calc(100% - 50%);
  position: absolute;
  right: 0;
  bottom: 0;
  opacity: 1;
  transform: translate(0, 0);
  background: url(https://oki-sitelabo.com/wp-content/uploads/2019/09/04-1.jpg)
    50% 50% / cover no-repeat;
} */
</style>