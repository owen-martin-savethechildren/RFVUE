<template>
    <v-app>
        <v-app-bar app color="primary" dark>
            <div class="d-flex align-center">
                <v-img alt="Vuetify Logo"
                       class="shrink mr-2"
                       contain
                       src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
                       transition="scale-transition"
                       width="40" />

                <v-img alt="Vuetify Name"
                       class="shrink mt-1 hidden-sm-and-down"
                       contain
                       min-width="100"
                       src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
                       width="100" />
            </div>

            <v-spacer></v-spacer>

            <!--<v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest"
                   target="_blank"
                   text>
                <span class="mr-2">Latest Release</span>
                <v-icon>mdi-open-in-new</v-icon>
            </v-btn>-->
            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">

                    <v-btn class="mx-2"
                           fab
                           dark
                           small
                           v-bind="attrs"
                           v-on="on"
                           color="deep-purple accent-4">
                        <v-icon dark>
                            mdi-dots-horizontal
                        </v-icon>
                    </v-btn>
                </template>
                <v-card class="mx-auto"
                        width="150"
                        tile>
                    <v-list dense>
                        <v-list-item-group v-model="selectedItem" color="primary">

                            <v-list-item :to="item.route" v-for="(item, i) in menu" :key="i">
                                <v-list-item-icon>
                                    <v-icon v-text="item.icon"></v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title v-text="item.text"></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-card>

            </v-menu>
        </v-app-bar>

        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script>
    //import rf from '../src/js/rf';
    export default {
        name: "App",

        data: () => ({
            //
            selectedItem: 0,
            menu: [
                { text: "Home", icon: "mdi-home-circle-outline", route: { name: 'Home' } },
                { text: "About", icon: "mdi-alpha-a-circle-outline", route: { name: 'About' } },
                { text: "Details", icon: "mdi-alpha-d-circle-outline", route: { name: 'Details' }}
            ]
        }),
        async mounted() {
            //console.log(await rf.api.get('TaskInfo'));
        },
    };
</script>
