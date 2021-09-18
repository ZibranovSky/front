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
              <v-btn color="blue darken-1" text @click="cancelDelete()">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="confirmDelete()">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
        
      </template>

    <template v-slot:item.aksi='{ item }'>
        
     <router-link
              :to="{ name: 'editPegawai', params: { id: item.id } }"
              class="btn btn-info"
              >Edit</router-link
            >
     <b-button variant="danger" @click="deleteItem(item)">hapus</b-button>
     <b-button variant="success" @click="viewItem(item)">lihat</b-button>
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
        selectedItem: {},
        dialogDelete: false,
        dialogView: false,
        items: [],
        search: '',
        calories: '',
        headers: 
        [
          {
            text: 'NIP',
            value: 'nis',
          },
          {
            text: 'Nama Pegawai',
            value: 'namasiswa',
          },
          { text: 'Alamat Pegawai', value: 'alamatsiswa' },
          {
            text: 'aksi',
            value: 'aksi'
          }
        ],
      pegawai: 
      [
       {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
          ],
       
      }
    },
  created() {
    this.getPegawai();
  },
  
  methods: {
    deleteItem (item) {
      // console.log('tes')
      this.selectedItem = {...item}
      this.dialogDelete = true
    },
    confirmDelete () {
      this.deletePegawai(this.selectedItem.id)
    },
    cancelDelete () {
      this.dialogDelete = false
    },
    viewItem (item) {
      this.selectedItem = {...item}
      this.dialogView = true
    },
    cancelView () {
      this.dialogView = false
    },

      filterOnlyCapsText (value, search, item) {
        return value != null &&
          search != null &&
          typeof value === 'string' &&
          value.toString().toLocaleUpperCase().indexOf(search) !== -1
      },
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