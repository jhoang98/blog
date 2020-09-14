<template>
    <div class="container">
        <div class="justify-right items-right pt-10">
            <div class="flex flex-wrap max-w-xl">
                <div class="p-2 text-2xl text-gray-800 font-semibold">
                    <h1>Create a post here:</h1>
                </div>
            </div>
            <form id="myForm" class="form">
                <div class="p-2 w-full">
                    <div class="form-group" v-bind:title="todos.title">
                        <label class="w-full" for="title">Title:</label>
                        <input type="text" class="form-control" id="title" placeholder="Enter title here" title v-model="newTodoTitle" @keyup.enter="addTodoBody">
                    </div>
                    <div class="form-group">
                        <label class="w-full" for="body">Body:</label>
                        <input type="text" class="form-control" id="body" placeholder="Enter body here" v-model="newTodoBody" @keyup.enter="addTodoBody">
                    </div>
                </div>
            </form>
            <div class="col-12">
                <div class="flex flex-wrap my-5 row">
                    <h1 class="p-2 text-2xl text-gray-800 font-semibold my-5 col-12">Posts:</h1>
                    <div class="col-12 p-2" v-if="todos.length">
                        <table class="table table-striped">
                            <thead class="thead-dark">
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Title</th>
                                <th scope="col">Body</th>
                                <th scope="col">Date/Time</th>
                                <th scope="col"></th>
                            </tr>
                            </thead>
                            <tbody v-for="(todo) in todos" :key="todo.id">
                            <tr>
                                <td id>{{todo.id}}</td>
                                <td title>{{todo.title}}</td>
                                <td>{{todo.body}}</td>
                                <td></td>
                                <td><router-link class="btn btn-primary" :to="{name:'Show', params: {id:todo.id}}" style="color: black">Read More</router-link>
                                    <span class="btn btn-danger" @click="removeTodoPost(todo.id)">Delete</span></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="col-12 p-2" v-else>
                        <p>There'is nothing to do</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-wrap max-w-xl">
                <div class="p-2 text-2xl text-gray-800 font-semibold">
                    <a class="btn btn-primary" @click="$router.go(-1)">Back</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        mapGetters
    } from "vuex";
    let id = 0;

    const uniqueId = require('lodash.uniqueid');

    export default {
        name: 'newTodo',
        data () {
            return {
                id:[],
                newTodoTitle:'',
                newTodoBody:'',
                idForTodoBody:this.$route.params.id
            };
        },

        mounted() {
            this.id = uniqueId()
        },

        computed: {
            ...mapGetters({
                todos: 'todos'
            })
        },

        methods: {
            addTodoBody(number) {
                if ( this.newTodoTitle.trim().length === 0) {
                    return;
                }
                // this.todobodys.push({
                //     id: this.idForTodoBody,
                //     title: this.newTodoTitle,
                //     body: this.newTodoBody,
                //     completed: false,
                // });
                this.$store.dispatch('add', {
                    id: this.isExist('id'),
                    title: this.newTodoTitle,
                    body: this.newTodoBody,
                    completed: false
                });

                this.id = '';
                this.newTodoTitle = '';
                this.newTodoBody = '';
                this.idForTodoBody='';
            },

            removeTodoPost(id) {
                let confirmed = confirm('Are you sure you want to delete?');
                if (confirmed){
                    /**JavaScript**/
                    // console.log(id);
                    // this.todos.splice(id,1)

                    /**VueJS**/
                    // this.$delete(this.todos, id);

                    /**Store dispatch**/
                    this.$store.dispatch('delete', id);
                }
            },

            isExist : function () {
                let exist;
                for (let i = 0; i < this.id.length; i++) {
                    if (this.id[i].todos !== this.todos) {
                        return exist = id + 1;
                    }
                }
            },
        },
    }
</script>

<style>
    .ellipsis {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
</style>
