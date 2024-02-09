<template>

  <div class="hero-text">
    <h1><img v-bind:src="require(`@/assets/${logoTransparent}`)"></h1>
    <p1>Online Computer Store</p1>
    <br>
    <br>
    <p2 v-on:click="a()">High quality, low budget</p2>
    <br>
    <br>
    <button>{{ doneTodosCount }}</button>
  </div>

    <div class="carousel">
      <TransitionGroup name="slide-fade">
        <div v-show="showVideoCards" v-for="(card, index) in videoCards" :key="index" class="card" ref="card">
        <img v-bind:src="require(`@/assets/${card.image}`)">
        <h><img v-on:click="favouriteProductSelect(index)" v-bind:src="require(`@/assets/${card.favoriteProduct}`)"></h>
        <p3>{{card.productName}}</p3>
        <p4>{{card.productPrice}}</p4>
        <button>{{buyButton}}</button>
      </div>
      </TransitionGroup>

      <TransitionGroup name="slide-fade">
          <div v-show="showMotherboards" v-for="(card, index) in motherboards" :key="index" class="card" ref="card1">
            <img v-bind:src="require(`@/assets/${card.image}`)">
            <h><img v-on:click="favouriteProductSelect(index)" v-bind:src="require(`@/assets/${card.favoriteProduct}`)"></h>
            <p3>{{card.productName}}</p3>
            <p4>{{card.productPrice}}</p4>
            <button>{{buyButton}}</button>
          </div>
      </TransitionGroup>

      <TransitionGroup name="slide-fade">
          <div v-show="showRamMemory" v-for="(card, index) in ramMemory" :key="index" class="card" ref="card2">
            <img v-bind:src="require(`@/assets/${card.image}`)">
            <h><img v-on:click="favouriteProductSelect(index)" v-bind:src="require(`@/assets/${card.favoriteProduct}`)"></h>
            <p3>{{card.productName}}</p3>
            <p4>{{card.productPrice}}</p4>
            <button>{{buyButton}}</button>
          </div>
      </TransitionGroup>

      <div class="arrows">
        <a v-on:click="changeProduct('prev')" class="prev">❮</a>
        <a v-on:click="changeProduct('next')" class="next">❯</a>
      </div>
    </div>

</template>

<script>

import {mapState} from "vuex";

