<template>
  <div>
    <nav>
      <router-link to="/">Beranda</router-link> |
      <router-link to="/tambah">Tambah Resep</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
nav {
  background: #eee;
  padding: 10px;
}
nav a {
  margin: 0 10px;
  text-decoration: none;
}
</style>
