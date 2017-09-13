<template>
    <v-layout row wrap>
        <v-flex xs="12" sm="12" md="4" lg="4" v-for="column in columns" :key="column">
            {{ column }}
        </v-flex>
    </v-layout>
</template>
<script>
    export default {
        data () {
            return {
                columns: [
                    'Good',
                    'Bad',
                    'Action',
                    'Action',
                    'Action'
                ],
            }
        }
    }
</script>

