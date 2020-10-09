<template>
	<v-container
		id="payment-methods-section"
		fluid
		tag="section"
	>
		<base-material-card
	      icon="mdi-format-list-checkbox"
	      title="Payment Methods"
	      class="px-5 py-3"
	    >
	    	<v-card
	          class="mx-auto"
	        >
		      	<v-card-title>List of Payment Methods</v-card-title>
		          <v-card-subtitle>
		            <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
		        </v-card-subtitle>
		        <v-card-action>
		            <v-data-table
		              :headers="headers"
		              :items="products"
		              :item-per-page="5"
		              class="elevation-1"
		              show-select
		              class="elevation-1"
		            >
		              <template v-slot:item.logo="{item}">
		                <img :src="item.logo" :alt="item.name" width="40" height="40" />
		              </template>
		              <template v-slot:item.description="{item}">
		                <h4 >{{item.name}}</h4>
		                <p>{{item.description}}</p>
		              </template>
		              <template v-slot:item.action="{item}">
		                <v-btn small :to="'/payment-methods/detail/' + item.id" color="primary">Detail</v-btn>
		              </template>
		              <template v-slot:top>
		                
		              </template>
		            </v-data-table>
		          </v-card-action>
	        </v-card>
	    </base-material-card>
	</v-container>
		
</template>
<script>
	export default {
		name: 'PaymentMethods',
		data() {
        return {
          breadcrumbs: [
            {text: 'Home', disabled:false, href: '/'},
            {text: 'Payment Methods', disabled: true, href: '/payment-methods'}
          ],
          headers: [
            {text: 'Image', value: 'logo'},
            {text: 'Description', value: 'description'},
            {text: '', value: 'action'}
          ],
          products: [
            {id: 1, name: 'Ecommerce Checkout', logo: 'https://finicky-bikes.demo.prestashop.com/modules/ps_checkout/logo.png', description: 'Provide the most commonly used payment methods to your customers in this all-in-one module, and manage all your sales in a centralized interface.'},
            {
              id: 2, name: 'Wired payment', logo: 'https://finicky-bikes.demo.prestashop.com/modules/ps_wirepayment/logo.png', description: 'Accept payments by bank transfer.'
            },
            {
              id: 3, name: 'Pay by Check', logo: 'https://finicky-bikes.demo.prestashop.com/modules/ps_checkpayment/logo.png', description: 'This module allows you to accept payments by check.'
            },
            {
              id: 4, name: 'Paypal Official', logo: 'https://medias1.prestastore.com/img/pico/1748.jpg', description: 'As the leading online payment company, PayPal offers a range of simple, fast and secure solutions trusted by more than 300M user.'
            },
            {
              id: 5, name: 'Cash On Delivery', logo: 'https://medias1.prestastore.com/img/pico/24637.jpg', description: 'Accept cash payments on delivery to make it easy for customers to purchase on your store'
            },
            {
              id: 6, name: 'PayGreen', logo: 'https://medias1.prestastore.com/img/pico/19176.jpg', description: 'PayGreen allows you to simply accept credit card payments on your online store PrestaShop (with or without bank contract )'
            },

            
          ]
        }
      }
	}
</script>