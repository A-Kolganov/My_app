<template>
  <div>
      <h2 class="content__title">{{title}}</h2>
      <p class="content__text">ниже приведена таблица моих работ или проектов, где я принимал участие</p>
      <table class="content__text">
        <tr>
          <th>Дата</th>
          <th>Вид</th>
          <th>Ссылка</th>
          <th>Цель</th>
          <th>Основа</th>
        </tr>
        <tr v-bind:key="index" v-for=" (item, index) of galleryWork">
          <td>{{item.date}}</td>
          <td><img :src="item.img" alt="img"></td>
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
  data () {
    return {
      title: `Мои работы !`,
      galleryWork: [
        {
          date: '15.02.2018',
          img: './static/img/foto.jpg',
          link: 'google.com',
          point: 'сайт для растений',
          tech: ['HTML', 'SASS', 'JS']
        },
        {
          date: '20.07.2019',
          img: './static/img/foto.jpg',
          link: 'google.com',
          point: 'курсовой проект',
          tech: ['HTML', 'SASS', 'JS', 'Vue.js']
        }
      ]
    }
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
}
tr{

}
th {
  font-weight: bolder;
  font-size: 25px;
  text-indent: 0;
  font-style: normal;
  text-align: center;
  line-height: 40px;
  padding: 15px 0;
  background-color: #bbb;
  border-radius:15px;

}
td>img{
  width: 100px;
  border-radius: 15px;
  margin: 0 auto;
  display: block;
}
td{
  padding: 15px 0;
  vertical-align: middle;
  text-align: left;
}
ul {
  list-style: inside;
}
li{
  text-align:left;
}
</style>
