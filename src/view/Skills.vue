<template>
  <div>
    <div>
      <h2 class="content__title">{{lang === 'ru' ? title.ru : title.eng}}</h2>
      <ul class="content__list">
        <li class="content__list__item" v-for="item in tech">
          <img class="content__list__item__icon"  :src="item">
        </li>
      </ul>
    </div>
    <div class="content__block" :style="{'border':'5px'+' '+ themeColor + ' '+ 'solid'}">
      <a class="btn-download" download href="./static/docs/Резюме.docx">Скачать файл</a>
      <ul class="content__text">
        <li>Размер: <strong>{{file.size}}</strong></li>
        <li>Тип: <strong>{{file.type}}</strong></li>
        <li>Обновлено: <strong>{{file.reload}}</strong></li>
      </ul>
    </div>
  </div>
</template>

<script>
import textMix from './../mixins/textMixin'

export default {
  props: ['lang', 'themeColor'],
  data () {
    return {
      title: {
        ru: 'Резюме',
        eng: 'My skills'
      },
      file: {
        size: 705.14 + 'kb',
        type: 'MS Word',
        reload: '08.07.2019'
      },
      tech: [
        '../../static/icons_web/236-2367416_free-download-at-icons8-json-transparent-background-logo.png',
        '../../static/icons_web/CSS3_logo_and_wordmark.svg.png',
        '../../static/icons_web/github-512.png',
        '../../static/icons_web/Gulp_logo_red.png',
        '../../static/icons_web/HTML5_Logo_512.png',
        '../../static/icons_web/logo.png',
        '../../static/icons_web/sass-logo.png',
        '../../static/icons_web/webpack_1082256.png',
        '../../static/icons_web/Git-Icon-1788C.png',
        '../../static/icons_web/bootstrap-png-bootstrap-512.png',
        '../../static/icons_web/logo-javascript-png-java-script-js-logo-format-ai-javascript-logo-vector-png-213.png'
      ]
    }
  },
  mixins: [textMix]
}
</script>

<style scoped>
ul{
  line-height: 25px;
}
strong {
  font-weight: bolder;
}
.content__text{
  font-size: 10px;
  text-indent: unset;
   border: 1px #000 dotted;
   border-radius: 10px;
   margin-left: 5px;
}
.content__block{
  height: auto;
  margin: 20px auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  border-radius: 15px;
  background-color: #fff;
}
.btn-download{
  width: 120px;
  height: 50px;
  border-radius: 25px;
  background-color: #555;
  color: #fff;
  cursor: pointer;
  align-items: middle;
  text-decoration: none;
  line-height:50px;
  font-family: 'Rubik' , serif;
  font-size: 15px;
  text-align:center;
  margin-left: 5px;
}
.content__list__item{
  width: 50px;
  display: block;
  padding: 10px;
  box-sizing: border-box;
 
}
.content__list__item__icon{
  width:100%;
  vertical-align: middle;
}
.content__list{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  flex-wrap: wrap;
}
@media(min-width: 768px){
  .content__text{
  font-size: 20px;
  text-indent: 5px;
}
.content__list__item{
  width: 80px;
}
}
@media(min-width: 1200px){
  .content__list__item{
  width: 120px;
}
}
</style>
