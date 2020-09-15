<template>
    <div style="padding: 100px; border: 1px solid blanchedalmond">
        <h4>{{email.subject}}</h4>
        <hr>
        <p>{{email.message}}</p>
    </div>
</template>

<script>
    export default {
        props:['email']
    }
</script>

<style scoped>

</style>