export default {
  name: 'HomeView',
  components: {},
  data() {
    return {
      localCount: [1,3,4],
      showCarousel: true,
      showVideoCards: true,
      showMotherboards: false,
      showRamMemory: false,
      background: 'background.png',
      logo: 'logo.png',
      logoTransparent: 'logo_transparent.png',
      favoriteProductOn: 'redHeart.png',
      buyButton: 'Add in cart',
      videoCards: [
        {
          productName: 'Asus Phoenix Radeon™ RX 550, 4GB GDDR5, 128-bit',
          image: 'ASUS RX 550.jpg',
          favoriteProduct: 'heart.png',
          productPrice: '459 lei',
          capacity: '4GB',
          memoryType: 'GDDR5',
          cantity: 4,
        },
        {
          productName: 'ASUS GeForce GT 710 EVO, 2GB GDDR3, 64-bit',
          image: 'AsusGt710.webp',
          favoriteProduct: 'heart.png',
          productPrice: '294 lei',
          capacity: '2GB',
          memoryType: 'GDDR3',
          cantity: 3,
        },
        {
          productName: 'ASUS GeForce GTX® 1650 Phoenix Evo, 4GB GDDR6, 128-bit',
          image: 'ASUS GTX 1650.png',
          favoriteProduct: 'heart.png',
          productPrice: '911 lei',
          capacity: '4GB',
          memoryType: 'GDDR6',
          cantity: 2,
        }],
      motherboards: [
        {
          productName: 'ASUS PRIME B450-PLUS, Socket AM4',
          image: 'ASUS PRIME B450-PLUS.webp',
          favoriteProduct: 'heart.png',
          productPrice: '397 lei',
          memoryType: 'DDR4',
          cantity: 4,
        },
        {
          productName: 'ASUS PRIME Z790M PLUS DDR4',
          image: 'ASUS PRIME Z790M PLUS.webp',
          favoriteProduct: 'heart.png',
          productPrice: '969 lei',
          memoryType: 'DDR4',
          cantity: 3,
        },
        {
          productName: 'Asus PRIME X670-P WIFI, Socket AM5',
          image: 'Asus PRIME X670-P.webp',
          favoriteProduct: 'heart.png',
          productPrice: '1287 lei',
          memoryType: 'DDR5',
          cantity: 2,
        }],
      ramMemory: [
        {
          productName: 'Corsair Vengeance LPX 8GB DIMM, DDR4, 2666 MHz, CL 16, 1.2V, XMP 2.0, Black',
          image: 'Corsair Vengeance LPX 8GB.webp',
          favoriteProduct: 'heart.png',
          productPrice: '104lei',
          memoryType: 'DDR4',
          cantity: 4,
        },
        {
          productName: 'ADATA XPG Gammix D10, 32GB (2x16GB) DDR4, 3600MHz CL18, Dual Channel Kit',
          image: 'ADATA XPG Gammix D10.webp',
          favoriteProduct: 'heart.png',
          productPrice: '359 lei',
          memoryType: 'DDR4',
          cantity: 3,
        },
        {
          productName: 'Corsair Vengeance, 32GB DDR5 (2x16GB), 6400MHz, CL36',
          image: 'Corsair Vengeance 32GB.webp',
          favoriteProduct: 'heart.png',
          productPrice: '799 lei',
          memoryType: 'DDR5',
          cantity: 2,
        }]
    }
  },
  methods: {
    changeProduct(button) {
      if (button === 'prev') {
        if (this.showVideoCards === true) {
          this.showRamMemory = true
          this.showVideoCards = false
        } else if (this.showRamMemory === true) {
          this.showMotherboards = true
          this.showRamMemory = false
        } else if (this.showMotherboards === true) {
          this.showVideoCards = true
          this.showMotherboards = false
        }
      }
      if (button === 'next') {
        if (this.showVideoCards === true) {
          this.showMotherboards = true
          this.showVideoCards = false
        } else if (this.showMotherboards === true) {
          this.showRamMemory = true
          this.showMotherboards = false
        } else if (this.showRamMemory === true) {
          this.showVideoCards = true
          this.showRamMemory = false
        }
      }
    },
    favouriteProductSelect(index) {
      if (this.videoCards[index].favoriteProduct === 'heart.png') {
        this.videoCards[index].favoriteProduct = this.favoriteProductOn
      } else {
        this.videoCards[index].favoriteProduct = 'heart.png'
      }
      if (this.motherboards[index].favoriteProduct === 'heart.png') {
        this.motherboards[index].favoriteProduct = this.favoriteProductOn
      } else {
        this.motherboards[index].favoriteProduct = 'heart.png'
      }
      if (this.ramMemory[index].favoriteProduct === 'heart.png') {
        this.ramMemory[index].favoriteProduct = this.favoriteProductOn
      } else {
        this.ramMemory[index].favoriteProduct = 'heart.png'
      }
    },
    a () {
      /*console.log(this.$store.state.count + ' ' + this.$store.state.message)*/
      /*console.log(this.$store.getters.doneTodos)*/
      console.log(this.$store.getters.doneTodosCount)
      console.log(this.$store.getters.getTodoByID(1))
    }
  },
  computed: {
    ...mapState({
      /*count: state => state.count*/
      /*countAlias: 'count'*/
/*      contPlusLocalState (state) {
        return state.count + ' ' + this.localCount
      }*/
    }),
    doneTodosCount () {
      return this.$store.getters.doneTodosCount
    }
  }
}
</script>

<style>

.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}

.hero-text h1 img {
  width: 80%;
}

.hero-text p1 {
  font-size: xxx-large;
  color: #f2f2f2;
}

.hero-text p2 {
  font-size: x-large;
  color: #f2f2f2;
}

.hero-text button {
  border-radius: 8px;
  border: none;
  width: 30%;
  display: inline-block;
  padding: 15px;
  color: black;
  background-color: #f2f2f2;
  text-align: center;
  cursor: pointer;
  font-size: medium;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
}

.hero-text button:hover {
  background-color: cornflowerblue;
  color: white;
}

.carousel {
  position: absolute;
  top: 95%;
  width: 100%;
  height: 60%;
}

.card {
  display: inline-block;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  width: 20%;
  height: 100%;
  top: 50%;
  cursor: pointer;
  position: relative;
  background: white;
  left: 26%;
  margin-left: 2%;
  transform: translate(-50%, -50%)
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.4);
}

.card img {
  position: absolute;
  width: 100%;
}

.card p3 {
  color: black;
  position: absolute;
  bottom: 17%;
  left: 0%;
  text-align: center;
  padding: 10px;
}

.card p4 {
  position: absolute;
  bottom: 5%;
  left: 5%;
  padding: 10px;
  font-size: x-large;
  font-weight: bold;
  color: red;
}

.card button {
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

.card button:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.4);
}

.card h img {
  position: absolute;
  width: 10%;
  left: 85%;
  top: 2%
}

.arrows {
  position: absolute;
  width: 100%;
  top: 45%;
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 8px 0px 0px 8px;
  user-select: none;
}

.prev {
  left: 14%
}

.next {
  right: 14%;
  border-radius: 0px 8px 8px 0px;
}

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.4);
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;

}

.slide-fade-enter-from {
  transform: translateX(11%);
  opacity: 0%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}



</style>