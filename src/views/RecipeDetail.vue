<template>
  <div v-if="resep">
    <h1>{{ resep.judul }}</h1>
    <p><strong>Deskripsi:</strong> {{ resep.deskripsi }}</p>

    <h2>Bahan-bahan:</h2>
    <ul>
      <li v-for="bahan in resep.bahan" :key="bahan">{{ bahan }}</li>
    </ul>

    <h2>Bumbu Halus:</h2>
    <ul>
      <li v-for="bumbu in resep.bumbuHalus" :key="bumbu">{{ bumbu }}</li>
    </ul>

    <h2>Pelengkap:</h2>
    <ul>
      <li v-for="item in resep.pelengkap" :key="item">{{ item }}</li>
    </ul>

    <h2>Cara Membuat:</h2>
    <ol>
      <li v-for="langkah in resep.langkah" :key="langkah">{{ langkah }}</li>
    </ol>
  </div>
  <div v-else>
    <p>Resep tidak ditemukan.</p>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      resep: null
    }
  },
  created() {
    const dataDummy = [
      {
        id: '1',
        judul: 'Nasi Goreng',
        deskripsi: 'Nasi goreng sederhana dengan telur.',
        bahan: ['2 piring nasi', '2 butir telur', '3 siung bawang putih', 'Kecap manis'],
        bumbuHalus: [],
        pelengkap: [],
        langkah: ['Tumis bawang, masukkan telur, lalu nasi dan kecap.']
      },
      {
        id: '2',
        judul: 'ayam bakar madu',
        deskripsi: 'manis gurih',
        bahan: [
        '1 ekor ayam (potong menjadi 8 bagian)',
        '3 siung bawang putih (haluskan)',
        '2 siung bawang merah (haluskan)',
        '2 sdm kecap manis',
        '3 sdm madu',
        '1 sdm saus tiram (opsional)',
        '1 sdt garam',
        '1/2 sdt merica bubuk',
        '1 sdt kaldu ayam bubuk (optional)',
        '2 sdm minyak untuk menumis',
        'Air secukupnya'
        ],
        bumbuHalus: [],
        pelengkap: [],
        langkah: ['Marinasi ayam dengan air jeruk nipis dan sedikit garam selama 15-20 menit. Cuci bersih.',
        'Panaskan minyak, tumis bawang putih dan bawang merah sampai harum.',
        'Masukkan ayam, aduk hingga berubah warna.',
        'Tambahkan kecap manis, madu, saus tiram, garam, merica, dan kaldu ayam bubuk. Aduk rata.',
        'Tambahkan sedikit air (sekitar 100 ml), masak dengan api kecil sampai ayam empuk dan bumbu meresap (kurang lebih 20-30 menit).',
        'Angkat ayam dan sisihkan kuahnya.',
        'Bakar ayam di atas arang atau panggangan (bisa juga pakai teflon/grill pan) sambil sesekali dioles kuah madu agar lebih mengkilap dan meresap rasa.',
        'Bakar sampai matang dan sedikit kecoklatan.',
        'Angkat dan sajikan hangat dengan nasi putih']
      },
      {
        id: '3',
        judul: 'Soto Ayam Sederhana',
        deskripsi: 'Soto ayam dengan bumbu kuning dan pelengkap komplit.',
        bahan: [
          '500 gram daging ayam',
          '2 liter air',
          '2 lembar daun salam',
          '2 batang serai (memarkan)',
          '3 lembar daun jeruk',
          '1 ruas lengkuas (memarkan)',
          '1 sdm garam',
          '1 sdt gula pasir',
          'Minyak untuk menumis'
        ],
        bumbuHalus: [
          '6 siung bawang merah',
          '4 siung bawang putih',
          '3 butir kemiri (sangrai)',
          '1 ruas kunyit (bakar/sangrai)',
          '1 ruas jahe',
          '1 sdt merica butiran'
        ],
        pelengkap: [
          'Soun (seduh air panas)',
          'Tauge (diseduh)',
          'Telur rebus (belah dua)',
          'Kentang goreng (iris tipis)',
          'Kol iris halus (seduh)',
          'Daun bawang dan seledri iris',
          'Bawang merah goreng',
          'Sambal dan jeruk nipis'
        ],
        langkah: [
          'Rebus ayam dalam 2 liter air sampai empuk, suwir-suwir.',
          'Tumis bumbu halus dan rempah hingga harum.',
          'Masukkan ke dalam kaldu, tambah garam & gula, rebus lagi.',
          'Masukkan ayam suwir, koreksi rasa.',
          'Sajikan dengan pelengkap dan kuah soto.',
          'Taburi daun bawang, seledri, dan bawang goreng.'
        ]
      }
    ];

    // Cari resep berdasarkan id, gunakan '==' supaya cocok meskipun tipe berbeda
    this.resep = dataDummy.find(r => r.id == this.id);
  }
}
</script>
