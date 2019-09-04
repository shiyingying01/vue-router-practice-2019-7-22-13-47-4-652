<template>
  <div class="TodoList">
    <div>
      <h2>Vue To Do List</h2>
      <p>
        <em>Simple Todo List with adding and filter by diff status.</em>
      </p>
      <input class="input-text" v-model="todo" />
      <button id="button" v-on:click="add">Add</button>
      <ol>
        <div v-for="(item,index) in mylist" :key="index">
          <li>
            <input type="checkbox" v-on:click="CheckItem(item)" value="item" />
            <span>{{item.value}}</span>
          </li>
        </div>
      </ol>

      <span class="bottom">
        <div @click="all">All</div>
        <div @click="active">Active</div>
        <div @click="complete">Complete</div>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  data() {
    return {
      todo: "",
      mylist: this.$store.getters.getlist
    };
  },
  methods: {
    add: function() {
      this.$store.commit("addlist", this.todo);
    },
    all: function() {
      this.mylist = this.$store.getters.getlist;
    },
    active: function() {
      this.mylist = this.$store.getters.getlist.filter(
        item => item.checked === false
      );
    },
    complete: function() {
      this.mylist = this.$store.getters.getlist.filter(
        item => item.checked === true
      );
    },
    CheckItem: function(item) {
      this.$store.commit("updatelist", item.id);
    }
  }
};
</script>

<style scoped>
.TodoList {
  display: flex;
  justify-content: center;
}
.input-text {
  width: 70%;
}
input {
  padding: 4px 15px 4px 0;
}
#button {
  display: inline-block;
  background-color: #fc999b;
  color: #ffffff;
  border-radius: 5px;
  text-align: center;
  margin-top: 2px;
  padding: 5px 15px;
}
#button:hover {
  opacity: 0.7;
  cursor: pointer;
}
.list {
  margin: 20px;
}
.bottom {
  display: flex;
  flex-wrap: nowrap;
}
.bottom div {
  padding: 10px;
  margin: 5px 10px;
  color: #fc999b;
}
.bottom div:hover {
  border: 1px solid;
  border-radius: 3px;
  cursor: pointer;
}
</style>
