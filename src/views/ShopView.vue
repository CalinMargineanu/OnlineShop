<template>

  <div class="menu">
    <h1 v-on:dblclick="showCategories = false" v-on:click="showCategories = true; showButton = false; showVideoCards = false; showPcComponents = false; showFilter = false">
      <img v-bind:src="require(`@/assets/${menu}`)"></h1>

      <div v-for="(category, index) in categories" :key="index" v-show="showCategories" class="categorie">
        <li v-on:click="showPcComponents = true; showCategories = false"><a>{{ category.name }}</a></li>
      </div>

      <div v-show="showPcComponents" v-for="(component, index) in pcComponents" :key="index" class="componente">
        <li v-on:click="showFilter = true; showButton = true; showVideoCards = true; showPcComponents = false"><a>{{ component.name }}</a></li>
      </div>

    <button v-show="showButton" class="button">Apply filter</button><br><br>

    <div v-show="showFilter" class="filter" >
      <a v-on:click="collapsibleAF = false">Available</a><br>
      <label v-show="collapsibleAF" v-for="(available, index) in checkAvailability" :key="index" class="label">
        <input type="checkbox" ref="inStock">{{ available }}<span class="text-muted">{{  }}</span><br>
      </label><br>

      <a v-on:click="collapsiblePF = false">Price</a><br>
      <label v-show="collapsiblePF" v-for="(price, index) in priceRanges" :key="index" class="label">
        <input v-on:click="checkPriceRange(index)" type="checkbox" v-model="price.checked">{{ price.to}} - {{ price.from}} <span class="text-muted"> ({{price.quantity}}) </span><br>
      </label><br>

      <a v-on:click="collapsibleBF = false">Brand</a><br>
      <label v-show="collapsibleBF" v-for="(brand, index) in brandFilter" :key="index" class="label">
        <input type="checkbox">{{ brand.name }} <span class="text-muted">{{ brand.cantity }}</span><br>
      </label><br>

      <a v-on:click="collapsibleCF = false">Capacity</a><br>
      <label v-show="collapsibleCF" v-for="(ram, index) in capacityFilter" :key="index" class="label">
        <input type="checkbox">{{ ram.capacity}} <span class="text-muted">{{ ram.cantity }}</span><br>
      </label><br>

      <a v-on:click="collapsibleMTF = false">Memory Type</a><br>
      <label v-show="collapsibleMTF" v-for="(memory, index) in memoryTypeFiler" :key="index" class="label">
        <input type="checkbox">{{ memory.type }} <span class="text-muted">{{ memory.cantity }}</span><br>
      </label><br>

    </div>
  </div>
  <div class="cardsContainer">
      <div v-for="(card, index) in videoCards" :key="index" class="productCard">
        <img v-bind:src="require(`@/assets/${card.image}`)">
        <h><img v-on:click="favouriteProductSelect(index)" v-bind:src="require(`@/assets/${card.favoriteProduct}`)" ref="favouriteProduct"></h>
        <p3>{{card.productName}}</p3>
        <p4>{{card.productPrice}} lei</p4>
        <button>{{buyButton}}</button>
      </div>
  </div>

</template>

<script>

