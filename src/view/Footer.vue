<template>
  <footer class="footer" :style="{'background-color': themeColor}">
    <p >{{phone_mail}}</p>
    <p ><b>{{data}}</b></p>
    <p >{{author}}</p>
    
  </footer>
</template>

<script>
export default {
  props: ['lang','themeColor'],
  data () {
    return {
      phone_mail: '+3(063)2441032 / tema.crow@gmail.com',
      data: '2019',
      author: 'Designed by A.Kolganov'
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
}
</script>

<style scoped>
.footer{
  width:100%;
  height: 80px;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer>p{
  font-family: 'Alice';
  font-size: 10px;
  margin: 5px 20px;
  line-height: 20px;
  color: #fff;
}
@media(min-width: 768px){
  .footer>p{
    width: 200px;
    text-align: center;
  font-size: 20px;
}
}
</style>
