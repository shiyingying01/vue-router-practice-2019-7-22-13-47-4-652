<template>
  <div class="hello">
       <img alt="Vue logo" src="../assets/logo.png">
    <div>
      <input v-model="name" placeholder="请输入你的名字" />
      <br />
    </div>
    <br />
    <div>
      <button @click="enter">开始使用</button>
    </div>
  </div>
</template>

<script>
import router from "../router/router";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data: function() {
    return {
      name: ""
    };
  },

  methods: {
    enter: function() {
      this.$store.commit("addName", this.name);
      router.push("/home");
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
