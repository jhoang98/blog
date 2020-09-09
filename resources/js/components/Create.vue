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
                    <div class="form-group">
                        <label class="w-full" for="title">Title:</label>
                        <input type="text" class="form-control" id="title" placeholder="Enter title here" v-model="newTodoTitle" @keyup.enter="addTodoBody">
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
                    <table class="table table-striped">
                        <thead class="thead-dark">
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Body</th>
                            <th scope="col"></th>
                        </tr>
                        </thead>
                        <tbody v-for="(todo) in todos" :key="todo.id">
                            <tr>
                                <td>{{todo.title}}</td>
                                <td>{{todo.body}}</td>
                                <td><router-link class="btn btn-primary" :to="{name:'Show', params: {id:todo.id}}" style="color: black">Read More</router-link>
                                <span class="btn btn-danger" @click="removeTodoPost(todo.id)">Delete</span></td>
                            </tr>
                        </tbody>
                    </table>
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
                idForTodoBody: this.$route.params.id,
                // todobodys: [
                //     {
                //         'id': 1,
                //         'title': 'First Example Title',
                //         'body': 'First Example Body',
                //         'completed': false
                //     }
                // ]
            };
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
            },

            removeTodoPost() {
                let confirmed = confirm('Are you sure you want to delete?');
                if (confirmed){
                    /**JavaScript**/
                    // console.log(id);
                    // this.todos.splice(id,1)

                    /**VueJS**/
                    // this.$delete(this.todos, id);

                    /**Store dispatch**/
                    this.$store.dispatch('delete', {
                        id: this.idForTodoBody,
                        title: this.TodoTitle,
                        body: this.newTodoBody,
                        completed: false,
                    });
                }
            },
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
