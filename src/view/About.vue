<template>
  <div class="content">
    <h2 class="content__title">{{lang === 'ru' ? title.ru : title.eng}}</h2>
      <div class="content__wrapper">
        <img class="content__img grid-item-one" :src="img[0].url" :alt="img[0].alt" >
        <img class="content__img grid-item-two" :src="img[1].url" :alt="img[1].alt" >
        <img class="content__img grid-item-three" :src="img[2].url" :alt="img[2].alt" >
        <p class="content__text grid-item-four">{{lang === 'ru' ? articlesRu[0] : articlesEn[0]}}</p>
        <p class="content__text grid-item-five">{{lang === 'ru' ? articlesRu[1] : articlesEn[1]}}</p>
        <p class="content__text grid-item-six">{{lang === 'ru' ? articlesRu[2] : articlesEn[2]}}</p>
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
      img: [{
        url: './static/img/html.png',
        alt: 'html & css & js image'},
      {
        url: './static/img/code-javascript.jpg',
        alt: 'js image' },
      {
        url: './static/img/15.79.jpg',
        alt: 'working guy'}
      ],
      articlesRu: [
        `Здравствуйте! Меня зовут Артём и я JUNIOR FRONTEND DEVELOPER. Этот сайт полностью разработан моими силами на фреймворке Vue.js, который я только принялся узучать. Надеюсь Вы довольны тем что Вы видите и дадите обратный отзыв. `,
        `У меня есть опыт работы в рекламе, продажах, маркетинге и полиграфии. Лишь недавно я открыл для себя програмирование и разработку, и полностью заинтересовался деятельностью в сфере ИТ. Это открытие дало мне понять чем я хочу заниматься в дальнейшем и где я хочу добиться успеха. Я успешно окончил курсы фронтенд разработчика и уже владею некоторыми знаниями и необходимым опытом. Курсовой работой стал хакатон, где я в команде с другими студентами разработали чат для общения ( ссылку на чат можно найти в списке проэктов). На данный момент я уделяю много внимания HTML/CSS верстке т.к. считаю что мне нужно преуспеть в этих вещах прежде чем двигаться дальше.  `,
        `В мои планы входит стать полноценным FRONTEND разработчиком, качественно использовать возможности разных языков програмирования, раскрыть свой потенциал в одной и ведущих компаний.`
      ],
      articlesEn: [
        `Hello! My name is Artem and I am JUNIOR FRONTEND DEVELOPER. This site is completely developed by my forces on the Vue.js framework, which I just started to learn. I hope you are happy with what you see and give me feedback.`,
        `I have experience in advertising, sales, marketing and printing. Only recently I discovered programming and development for myself, and was completely interested in IT activities. This discovery made me understand what I want to do in the future and where I want to succeed. I successfully completed the front-end developer courses and already have some knowledge and necessary experience. The hackathon became a term paper, where I, in a team with other students, developed a chat for communication (a link to the chat can be found in the list of projects). At the moment, I pay a lot of attention to HTML / CSS layout because I believe that I need to succeed in these things before moving on.`,
        `
My plans include becoming a full-fledged FRONTEND developer, making good use of the capabilities of different programming languages, and unlocking my potential in one of the leading companies.`
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
