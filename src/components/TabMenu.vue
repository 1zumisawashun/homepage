<template>
  <div class="tab-menu-container">
  <ol class="nav-list">
    <li><a  @click="smoothScroll()" href="#home">home</a></li>
    <li><a  @click="smoothScroll()" href="#about">about</a></li>
    <li><a  @click="smoothScroll()" href="#service">service</a></li>
    <li><a  @click="smoothScroll()" href="#work">work</a></li>
    <li><a  @click="smoothScroll()" href="#contact">contact</a></li>
  </ol>

  </div>
</template>

<script>
export default {
  name: "TabMenu",
  data() {
    return {
      
    };
  },
  methods: {
    smoothScroll() {
      const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
      for (let i = 0; i < smoothScrollTrigger.length; i++) {
        smoothScrollTrigger[i].addEventListener("click", (e) => {
           e.preventDefault();
          let href = smoothScrollTrigger[i].getAttribute("href");
          let targetElement = document.getElementById(href.replace("#", ""));
          const rect = targetElement.getBoundingClientRect().top;
          const offset = window.pageYOffset;
          const gap = 60;
          const target = rect + offset - gap;
          window.scrollTo({
            top: target,
            behavior: "smooth",
          });
        });
      }
    },
  },
};
</script>

<style scoped>
.tab-menu-container {
  width: 100%;
  height: 70px;
  background-color: #2c3e50;
  position: fixed;
  z-index: 10;
  /* 一番上に表示する */

}
.nav-list {
  margin-left: auto;
  margin-right: 50px;
  width: 550px;
/* 要素を右に寄せる */
 background-color: #2c3e50;
  display: flex;
  justify-content: center;
  list-style: none;
}

li {
  width: 150px;
  height: 50px;
  font-size: 20px;
  position: relative;
}

a:hover {
  color: #3cb371;
}

/*  router-linkがaタグとして表示されてたのでスタイルをaタグに書いた*/
a {
  /* position: absolute; */
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: white;
  text-decoration: none;
  line-height: 70px;
  font-weight: bold;
}
</style>