export default {
  name: 'ShopView',
  components: {},
  data() {
    return {
      menu: 'menu.png',
      buyButton: 'Add in cart',
      favoriteProductOn: 'redHeart.png',
      showVideoCards: false,
      showButton: false,
      showCategories: false,
      categories: [
        {
          name: 'Desktop PC & Monitors'
        },
        {
          name: 'Notebook'
        },
        {
          name: 'PC Components'
        }],
      showPcComponents: false,
      pcComponents: [
        {
          name: 'Video Cards'
        },
        {
          name: 'RAM Memory'
        },
        {
          name: 'Processors'
        },
        {
          name: 'Solid state drive - SSD'
        },
        {
          name: 'Hard Disks'
        }],
      showFilter: false,
      collapsibleAF: true,
      availableFilter: [
        {
          name: 'In stock',
          stock: 0
        },
        {
          name: 'Promotions',
          stock: 0
        },
        {
          name: 'News',
          stock: 0
        }],
      collapsiblePF: true,
      priceRanges: [
        {
          from: 100,
          to: 200,
          quantity: 1,
          checked: false,
        },
        {
          from: 200,
          to: 500,
          quantity: 2,
          checked: false,
        },
        {
          from: 500,
          to: 1000,
          quantity: 3,
          checked: false,
        },
        {
          from: 1000,
          to: 1500,
          quantity: 4,
          checked: false,
        },
        {
          from: 1500,
          to: 2000,
          quantity: 5,
          checked: false,
        },
        {
          from: 2000,
          to: 3000,
          quantity: 6,
          checked: false,
        }],
      collapsibleBF: true,
      brands: [
        {
          name: 'Gigabyte',
          type: ['Processor', 'Video Cards'],
          quantity: []
        },
        {
          name: 'Asus',
          type: ['Processor', 'Video Cards'],
          quantity: []
        },
        {
          name: 'AMD',
          type: ['Processor', 'Video Cards'],
          quantity: []
        },
        {
          name: 'Intel',
          type: ['Processor', 'Video Cards'],
          quantity: []
        }],
      collapsibleCF: true,
      capacityFilter: [
        {
          capacity: '4 GB',
          cantity: '(1)'
        },
        {
          capacity: '6 GB',
          cantity: '(2)'
        },
        {
          capacity: '8 GB',
          cantity: '(3)'
        },
        {
          capacity: '10 GB',
          cantity: '(4)'
        },
        {
          capacity: '16 GB',
          cantity: '(4)'
        }],
      collapsibleMTF: true,
      memoryTypeFiler: [
        {
          type: 'DDR5',
          cantity: '(1)'
        },
        {
          type: 'DDR6',
          cantity: '(2)'
        },
        {
          type: 'GDDR5',
          cantity: '(3)'
        },
        {
          type: 'GDDR6',
          cantity: '(4)'
        }],
      videoCards: [
        {
          productName: 'Asus Phoenix Radeon™ RX 550, 4GB GDDR5, 128-bit',
          image: 'ASUS RX 550.jpg',
          // TODO remove from every product and set in template
          favoriteProduct: 'heart.png',
          // TODO set as number, add currency in template
          productPrice: 459,
          capacity: 4,
          memoryType: 'GDDR5',
          quantity: 1,
          promotion: false,
          showVideoCards: false,
          // TODO add type
        },
        {
          productName: 'ASUS GeForce GT 710 EVO, 2GB GDDR3, 64-bit',
          image: 'AsusGt710.webp',
          favoriteProduct: 'heart.png',
          productPrice: '294 lei',
          price: 294,
          capacity: '2GB',
          memoryType: 'GDDR3',
          cantity: 1,
          promotion: true,
          showVideoCards: false,
        },
        {
          productName: 'ASUS GeForce GTX® 1650 Phoenix Evo, 4GB GDDR6, 128-bit',
          image: 'ASUS GTX 1650.png',
          favoriteProduct: 'heart.png',
          productPrice: '911 lei',
          price: 911,
          capacity: '4GB',
          memoryType: 'GDDR6',
          cantity: 1,
          promotion: false,
          showVideoCards: false,
        },
        {
          productName: 'Gigabyte NVIDIA GeForce GT 710, 1GB GDDR5, 64-bit',
          image: 'Gigabyte NVIDIA GeForce GT 710.webp',
          favoriteProduct: 'heart.png',
          productPrice: '214 lei',
          price: 214,
          capacity: '1GB',
          memoryType: 'GDDR5',
          cantity: 1,
          promotion: false,
          showVideoCards: false,
        },
        {
          productName: 'Gigabyte GeForce® GTX 1650 D6 OC, 4GB GDDR6, 128-bit',
          image: 'Gigabyte GeForce GTX 1650.webp',
          favoriteProduct: 'heart.png',
          productPrice: '977 lei',
          price: 977,
          capacity: '4GB',
          memoryType: 'GDDR6',
          cantity: 1,
          promotion: false,
          showVideoCards: false,
        },
        {
          productName: 'Gigabyte Radeon™ RX 6600 EAGLE, 8GB GDDR6, 128-bit',
          image: 'Gigabyte Radeon RX 6600 EAGLE.jpg',
          favoriteProduct: 'heart.png',
          productPrice: '1310 lei',
          price: 1310,
          capacity: '8GB',
          memoryType: 'GDDR6',
          cantity: 4,
          promotion: false,
          showVideoCards: false,
        },
        {
          productName: 'AMD Radeon Pro WX 3200 4GB GDDR5',
          image: 'AMD Radeon Pro WX 3200.webp',
          favoriteProduct: 'heart.png',
          productPrice: '1014 lei',
          price: 1014,
          capacity: '4GB',
          memoryType: 'GDDR5',
          cantity: 4,
          promotion: false,
          showVideoCards: false,
        },
        {
          productName: 'AMD Radeon Pro WX 5100, 8 GB, GDDR5, 4x DP',
          image: 'AMD Radeon Pro WX 5100.webp',
          favoriteProduct: 'heart.png',
          productPrice: '1616 lei',
          price: 1616,
          capacity: '8GB',
          memoryType: 'GDDR5',
          cantity: 4,
          promotion: false,
          showVideoCards: false,
        },
        {
          productName: 'AMD Radeon PRO W5700 8GB',
          image: 'AMD Radeon PRO W5700.webp',
          favoriteProduct: 'heart.png',
          productPrice: '2727 lei',
          price: 2727,
          capacity: '8GB',
          memoryType: 'GDDR6',
          cantity: 4,
          promotion: false,
          showVideoCards: false,
        },
        {
          productName: 'Intel Arc A770 Series A, 16GB, GDDR6, 256-bit',
          image: 'Intel Arc A770.webp',
          favoriteProduct: 'heart.png',
          productPrice: '1752 lei',
          price: 1752,
          capacity: '16GB',
          memoryType: 'GDDR6',
          cantity: 4,
          promotion: true,
          showVideoCards: false,
        },
        {
          productName: 'Intel Arc A750 Limited Edition Graphics, 8GB GDDR6, 256-bit',
          image: 'Intel Arc A750.webp',
          favoriteProduct: 'heart.png',
          productPrice: '1374 lei',
          price: 1374,
          capacity: '8GB',
          memoryType: 'GDDR6',
          cantity: 4,
          promotion: true,
          showVideoCards: false,
        }],
    }
  },
  methods: {
    favouriteProductSelect(index) {
      if (this.videoCards[index].favoriteProduct === 'heart.png') {
        this.videoCards[index].favoriteProduct = this.favoriteProductOn
      } else {
        this.videoCards[index].favoriteProduct = 'heart.png'
      }
    },
    checkPriceRange(index) {
    }
  },
  computed: {
    checkAvailability() {

    }
  }
}

