<script setup lang="ts">
const { data } = await useFetch('/api/jose');
</script>

<template>
  <pre>{{ data }}</pre>
</template>
