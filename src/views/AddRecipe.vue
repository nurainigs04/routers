<template>
  <div>
    <h1>Tambah Resep</h1>
    <form @submit.prevent="submitForm">
      <label>Judul:</label><br />
      <input v-model="judul" /><br />
      <label>Deskripsi:</label><br />
      <textarea v-model="deskripsi"></textarea><br />
      <button type="submit">Simpan</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      judul: '',
      deskripsi: ''
    }
  },
  methods: {
    submitForm() {
      alert(`Resep "${this.judul}" berhasil ditambahkan! (Simulasi)`)
      this.judul = ''
      this.deskripsi = ''
    }
  }
}
</script>
