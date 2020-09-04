<template>
    <div class="container">
        <div class="flex flex-wrap w-full my-5">
            <div class="col-12">
                <div class="p-2 text-2xl text-gray-800 font-semibold">
                    <h1>Read Post:</h1>
                </div>
                <form id="myForm" class="form">
                    <div class="p-2 w-full">
                        <div class="form-group">
                            <label class="w-full" for="title">Title:</label>
                            <input type="text"  class="form-control" id="title" disabled v-model="newTodoTitle" @keyup.enter="addTodoBody">
                        </div>
                        <div class="form-group">
                            <label class="w-full" for="body">Body:</label>
                            <input type="text" class="form-control" id="body" disabled v-model="newTodoBody" @keyup.enter="addTodoBody">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Store.vue"
    }
</script>

<style scoped>

</style>
