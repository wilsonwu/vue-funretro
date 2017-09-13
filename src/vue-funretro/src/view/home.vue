<template>
    <v-flex xs12>
        <div xs12 class="text-xs-center">
            <h2 class="pa-4">Fun Retro</h2>
            <v-btn dark large :ripple="{ class: 'success--text' }" @click.native.stop="dialog = true">Create New Board</v-btn>
            <v-dialog v-model="dialog">
            <v-card>
                <v-card-title class="headline">Create New Board</v-card-title>
                <v-card-text>
                    <v-flex xs12>
                        <v-text-field label="Board Name" required></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                        <v-text-field label="Max Votes Per User" hint="Whole Board" value="6" required></v-text-field>
                    </v-flex>
                </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                    <v-btn class="green--text darken-1" flat="flat" @click.native="dialog = false">Close</v-btn>
                    <v-btn class="green--text darken-1" flat="flat" @click="$router.push({path:'/board/1'})">Create</v-btn>
                </v-card-actions>
            </v-card>
            </v-dialog>
        </div>
    </v-flex>
</template>
<script>
    export default {
        data () {
            return {
                dialog: false
            }
        }
    }
</script>
