<template>
	<v-container
		id="kategori-section"
		fluid
		tag="section"
	>
		<base-material-card
	      icon="mdi-format-list-checkbox"
	      title="Kategori"
	      class="px-5 py-3"
	    >
	    	<v-row>
	    		<v-col cols="5">
	    			 <v-btn color="primary" dark tile href="/kategori/add">
		              <v-icon left>mdi-plus-circle-outline</v-icon> Tambah Kategori
		            </v-btn>
	    		</v-col>
	    		<v-col offset="2" cols="5">
	    			<v-combobox
						allow-overflow
						:items="itemsKategori"
						v-model="kategori"
						label="Pilih data berdasarkan kategori"
						@change="changeView"
			    	>
			    	</v-combobox>
	    		</v-col>
	    	</v-row>
	    	
	    	<!-- Table Niche -->
	    	<v-data-table
				:headers="headers3"
				:items="kategoris"
				:items-per-page="10"
				class="elevation-1"
				:class="hideTableNiche"
	    	>
	    		<template v-slot:item="row">
	    			<tr>
	    				<td>{{row.item.no}}</td>
	    				<td> {{row.item.kategori1}} </td>
	    				<td> {{row.item.kategori2}} </td>
	    				<td> {{row.item.kategori3}} </td>
	    				<td>
	    					<v-btn color="primary" dark large icon :href="'/kategori/edit/' + row.item.encrypt">
	    						<v-icon dark> mdi-pencil </v-icon>
	    					</v-btn>
	    					<v-btn color="red darken-1" dark large icon @click.prevent="deleteData(row.item.encrypt)">
	    						<v-icon dark> mdi-trash-can </v-icon>
	    					</v-btn>
	    				</td>
	    			</tr>
	    		</template>
			</v-data-table>

			<!-- Table Sub Kategori -->
	    	<v-data-table
				:headers="headers2"
				:items="kategoris"
				:items-per-page="10"
				class="elevation-1"
				:class="hideTableSubKategori"
	    	>
	    		<template v-slot:item="row">
	    			<tr>
	    				<td>{{row.item.no}}</td>
	    				<td> {{row.item.kategori1}} </td>
	    				<td> {{row.item.kategori2}} </td>
	    				<td>
	    					<v-btn color="primary" dark x-small icon :href="'/kategori/edit/' + row.item.encrypt"> 
	    						<v-icon dark> mdi-pencil </v-icon>
	    					</v-btn>
	    					<v-btn color="danger" dark x-small icon @click="deleteData(row.item.encrypt)">
	    						<v-icon dark> mdi-trash-can </v-icon>
	    					</v-btn>
	    				</td>
	    			</tr>
	    		</template>
			</v-data-table>

			<!-- Table Main Kategori -->
	    	<v-data-table
				:headers="headers1"
				:items="kategoris"
				:items-per-page="10"
				class="elevation-1"
				:class="hideTableKategori"
	    	>
	    		<template v-slot:item="row">
	    			<tr>
	    				<td>{{row.item.no}}</td>
	    				<td> {{row.item.kategori1}} </td>
	    				<td>
	    					<v-btn color="primary" dark icon small>
	    						<v-icon dark> mdi-pencil </v-icon>
	    					</v-btn>
	    					<v-btn color="red darken-1" dark icon small>
	    						<v-icon dark> mdi-trash-can </v-icon>
	    					</v-btn>
	    				</td>
	    			</tr>
	    		</template>
			</v-data-table>
		</base-material-card>
	</v-container>
