<template>
  <div class="card">
    <p>{{card.title}}</p>
    <p>{{card.text}}</p>
  </div>
</template> 

<script>
export default {
  props: {
    card: {
      type: Object
    }
  }
};
</script>

<style>
.card {
  width: 30%;
  background-color: bisque;
  margin: 5px;
  border-radius: 5px;
  font-size: 20px;
}
</style>