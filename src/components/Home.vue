<template>
  <div class="home">
    <div>
      <button @click="back">返回首页</button>&ensp;
      <span>{{this.$store.getters.getName}}</span>
      <br>
      <router-link to='/myhome'>我的</router-link>&ensp;&ensp;
      <router-link to='/todolist'>TodoList列表</router-link>
    </div>
    <TodoList/>
  </div>
</template>

<script>
import router from "../router/router";
import TodoList from '../components/TodoList.vue'
export default {
  name: "Home",
  props: {
    msg: String
  },
  components:{
      TodoList
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
