<template>
  <div class="card">
    <h2>{{ resep.judul }}</h2>
    <p>{{ resep.deskripsi }}</p>
    <router-link :to="`/resep/${resep.id}`">Lihat Detail</router-link>
  </div>
</template>

<script>
export default {
  props: ['resep']
}
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 12px;
  margin-bottom: 12px;
}
</style>
