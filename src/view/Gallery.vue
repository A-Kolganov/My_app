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
          <td><img :src="setImg(item.link, index)" :id="setID(index)" alt="image"></td>
          <td><a :href="item.link" target="_blank">{{item.link}}</a></td>
          <td>{{item.point}}</td>
          <td>
            <ul>
               <li v-bind:key="ind" v-for=" (i, ind) of item.tech">{{i}}</li>
            </ul>
          </td>
        </tr>
      </table>
      <a href="./static/img/foto.jpg" download>download</a>
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
          img: './static/img/foto.jpg',
          link: 'https://www.google.com',
          point: 'сайт для растений',
          tech: ['HTML', 'SASS', 'JS']
        },
        {
          img: './static/img/foto.jpg',
          link: 'https://www.pixlr.com/',
          point: 'курсовой проект',
          tech: ['HTML', 'SASS', 'JS', 'Vue.js']
        }
      ]
    }
  },
  methods: {
    setID (ind) {
      return 'imgID' + ind
    },
    setImg: function (url, ind) {
      console.log(`arrImg: ` + this.arrImg)
      console.log(`arrImg.length: ` + this.arrImg.length)
      if (this.arrImg.length > 0) {
        const imgPlace = document.querySelector('#imgID' + ind)
        imgPlace.setAttribute('src', this.arrImg[ind])
        console.log(`arrImg[ind] ` + this.arrImg[ind])
      } else {
        this.fetchAPI(url, ind)
      }
    },
    fetchAPI (link, ind) {
      const keyAPI = '5c8a795154b726205b11554ae09686d1186cd15744a02'

      fetch(`https://api.linkpreview.net/?key=${keyAPI}&q=${link}`)
        .then(response => {
          if (response.ok) return response.json()
          throw new Error(`Error while fetching: ${response.statusText}`)
        })
        .then(data => {
          const imgPlace = document.querySelector('#imgID' + ind)
          this.arrImg.push(data.image)
          imgPlace.setAttribute('src', data.image)
        }).catch(err => console.log(err))
    }},
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
