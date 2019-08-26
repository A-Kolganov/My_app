<template>
  <div>
    <div>
      <h2 class="content__title">{{lang === 'ru' ? title.ru : title.eng}}</h2>
      <p class="content__text" >тут создать перечень умений</p>
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
        size: 120 + 'kb',
        type: 'MS Word',
        reload: '08.07.2019'
      }
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
.content__block{
  width: 100%;
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
}
</style>
