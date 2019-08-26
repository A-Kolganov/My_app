<template>
  <div class="content">
    <h2 class="content__title">{{lang === 'ru' ? title.ru : title.eng}}</h2>
      <div class="content__wrapper">
        <img class="content__img grid-item-one" :src="articles[0].url" :alt="articles[0].alt" >
        <img class="content__img grid-item-two" :src="articles[1].url" :alt="articles[1].alt" >
        <img class="content__img grid-item-three" :src="articles[2].url" :alt="articles[2].alt" >
        <p class="content__text grid-item-four">{{articles[0].message}}</p>
        <p class="content__text grid-item-five">{{articles[1].message}}</p>
        <p class="content__text grid-item-six">{{articles[2].message}}</p>
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
        ru: 'Приятно познакомиться!',
        eng: 'Nice to meet you !'
      },
      articles: [{
        url: './static/img/html.png', alt: 'html & css & js image', 
        message: 'Рад приветствовать Вас на моём личном сайте! Здесь Вы сможете найти немного информации обо мне и о том что я делаю - мои идеи и мои работы.'},
      {
        url: './static/img/code-javascript.jpg', alt: 'js image', 
        message: `Для удобства вверху сайта предоставленно небольшое меню. Нажимайте на кнопку и в отдельном окне Вы можете настроить цвет темы для своего комфорта, выбрать язык и включить музыку для более комфорта прибывания на сайте. Ниже есть навигация по сайту, выбирайте интересующую Вас вкладку для более конкретной информации. Так же, Вы можете отпрвить свой комментарий на вкладке " Контакты" . Буду рад прочесть Ваше мнение, идеи или получить критику. `},
      {
        url: './static/img/15.79.jpg', alt: 'working guy', 
        message: `Не теряй времени - переходи по ссылкам  `}
      ]
    }
  },
  mixins: [textMix]
}
</script>

<style scoped>
.content__wrapper{
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 200px 1fr 200px 1fr 200px 1fr ;
  align-items: center;
  justify-items: center;
  margin-top: 30px;
}
.content__img{
  width:200px;
  height:200px;
  border-radius: 25px;
}
.content__text{
  display:block;

  padding: 25px 10px;
}
.grid-item-one{
  grid-column: 1;
  grid-row: 1 / 2;
}
.grid-item-two{
  grid-column: 1;
  grid-row: 3 / 4;
}
.grid-item-three{
  grid-column: 1 ;
  grid-row: 5 / 6;
}
.grid-item-four{
  grid-column: 1;
  grid-row: 2 / 3;
}
.grid-item-five{
  grid-column: 1;
  grid-row: 4 / 5;
}
.grid-item-six{
  grid-column: 1;
  grid-row: 6 / 7;
}
@media(min-width: 768px){
  .content__wrapper{
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr ;

}
.grid-item-one{
  grid-column: 1/2;
  grid-row: 1 / 2;
}
.grid-item-two{
  grid-column: 3/4;
  grid-row:  2/ 3;
}
.grid-item-three{
  grid-column: 1/2 ;
  grid-row: 3 / 4;
}
.grid-item-four{
  grid-column: 2/4;
  grid-row:  1/ 2;
}
.grid-item-five{
  grid-column: 1/3;
  grid-row:  2/ 3;
}
.grid-item-six{
  grid-column: 2/4;
  grid-row: 3 / 4;
}
}
</style>
