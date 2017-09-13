<template>
    <v-app>
        <v-toolbar light fixed v-if="$route.name !== 'home'">
            <v-toolbar-title>Fun Retro</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn light small @click.native="$router.push({path:'/'})">New Board</v-btn>
        </v-toolbar>
        <main>
            <v-container fluid>
                <router-view></router-view>
                <vue-progress-bar></vue-progress-bar>
            </v-container>
        </main>
        <v-footer>
            <v-spacer></v-spacer>
            <div>© {{ new Date().getFullYear() }}</div>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        created() {
            this.$Progress.start();
            this.$router.beforeEach((to, from, next) => {
                if (to.meta.progress !== undefined) {
                    let meta = to.meta.progress;
                    this.$Progress.parseMeta(meta);
                }
                this.$Progress.start();
                next();
            });
            this.$router.afterEach((to, from) => {
                this.$Progress.finish();
            });
        },
        mounted() {
            this.$Progress.finish();
        },
        data() {
            return {
                drawer: null,
                items: [{
                        title: '首页',
                        icon: 'dashboard',
                        path: '/',
                    },
                    {
                        title: '剧集',
                        icon: 'question_answer',
                        path: '/series',
                    }
                ],
                menus: [{
                        key: 'cv',
                        menu: [{
                            action: 'local_activity',
                            title: 'vuetify-aduio',
                            items: [{
                                    title: 'Demo',
                                    url: '#/vuetifyaudio'
                                },
                                {
                                    title: 'Github',
                                    url: 'https://github.com/wilsonwu/vuetify-audio'
                                }
                            ]
                        }, ],
                    },
                    {
                        key: 'other',
                        menu: [{
                            action: 'settings',
                            title: 'Offline CV',
                            items: [{
                                title: 'Chinese',
                                url: 'http://wilsonwu.me'
                            }, ]
                        }],
                    }
                ],
                mini: false, //use this for menu mini in the icon click, change the action click to mini from drawer
                right: null,
            }
        },
    }
</script>