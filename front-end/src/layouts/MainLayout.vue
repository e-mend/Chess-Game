<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="q-header" elevated>
      <q-toolbar class="leftside">
        <q-toolbar-title>
          Chess Game <q-icon :name="mdiChessRook" />
          <RouteCatcher />
        </q-toolbar-title>

        <ChangeLang/>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
  import { mdiChessRook } from '@mdi/js';
  import RouteCatcher from 'src/components/common/RouteCatcher.vue';
  import ChangeLang from 'src/components/config/ChangeLang.vue';
</script>

<style lang="scss" scoped>
  .q-header {
    background-color: $dark-page;
  }
  .leftside {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
