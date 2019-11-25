<template>
    <header class="header">
        <app-options @lang="changeLang" @theme="chooseTheme">
      </app-options>
      <h1 class="header__title">hello world!</h1>
    </header>
</template>
<script>
import optMenu from './../components/Options-menu';
    export default {
        data () {
            return {
                lang: 'ru',
                themeColor: '#cc00cc',
    }
  },
    methods: {
        changeLang: function(data){
            this.lang = data;
            this.$emit('lang', this.lang);
        },
        chooseTheme: function(v){
            this.themeColor = v;
            this.$emit('theme', this.themeColor);
        }
    },
    components: {
        optMenu
        }
}
</script>
<style scope>
    .header{
        width:100%;
        background-color: #000000;
        height: 40px;
    }
    .header__title{
          display:block;
  width:100%;
  height:auto;
  font-family: 'Righteous', 'Alice' , cursive ;
  font-weight: 700;
  color: #fff;
  font-size: 35px;
  text-transform: uppercase;
  text-align: center;
  line-height: 90px;
    }
    @media(min-width: 768px){
        .header__title{
font-size: 80px;
line-height: 120px;
        }
    }
    @media(min-width: 1200px){
        .header__title{
font-size: 80px;
line-height: 200px;
        }
    }
</style>