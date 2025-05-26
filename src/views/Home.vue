<template>
  <div>
    <h1>Daftar Resep</h1>
    <div v-for="resep in resepList" :key="resep.id">
      <RecipeCard :resep="resep" />
    </div>
  </div>
</template>

<script>
import RecipeCard from '../components/RecipeCard.vue'

export default {
  components: { RecipeCard },
  data() {
    return {
      resepList: [
        { id: 1, judul: 'Nasi Goreng', deskripsi: 'Nasi goreng sederhana dengan telur.' },
        { id: 2, judul: 'ayam bakar madu', deskripsi: 'manis gurih' },
        { id: 3, judul: 'Soto ayam sederhana', deskripsi: 'Soto ayam dengan bumbu kuning dan pelengkap komplit' }
      ]
    }
  }
}
</script>
