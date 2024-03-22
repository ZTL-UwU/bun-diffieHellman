<script setup lang="ts">
const { data } = await useFetch('/api/index')
</script>

<template>
  <pre>{{ data }}</pre>
</template>