</script>

<style scoped>

.menu {
  position: absolute;
  top: 10%;
  left: 2%;
  height: 100%;
  width: 15%;
  background: transparent;

}

.menu h1 img {
  width: 20%;
  background: transparent;
}

.menu h1:hover {
  cursor: pointer;
}
.categorie{
  color: rgb(51, 51, 51);
  text-align: left;
  font-size: 18px;
  line-height: normal;
  box-sizing: border-box;
  list-style-type: none;
  font-family: "Open Sans",Helvetica,sans-serif!important;
  top: 0%;
  position: relative;
  cursor: pointer;
}
.componente {
  color: rgb(51, 51, 51);
  text-align: left;
  font-size: 18px;
  line-height: normal;
  box-sizing: border-box;
  list-style-type: none;
  font-family: "Open Sans",Helvetica,sans-serif!important;
  top: 0%;
  position: relative;
  cursor: pointer;
}

.filter {
  color: rgb(51, 51, 51);
  text-align: left;
  font-size: 18px;
  line-height: normal;
  box-sizing: border-box;
  list-style-type: none;
  font-family: "Open Sans",Helvetica,sans-serif!important;
  top: 0%;
  position: relative;
  cursor: pointer;
}

.filter input {
  cursor: pointer;
  line-height: normal;
  box-sizing: border-box;
  list-style-type: none;
  font-family: "Open Sans",Helvetica,sans-serif!important;
}

.label {
  font-size: 16px;
}

.button {
  border-radius: 8px;
  border: none;
  width: 50%;
  display: inline-block;
  padding: 9px;
  color: black;
  background-color: #f2f2f2;
  text-align: center;
  cursor: pointer;
  font-size: medium;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
  position: absolute;
  top: 10%;
  left: 0%;
}

.button:hover {
  background-color: cornflowerblue;
  color: white;
}

.cardsContainer {
  position: absolute;
  background: transparent;
  width: 83%;
  height: 100%;
  top: 10%;
  left: 17%
}

.productCard {
  display: inline-block;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  width: 23%;
  height: 60%;
  top: 0%;
  cursor: pointer;
  position: relative;
  background: white;
  left: -2%;
  margin-left: 2%;
  margin-top: 2%;
}

.productCard:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.4);
}

.productCard img {
  position: absolute;
  width: 100%;
}

.productCard p3 {
  color: black;
  position: absolute;
  bottom: 17%;
  left: 0%;
  text-align: center;
  padding: 10px;
}

.productCard p4 {
  position: absolute;
  bottom: 5%;
  left: 5%;
  padding: 10px;
  font-size: x-large;
  font-weight: bold;
  color: red;
}

.productCard button {
  position: absolute;
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-size: medium;
  cursor: pointer;
  bottom: 5%;
  left: 45%;
  width: 50%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
  background: cornflowerblue;
  color: white;
}

.productCard button:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.4);
}
/*TODO use dash for names: product-card*/
.productCard h img {
  position: absolute;
  width: 10%;
  left: 85%;
  top: 2%
}

</style>