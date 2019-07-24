<template>
  <div>
    <div>
      <h2 class="content__title">{{title}}</h2>
      <p class="content__text" >тут создать перечень умений</p>
    </div>
    <div class="content__block">
      <button type="button">Скачать файл</button>
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
  data () {
    return {
      title: `Моё резюме !`,
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
}
button{
  width: 100px;
  height: 50px;
  border-radius: 25px;
  background-color: #555;
  color: #fff;
  cursor: pointer;
  align-items: middle;
}
</style>
