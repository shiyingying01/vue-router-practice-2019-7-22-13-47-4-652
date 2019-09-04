import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        name:"",
        list: []
    },
    getters: {
        getlist: function (state) {
            return state.list
        },
        getName: function (state) {
            return state.name
        }
    },
    mutations: {
        addlist(state, item) {
            state.list.push({ id: state.list.length, value: item, checked: false })
        },
        addName(state, name) {
            state.name=name
        },
        updatelist(state, id) {
            if (state.list[id].checked) {
                state.list[id].checked = false;
            }
            state.list[id].checked = true;
        }
    },
    actions: {
        addlist(store) {
        axios.get("http://127.0.0.1:8080/addlist").then(function (response) {
        store.commit('addlist', response.data.item)
        });
        },
        update(store,id) {
        axios.get("http://127.0.0.1:8080/update"+id).then(function (response) {
        store.commit('update', response.data.item)
        });
        }
        }
})

export default store;