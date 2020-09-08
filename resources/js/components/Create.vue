<template>
    <div class="container">
        <div class="flex flex-wrap w-full my-5">
            <div class="col-12">
                <div class="p-2 text-2xl text-gray-800 font-semibold">
                    <h1>Create a post here:</h1>
                    <p>Click enter to submit your post</p>
                </div>
                <form id="myForm" class="form">
                    <div class="p-2 w-full">
                        <div class="form-group">
                            <label class="w-full" for="title">Title:</label>
                            <input type="text"  class="form-control" id="title" placeholder="Enter title here" v-model="newTodoTitle" @keyup.enter="addTodoBody">
                        </div>
                        <div class="form-group">
                            <label class="w-full" for="body">Body:</label>
                            <input type="text" class="form-control" id="body" placeholder="Enter body here" v-model="newTodoBody" @keyup.enter="addTodoBody">
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-12">
                <h1 class="p-2 text-2xl text-gray-800 font-semibold my-5">Posts:</h1>
                <div v-for="todo in todos" :key="todo.id">
                    <div class="col-6 float-lg-left ellipsis">
                        <h2>Title:  {{todo.title}}</h2>
                    </div>
                    <div class="col-6 float-lg-right ellipsis">
                        <h2>Body: {{todo.body}}</h2>
                    </div>
                    <router-link class="col-12 btn btn-lg btn-success" :to="{name:'Show', params: {id:todo.id}}" style="color: black">Read More</router-link>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import {
     mapGetters
    } from "vuex";

    export default {
        name: 'newTodo',
        data () {
            return {
                newTodoTitle:'',
                newTodoBody:'',
                idForTodoBody: 2,
                // todobodys: [
                //     {
                //         'id': 1,
                //         'title': 'First Example Title',
                //         'body': 'First Example Body',
                //         'completed': false
                //     }
                // ]
            }
        },

        computed: {
            ...mapGetters({
                todos: 'todos'
            })
        },

        methods: {
            addTodoBody() {
                if ( this.newTodoTitle.trim().length === 0) {
                    return
                }
                // this.todobodys.push({
                //     id: this.idForTodoBody,
                //     title: this.newTodoTitle,
                //     body: this.newTodoBody,
                //     completed: false,
                // });

                this.$store.dispatch('add', {
                    id: this.idForTodoBody,
                    title: this.newTodoTitle,
                    body: this.newTodoBody,
                    completed: false,
                });

                this.newTodoTitle = '';
                this.idForTodoTitle='';
                this.newTodoBody = '';
                this.idForTodoBody='';
            }

        }
    }
</script>

<style>
    .ellipsis {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
</style>
