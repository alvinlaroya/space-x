<template>
    <v-app-bar app>
        <v-app-bar-title>Space X</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon color="red">mdi-heart</v-icon>
        </v-btn>
    </v-app-bar>
    <v-main>
        <slot />
    </v-main>
</template>