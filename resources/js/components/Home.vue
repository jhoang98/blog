<template>
    <div class="justify-right items-right pt-10">
        <div class="flex flex-wrap max-w-xl">
            <div class="p-2 text-2xl text-gray-800 font-semibold">
                <h1>Create a post here:</h1>
                <router-link class="btn btn-primary" to="/create">Create</router-link>
            </div>
        </div>
        <div class="flex flex-wrap max-w-xl my-5 col-12">
            <h1 class="p-2 text-2xl text-gray-800 font-semibold my-5">Posts:</h1>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Body</th>
                        <th scope="col">Date/Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>bhbbbbh</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

</template>

<script>
export default {

}

</script>
