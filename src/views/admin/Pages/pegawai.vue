<template>
  <div>
    <div class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center profile-header"
        style="min-height: 600px;  background-size: cover; background-position: center top;">
      <b-container fluid>
        <!-- Mask -->
        <span class="mask bg-gradient-success opacity-8"></span>
        <!-- Header container -->
        <b-container fluid class="d-flex align-items-center">
          <b-row >
            <b-col lg="7" md="10">
              <h1 class="display-2 text-white">Daftar Pegawai</h1>
             
             
               <router-link to="/admin/addPegawai" class="btn btn-info">Tambah Data</router-link>
            </b-col>
          </b-row>
        </b-container>
      </b-container>
    </div>

   
    <b-container fluid class="mt--6">
      <b-card no-body>
        <b-card-header class="border-0">
            <h3 class="mb-0">Daftar Pegawai</h3>
        </b-card-header>

         <div id="app" class="container">
    <b-row class="mb-3">
      <b-col md="3">
        
      </b-col>
    </b-row>
    <b-row>
     <b-col>
      <v-data-table
      :headers="headers"
      :items="pegawai"
      item-key="id"
      class="elevation-1"
      :search="search"
      :custom-filter="filterOnlyCapsText"
 
    >
      <template v-slot:top>
        <v-text-field
          v-model="search"
          label="Search "
          class="mx-4"
        ></v-text-field>
         <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text>Cancel</v-btn>
              <v-btn color="blue darken-1" text>OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </template>

    <template v-slot:item.aksi='{ item }'>
      
     <button class="button is-danger is-small" @click="deleteItem(item)">hapus</button>

     </template>
    </v-data-table>
      </b-col>
    </b-row>
  </div>
    </b-card>
    </b-container>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    data () {
      return {
        dialogDelete: false,
        items: [],
        search: '',
        calories: '',
        headers: 
        [
          {
            text: 'NIS',
            value: 'nis',
          },
          {
            text: 'Nama Siswa',
            value: 'namasiswa',
          },
          { text: 'Alamat Siswa', value: 'alamatsiswa' },
          {
            text: 'aksi',
            value: 'aksi'
          }
        ]
      ,
        pegawai: [
],
      }
    },
  created() {
    this.getPegawai();
  },
  
  methods: {
    deleteItem (item) {
      console.log('tes')
      this.dialogDelete = true
    },
      filterOnlyCapsText (value, search, item) {
        return value != null &&
          search != null &&
          typeof value === 'string' &&
          value.toString().toLocaleUpperCase().indexOf(search) !== -1
      },
      // Get All Products
      async getPegawai() {
        try {
          const response = await axios.get("http://localhost:5000/pegawai");
          // this.items = response.data;
          this.pegawai = response.data.data;
          // console.log(response)
        } catch (err) {
          console.log(err);
        }
      },
   
      // Delete Product
      async deletePegawai(id) {
        try {
          await axios.delete(`http://localhost:5000/delPegawai/${id}`);
          this.getPegawai();
        } catch (err) {
          console.log(err);
        }
      },
    },
  }
</script>

<style>
</style>
