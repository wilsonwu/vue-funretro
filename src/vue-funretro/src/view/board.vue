<template>
    <v-layout row wrap>
        <v-flex v-for="column in columns" :key="column">
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

