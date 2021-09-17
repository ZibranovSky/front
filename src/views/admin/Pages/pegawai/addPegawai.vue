<template>
  <div class="mt-5">
    <div class="field">
      <label class="label">NIP</label>
      <div class="control">
        <input
          class="input"
          type="number"
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
      <button class="button is-success" @click="savePegawai">SAVE</button>
    </div>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "AddSiswa",
  data() {
    return {
      nis: "",
      namasiswa: "",
      alamatsiswa : "",
    };
  },
  methods: {
    // Create New product
    async savePegawai() {
      try {
        await axios.post("http://localhost:5000/AddPegawai", {
          nis: this.nis,
          namasiswa: this.namasiswa,
          alamatsiswa: this.alamatsiswa
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
 
<style>
</style>