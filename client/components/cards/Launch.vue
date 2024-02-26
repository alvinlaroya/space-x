<script setup>
defineProps({
    mission_name: {
        type: String,
        required: true
    },
    launch_date_local: String,
    launch_site_name: String,
    rocket_name: String,
    details: String
})
</script>

<template>
    <v-card class="mx-auto" max-width="344" min-height="180" :title="mission_name" :subtitle="launch_date_local">
        <template v-slot:prepend>
            <v-icon icon="mdi-rocket" color="primary"></v-icon>
        </template>
        <v-card-body>
            <v-card-text>
                <span class="text-black">Launch Site Name:</span>
                <br />{{ launch_site_name ?? 'No launch site name to display' }}</v-card-text>
            <v-card-text>
                <span class="text-black">Rocket Name:</span>
                <br />{{ launch_site_name ?? 'No launch site name to display' }}</v-card-text>
            <v-card-text class="text-truncate">{{ details ?? 'No detail to display' }}</v-card-text>
        </v-card-body>
    </v-card>
</template>