<template>

  <body>

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

  <div class="hero-image">
    <img v-bind:src="require(`@/assets/${background}`)">

    <div class="topNav" ref="myTopnav">
      <div class="logo">
        <h1><img v-bind:src="require(`@/assets/${logo}`)"></h1>
      </div>

      <router-link to="/" class="active">{{ home }}</router-link>
      <router-link to="/shop">{{ shop }}</router-link>
      <a>{{ shoppingCart }}</a>
      <router-link to="/about">{{ aboutUs }}</router-link>
      <a>{{ faq }}</a>
      <a>{{ contact }}</a>
      <a v-on:click="myFunction" href="javascript:void(0);" class="icon">
        <i class="fa fa-bars"></i>
      </a>
    </div>

    <div class="buttomNav">
      <a>{{ home }}</a>
      <router-link to="/shop">{{ shop }}</router-link>
      <a>{{ shoppingCart }}</a>
      <router-link to="/about">{{ aboutUs }}</router-link>
      <a>{{ faq }}</a>
      <a>{{ contact }}</a>
    </div>
  </div>

  <router-view></router-view>

  </body>

</template>

<script>

/*const Counter = {
  template: `<div>{{ count }}</div>`,
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}*/

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      home: 'Home',
      shop: 'Shop',
      shoppingCart: 'ShoppingCart',
      aboutUs: 'AboutUs',
      faq: 'FAQ',
      contact: 'Contact',
      logo: 'logo.png',
      background: 'background.png'
    }
  },
  methods: {
    myFunction() {
      if (this.$refs.myTopnav.className === "topnav") {
        this.$refs.myTopnav.className += "responsive";
      } else {
        this.$refs.myTopnav.className = "topnav";
      }
    },
  }
}

</script>

<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.hero-image img {
  background-position: center;
  position: relative;
  width: 200%;
}

.topNav {
  overflow: hidden;
  background-color: transparent;
  position: absolute;
  top: 0%;
  width: 100%;
}

.topNav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.logo h1 {
  float: left;
  margin: 1%;
}

.logo img {
  height: 60px;
  width: 80px;
}

.topNav a:hover {
  background-color: cornflowerblue;
  color: white;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
}

.topNav a.active {
  background-color: cornflowerblue;
  color: white;
}

.topNav .icon {
  display: none;
}

.buttomNav {
  text-align: center;
  position: absolute;
  top: 225%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.buttomNav a {
  display: inline-block;
  color: #f2f2f2;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: medium;
  margin: 3%;
}

.buttomNav a:hover {
  cursor: pointer;
  color: #f2f2f2;
  transform: scale(1.25);
}

@media screen and (max-width: 600px) {
  .topNav a:not(:first-child) {display: none;}
  .topNav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topNav.responsive {position: relative;}
  .topNav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topNav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
