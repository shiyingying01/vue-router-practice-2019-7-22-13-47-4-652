<template>
  <div class="hello">
    <div>
      <h1>{{ this.$store.getters.getMsg1 }}</h1>
      <h1>{{ this.$store.getters.getMsg2 }}</h1>
    </div>
    <br />
    <div>
      <button @click="callall">callall</button>
      <button @click="resetall">reset</button>
    </div>
  </div>
</template>

<script>

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data: function() {
    return {
      msg1: "",
      msg2: ""
    };
  },


  methods: {
    callall: function() {
     this.$store.dispatch('getData')
    },

    resetall: function() {
      this.$store.dispatch('clear')
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
