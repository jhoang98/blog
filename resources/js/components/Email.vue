<template>
    <div>
        <h1>Email App</h1>
        <ul>
            <li v-for="email in emails" :key="email.id" @click="detailMail = email">
                <p>{{ email.subject }}</p>
            </li>
        </ul>
        <email-detail :email="detailMail"></email-detail>
    </div>
</template>

<script>
    import EmailDetail from './EmailDetail.vue'

    export default {
        name: "Email.vue",

        components: {
            EmailDetail
        },

        data () {
            return {
                detailMail: null,
                emails: [
                    {
                        id: 1,
                        subject: 'Message 1',
                        message: 'fjekfj fkoe'
                    },
                    {
                        id: 2,
                        subject: 'Message 2',
                        message: 'fhthhtjuy'
                    },
                ]
            }
        },
    }
</script>

<style scoped>

</style>