</template>
<script>
	export default {
		name: 'Kategori',
		data() {
			return {
				hideTableKategori: 'd-none',
				hideTableSubKategori: 'd-none',
				hideTableNiche: 'd-block',
				kategori:null, // store kategori,
				itemsKategori: [
					{ text: 'Kategori Utama', value: 1 },
					{ text: 'Sub Kategori', value: 2 },
					{ text: 'Niche', value: 3 },
				],
				headers2: [
					{
						text: 'No',
						align: 'start',
						sortable: false,
						value: 'no'
					},
					{
						text: 'Kategori Utama', value: 'kategori1'
					},
					{
						text: 'Sub Kategori', value: 'kategori2'
					},
					{
						text: 'Aksi', value: 'aksi'
					}
				],
				headers1: [
					{
						text: 'No',
						align: 'start',
						sortable: false,
						value: 'no'
					},
					{
						text: 'Kategori Utama', value: 'kategori1'
					},
					{
						text: 'Aksi', value: 'aksi'
					}
				],
				headers3: [
					{
						text: 'No',
						align: 'start',
						sortable: false,
						value: 'no'
					},
					{
						text: 'Kategori Utama', value: 'kategori1'
					},
					{
						text: 'Sub Kategori', value: 'kategori2'
					},
					{
						text: 'Nilai', value:'kategori3'
					},
					{
						text: 'Aksi', value: 'aksi'
					}
				],
				kategoris: []
			}
		},
		methods: {
			deleteData(id) {
				let confirmDel = confirm('Apakah Kamu yakin?')
				if(confirmDel) {

				}
			},
			changeView(type) {
				this.kategoris = []
				this.headers = []
				this.getData()
				switch(type.value) {
					
					case 1 :
						this.hideTableKategori = 'd-block'
						this.hideTableSubKategori = 'd-none'
						this.hideTableNiche = 'd-none'
					break;
					case 2 :
						this.hideTableKategori = 'd-none'
						this.hideTableSubKategori = 'd-block'
						this.hideTableNiche = 'd-none'
					break;
					case 3 :
						this.hideTableKategori = 'd-none'
						this.hideTableSubKategori = 'd-none'
						this.hideTableNiche = 'd-block'
					break;
					default: 
						this.hideTableKategori = 'd-none'
						this.hideTableSubKategori = 'd-none'
						this.hideTableNiche = 'd-block'
					break;
				}
			},
			getData() {
				this.kategoris = [
					{
						no: 1,
						kategori1: 'Buku',
						kategori2: 'Buku Sastra',
						kategori3: 'Buku kedzaliman para binatang',
						encrypt: btoa(1)
					},
					{
						no: 2,
						kategori1: 'Buku',
						kategori2: 'Buku Sastra',
						kategori3: 'Buku kedzaliman para binatang',
						encrypt: btoa(2)
					},
					{
						no: 3,
						kategori1: 'Buku',
						kategori2: 'Buku Sastra',
						kategori3: 'Buku kedzaliman para binatang',
						encrypt: btoa(3)
					},
					{
						no: 4,
						kategori1: 'Buku',
						kategori2: 'Buku Sastra',
						kategori3: 'Buku kedzaliman para binatang',
						encrypt: btoa(1)
					},
					{
						no: 5,
						kategori1: 'Buku',
						kategori2: 'Buku Sastra',
						kategori3: 'Buku kedzaliman para binatang',
						encrypt: btoa(1)
					},
					{
						no: 6,
						kategori1: 'Buku',
						kategori2: 'Buku Sastra',
						kategori3: 'Buku kedzaliman para binatang',
						encrypt: btoa(1)
					},
					{
						no: 7,
						kategori1: 'Buku',
						kategori2: 'Buku Sastra',
						kategori3: 'Buku kedzaliman para binatang',
						encrypt: btoa(1)
					},
					{
						no: 8,
						kategori1: 'Buku',
						kategori2: 'Buku Sastra',
						kategori3: 'Buku kedzaliman para binatang',
						encrypt: btoa(1)
					},
					{
						no: 9,
						kategori1: 'Buku',
						kategori2: 'Buku Sastra',
						kategori3: 'Buku kedzaliman para binatang',
						encrypt: btoa(1)
					},
					{
						no: 10,
						kategori1: 'Buku',
						kategori2: 'Buku Sastra',
						kategori3: 'Buku kedzaliman para binatang',
						encrypt: btoa(1)
					},
					{
						no: 11,
						kategori1: 'Buku',
						kategori2: 'Buku Sastra',
						kategori3: 'Buku kedzaliman para binatang',
						encrypt: btoa(1)
					},
					{
						no: 12,
						kategori1: 'Buku',
						kategori2: 'Buku Sastra',
						kategori3: 'Buku kedzaliman para binatang',
						encrypt: btoa(1)
					},
					{
						no: 13,
						kategori1: 'Buku',
						kategori2: 'Buku Sastra',
						kategori3: 'Buku kedzaliman para binatang',
						encrypt: btoa(1)
					},
					{
						no: 14,
						kategori1: 'Buku',
						kategori2: 'Buku Sastra',
						kategori3: 'Buku kedzaliman para binatang',
						encrypt: btoa(1)
					},
				]
			}
		},
		created() {
			this.getData()
		}
	}
</script>