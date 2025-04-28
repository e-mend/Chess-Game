<template>
    <q-btn 
        class="breadcrumb"
        dense
        color="white"
        text-color="dark"
        padding="xs md"
    >
        {{ route.name }}
    </q-btn>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<style scoped>
    .breadcrumb {
        color: #fff;
        text-decoration: none;
        margin-right: 10px;
        cursor: pointer;
        display: inline-block;
        margin-left: 10px;
    }
</style>