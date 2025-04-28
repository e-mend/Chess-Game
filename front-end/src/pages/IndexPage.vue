<template>
  <q-page class="row items-center justify-evenly">
    <div>
      <div class="text-h2">{{ $t('title') }}</div>
      <div class="text-h5 q-mt-md d-flex flex-center q-gutter-md">
        <q-btn
          v-for="link in links"
          :key="link.label"
          :icon="link.icon"
          :label="$t(link.label)"
          :to="link.link"
          flat
        />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
  const links = [
    {
      icon: 'play_arrow',
      label: 'play',
      link: '/game',
    },
    {
      icon: 'settings',
      label: 'settings',
      link: '/settings',
    },
    {
      icon: 'info',
      label: 'about',
      link: '/about',
    },
  ];

</script>
