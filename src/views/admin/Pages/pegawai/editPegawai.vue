<template>
  <div>
    <div class="field">
      <label class="label">NIP</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="NIP Pegawai"
          v-model="nis"
        />
      </div>
    </div>
 
    <div class="field">
      <label class="label">Nama Pegawai</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Nama Pegawai"
          v-model="namasiswa"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Alamat Pegawai</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Alamat Pegawai"
          v-model="alamatsiswa"
        />
      </div>
    </div>
    <div class="control">
      <button class="button is-success" @click="updateProduct">UPDATE</button>
    </div>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "EditPegawai",
  data() {
    return {
      nis: "",
      namasiswa: "",
      alamatsiswa: ""
    };
  },
  created: function () {
    this.getPegawaiById();
  },
  methods: {
    // Get Product By Id
    async getPegawaiById() {
      try {
        const response = await axios.get(
          `http://localhost:5000/pegawai/${this.$route.params.id}`
        );
        this.nis = response.data.nis;
        this.namasiswa = response.data.namasiswa;
        this.alamatsiswa = response.data.alamatsiswa;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Update product
    async updateProduct() {
      try {
        await axios.put(
          `http://localhost:5000/updatePegawai/${this.$route.params.id}`, {
            nis:  this.nis,
            namasiswa: this.namasiswa,
            alamatsiswa: this.alamatsiswa,
          });

      
        this.nis = "";
        this.namasiswa = "";
        this.alamatsiswa = "";
        this.$router.push("/admin/pegawai");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
  /* import style bulma */
@import "~bulma/css/bulma.css";
</style>