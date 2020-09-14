<template>
    <div class="justify-right items-right pt-10">
        <div class="flex flex-wrap max-w-xl">
            <div class="p-2 text-2xl text-gray-800 font-semibold">
                <h1>Create a post here:</h1>
                <router-link class="btn btn-primary" to="/create">Create</router-link>
            </div>
        </div>
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
                    <p>There is nothing to do</p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: 'newTodo',

    data () {
        return {
            newTodoId:'',
            newTodoTitle:'',
            newTodoBody:'',
            idForTodoBody:this.$route.params.id
        };
    },

    computed: {
        ...mapGetters({
            todos: 'todos'
        })
    },

    methods: {
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
        }
    },

}

</script>
