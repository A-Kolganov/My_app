<template>
 <!-- <div class="wrapper">
   <header class="header-app">
   </header>
   <div>
     <app-hello></app-hello>
   </div>
   <div>
     <app-nav></app-nav>
   </div>
   <div>
     <router-view class="page__content"></router-view>
   </div>
   <div class="page__bottom-effect">

   </div>
   <app-foot></app-foot>

 </div> -->
  <div class="wrapper">
    <div :style="{'background': 'linear-gradient(72deg, #000000 0%, #2c2c2c 20%,'+themeColor+' 22%,'+themeColor+' 23%, #2b2b2b 30%, #2c2c2c 58% ,'+themeColor+ ' 60%,'+themeColor+' 61% , #2c2c2c 65%, #000000 100%)'}" class="content-wrapper">
      <app-header @lang="changeLang" @theme="chooseTheme">
      </app-header>
      <app-main v-bind:themeColor="themeColor" v-bind:lang="lang">
      </app-main>
      
    </div>
    <app-foot v-bind:themeColor="themeColor" v-bind:lang="lang">
    </app-foot>
  </div>
 </template>

<script>
import optMenu from './components/Options-menu'
export default {
  data () {
    return {
      lang: 'ru',
      themeColor: '#cc00cc'
    }
  },
  methods: {
    changeLang: function (data) {
      this.lang = data
    },
    chooseTheme: function (v) {
      this.themeColor = v
    }
  },
  components: {
    optMenu
  }
}

</script>

<style scoped>
@import './assets/fonts/index.css';
.wrapper{
  margin: 0 auto;
  border: 1px #000 dotted;
}
.content-wrapper{
  background-attachment: fixed ;
  height:auto;
  min-height: 100vh;
  width:100%;
  padding: 0 0 50px 0;
  }
/**.wrapper{
  min-width: 1000px;
}
.header-app,.footer-app{
  display: block;
  width: 100%;
  height: 30px;
  background-color: #000;
}
.page__content{
  margin: 20px auto;
  width: 85%;
  background-color: #eee;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  height:auto;
  min-height: 300px;
  padding: 20px;
  box-sizing: border-box;
}
.page__bottom-effect{
  width:100%;
  height: 100px;
  border-bottom: 10px solid #cc00cc;
  background-color: #fff;
  border-radius: 50px;
}**/
</style>
