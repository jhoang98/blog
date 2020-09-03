<template>
    <div class="container">
        <div class="flex flex-wrap w-full my-5">
            <div class="col-12">
                <div class="p-2 text-2xl text-gray-800 font-semibold">
                    <h1>Create a post here:</h1>
                    <p>Click enter to submit your post</p>
                </div>
                <div class="p-2 w-full">
                    <div class="form-group">
                        <label class="w-full" for="title">Title:</label>
                        <input type="text"  class="form-control" id="title" placeholder="Enter title here" v-model="newTodoTitle" @keyup.enter="addTodoTitle">
                    </div>
                    <div class="form-group">
                        <label class="w-full" for="body">Body:</label>
                        <input type="text"  class="form-control" id="body" placeholder="Enter body here" v-model="newTodoBody" @keyup.enter="addTodoBody">
                    </div>
                    <div class="form-group">

                    </div>
                </div>
            </div>
        </div>

        <div class="col-12">
            <h1 class="p-2 text-2xl text-gray-800 font-semibold my-5">Posts:</h1>
            <div class="col-6 float-lg-left">
                <div v-for="todo in todos" :key="todo.id">
                    <h2>Title:  {{todo.title}}</h2>
                </div>
            </div>
            <div class="col-6 float-lg-right">
                <div v-for="todobody in todobodys" :key="todobody.id">
                    <h2>Body: {{todobody.body}}</h2>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
    export default {
        name: 'newTodo',
        data () {
            return {
                newTodoTitle:'',
                idForTodoTitle: 3,
                todos: [
                    {
                        'id': 1,
                        'title': 'First Example Title',
                        'completed': false
                    }
                ],

                newTodoBody:'',
                idForTodoBody: 3,
                todobodys: [
                    {
                        'id': 1,
                        'body': 'First Example Body',
                        'completed': false
                    }
                ]
            }
        },

        methods: {
            addTodoTitle() {
                if (this.newTodoTitle.trim().length === 0 ) {
                    return
                }
                this.todos.push({
                    id: this.idForTodoTitle,
                    title: this.newTodoTitle,
                    completed: false,
                });

                this.newTodoTitle = '';
                this.idForTodoTitle=''
            },

            addTodoBody() {
                if (this.newTodoBody.trim().length === 0 ) {
                    return
                }
                this.todobodys.push({
                    id: this.idForTodoBody,
                    body: this.newTodoBody,
                    completed: false,
                });

                this.newTodoBody = '';
                this.idForTodoBody=''
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
