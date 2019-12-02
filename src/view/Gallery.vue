<template>
  <div>
      <h2 class="content__title">{{lang === 'ru' ? title.ru : title.eng}}</h2>
      <p class="content__text">ниже приведена таблица моих работ или проектов, где я принимал участие</p>
      <table class="content__text">
        <tr>
          <th :style="{'background-color': themeColor}">Вид</th>
          <th :style="{'background-color': themeColor}">Ссылка</th>
          <th :style="{'background-color': themeColor}">Цель</th>
          <th :style="{'background-color': themeColor}">Основа</th>
        </tr>
        <tr v-bind:key="index" v-for=" (item, index) of galleryWork">
          <td><img :src="item.img" alt="image"></td>
          <td><a :href="item.link" target="_blank">{{item.link}}</a></td>
          <td>{{item.point}}</td>
          <td>
            <ul>
               <li v-bind:key="ind" v-for=" (i, ind) of item.tech">{{i}}</li>
            </ul>
          </td>
        </tr>
      </table>
  </div>

</template>

<script>
import textMix from './../mixins/textMixin'

export default {
  props: ['lang', 'themeColor'],
  data () {
    return {
      title: {
        ru: 'Мои работы',
        eng: 'My projects'
      },
      arrImg: [],
      galleryWork: [
        {
          img: './static/screenshots/Document - Google Chrome.jpg',
          link: 'https://a-kolganov.github.io/goit-fe-course/js/module_11/',
          point: 'Поисковик JS по выбору критерий из меню',
          tech: ['HTML', 'CSS', 'JS']
        },
        {
          img: './static/screenshots/Document3 - Google Chrome.jpg',
          link: 'https://a-kolganov.github.io/goit-fe-course/js/module_10/',
          point: 'API запросы на "получение", "добавление", "изменение", "удаление"',
          tech: ['HTML', 'CSS', 'JS']
        },
        {
          img: './static/screenshots/Labi.dev-test - Google Chrome.jpg',
          link: 'https://a-kolganov.github.io/labi.dev-test/build/',
          point: 'Верстка с получением информации',
          tech: ['HTML', 'SASS', 'JS', 'Webpack','handlebars', 'JSON']
        },
        {
          img: './static/screenshots/Module 12 - Google Chrome.jpg',
          link: 'https://a-kolganov.github.io/goit-fe-course/js/module_12/build/',
          point: 'Работа с API запросом и локальным хранением данных',
          tech: ['HTML', 'CSS', 'JS', 'Local storage']
        },
        {
          img: './static/screenshots/Lesnaya opushka - Google Chrome.jpg',
          link: 'https://a-kolganov.github.io/lesnaya_opushka/build/index.html',
          point: 'Верстка сайта SPA под разные девайсы ',
          tech: ['HTML', 'SASS', 'JS', 'Webpack','handlebars', 'JSON']
        },
        {
          img: './static/screenshots/FS Клиент.jpg',
          link: 'https://chaty-ff67c.firebaseapp.com/',
          point: 'Курсовая работа. Чат для общения ',
          tech: ['HTML', 'firebase','lodash','vue','vue-material','vue-router','vuelidate','vue-cli']
        }
      ]
    }
  },
  methods: {
    },
  mixins: [textMix]
}
</script>

<style scoped>
table{
  width: 100%;
  height: auto;
    border-collapse: separate;
    border-spacing: 5px;
    text-align:center;
    font-size: 15px;
    table-layout: fixed;
    padding: 0;
}
.content__text{
  text-indent: 0;
  font-size: 10px;
}
th {
  font-weight: bolder;
  font-size: 13px;
  text-indent: 0;
  font-style: normal;
  text-align: center;
  line-height: 40px;
  padding: 15px 0;
  background-color: #cc00cc;
  border-radius:15px;
  background: rgba(255,255,255,0.5);
}
td>img{
  width: 50px;
  border-radius: 15px;
  margin: 0 auto;
  display: block;
}
td{
  padding: 10px 5px;
  vertical-align: middle;
  text-align: center;
  word-break: break-word;
    border-radius:15px;
}
tr:nth-child(odd){
  background: linear-gradient(280deg, #ccc, #eee);

}
tr:nth-child(even){
  background: linear-gradient(90deg, #ccc, #eee);
}
ul {
  list-style: inside;
}
li{
  text-align:left;
}
@media(min-width: 768px){
td>img{
  width: 150px;

}
th {

  font-size: 20px;

}
}
@media(min-width:1024px){
  td>img{
  width: 200px;

}
.content__text{
  font-size: 15px;
}
}
</style>
