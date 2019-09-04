<template>
  <div class="myHome">
       <img alt="myPhoto" src="../assets/myPhoto.jpg">
    <div>
      姓名:{{this.$store.getters.getName}}
      <br>
      电话：186****3573
    </div>
  </div>
</template>

<script>
import router from "../router/router";

export default {
  name: "Home",
  props: {
    msg: String
  },
  data: function() {
    return {};
  },

  methods: {
    back: function() {
      if (confirm("返回首页") == true) {
        router.push("/");
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
