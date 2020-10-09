<template>
	<v-container
		id="add-kategori-section"
		fluid
		tag="section"
	>
		<base-material-card
	      icon="mdi-format-list-checkbox"
	      title="Tambah Kategori"
	      class="px-5 py-3"
	    >
	    	<v-form @submit.prevent="save">
		      <v-container>
		        <v-row>
		          <v-col cols="12" md="12">
		            <v-text-field
		              v-model="datas.name"
		              :rules="rules.name"
		              label="Nama Kategori"
		              required
		            >
		              
		            </v-text-field>
		            <!-- Breadcrumb -->
		            <v-breadcrumbs :items="breadcrumb"></v-breadcrumbs>
		          </v-col>
		        </v-row>  
		        
		        <v-row>
		          <v-col cols="4" md="4" sm="12">
		            <!-- Kategori 1 -->
		            <v-card
		             class="mx-auto"
		             
		             tile>
		              <v-list
		                :dense="true"
		              >
		                <v-subheader> Kategori 1 </v-subheader>
		                <v-list-item-group color="primary">
		                  <v-list-item
		                    v-for="(item, i) in kategori1"           
		                    :key="i"
		                    :inactive="true"
		                    @click="addKategori(item)"
		                  >
		                    <v-list-item-content>
		                      <v-list-item-title v-html="item.name"></v-list-item-title>
		                    </v-list-item-content>  
		                  </v-list-item>
		                </v-list-item-group>
		              </v-list>
		            </v-card>
		            <!-- End of Kategori 1 -->
		            
		          </v-col>
		          <v-col cols="4" md="4" sm="12">
		            <!-- kategori 2 -->

		            <v-card class="mx-auto" v-if="datas.kategori.length > 0" tile>
		              <v-list :dense="true">
		                <v-subheader> Kategori 2</v-subheader>
		                <v-list-item-group  color="primary">
		                  <v-list-item
		                    v-for="(item, i) in kategori2"           
		                    :key="i"
		                    :inactive="true"
		                    @click="addKategori2(item)"
		                  >
		                    <v-list-item-content>
		                      <v-list-item-title v-html="item.name"></v-list-item-title>
		                    </v-list-item-content>  
		                  </v-list-item>
		                </v-list-item-group>
		              </v-list> 
		            </v-card>
		            <!-- End of Kategori 2 -->
		          </v-col>
		        </v-row>  

		        <!-- BTN -->
		        <v-row>
		          <v-btn type="submit" :block="true" color="primary" :disabled="processing.disabled" :loading="processing.loading">Simpan</v-btn>
		        </v-row>
		      </v-container>
		    </v-form>
		</base-material-card>	
	</v-container>
</template>
<script>
	export default {
	 name: 'AddKategori',
	 data () {
        return {
          breadcrumb: [], // for breadcrumb
          processing: { // for animation button purpose
            loading: false,
            disabled: false
          },
          kategori1: [ // for list kategori 1
            {name: "Handphone", id:1},
            {name: "Komputer", id:2},
            {name: "Audio", id:3},
          ],
          kategori2: [ // for list kategori 2
          ],
          datas: { // datas for insert to db server
            name: null,
            kategori: []
          },
          rules: { // for validation purpose
            name: [
              v => !!v || 'Wajib mengisi nama kategori',
              v => v !== null || 'Nama kategori minimal 3 karakter'
            ]
          }
        }
      },
      
      methods: {
       addKategori(data) { // For add kategori 1
         this.kategori2 = [] // set to 0
         this.datas.kategori = []
         this.breadcrumb = []
         var arr = []
         switch(data.id) {
          case 1:
            arr = [
              {name: 'Xiaomi', id:1, id_parent: data.id},
              {name: 'Samsung', id:2, id_parent: data.id},
              {name: 'iPhone', id:3, id_parent: data.id},
            ]
          break
          case 2:
            arr = [
              {name: 'Asus', id:1, id_parent: data.id},
              {name: 'Acer', id:2, id_parent: data.id},
              {name: 'Macbook', id:3, id_parent: data.id},
            ]
          break
          case 3:
            arr = [
              {name: 'Simbadda', id:1, id_parent: data.id},
              {name: 'JBL', id:2, id_parent: data.id},
              {name: 'Sony', id:3, id_parent: data.id},
            ]
          break  
         }
         this.kategori2 = arr // for display kategori 2
         this.datas.kategori.push(data) // for store in db
         this.breadcrumb.push({
          text: data.name,
          disabled: false,
          href: '#'
         })
         console.log(this.datas.kategori)
       },
       addKategori2(data) {
        this.datas.kategori.push(data)
        this.breadcrumb.push({
          text: data.name,
          disabled: false,
          href: '#'
        })
       },
       save() { // for storing datas and send to the server
        this.processing.loading = true // play loading animation at the button
        this.processing.disabled = true
        setTimeout(() => {
          this.processing.loading = false
          this.processing.disabled = false
        }, 3000)
       }
      }
	}
</script>