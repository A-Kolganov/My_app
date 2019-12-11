<template>
  <article class="content">
      <h2 class="content__title">{{lang === 'ru' ? title.ru : title.eng}}</h2>
      <section class="content__text" v-bind:key="index" v-for="(p, index) of (lang === 'ru' ? textRu : textEng)">
        {{p}}
      </section>
  </article>

</template>

<script>
import textMix from './../mixins/textMixin'

export default {
  props: ['lang', 'themeColor'],
  data () {
    return {
      title: {
        ru: 'Добро пожаловать!',
        eng: 'Welcome !'
      },
      textRu: [
        `Рад приветствовать Вас на моём личном сайте! Он предназначен для презентации информации обо мне и о том что я делаю.   `,
        `Для более комфортного пребывания на сайте, в меню "настройки" Вы можете изменить дополнительный цвет темы, а так же включить аудио-плеер. Сайт поддерживает 2 языка, что значительно расширяет аудиторию гостей и даёт возможность лучше понять информацию и минимизировать уровень языкогого барьера.`,
        `Сайт был разработан легким и понятным. Переходите в меню навигации на интересующую для Вас вкладку для более детального обзора информации. Буду признателен, если Вы оставите комментарий или напишите еллектронное письмо об этой призентации. Любая критика или похвала, новая идея или исправление ошибок, помогут мне улучшить сервис и собрать необходимые данные для работы в дальнейшем. Ваше мнение - это мой новый опыт разработчика!`,
        `Благодарю Вас, что посетили мою страничку!`
      ],
      textEng: [
        `I am glad to welcome you to my personal site! It is intended for the presentation of information about me and what I do.`,
        `For a more comfortable stay on the site, in the "settings" menu you can change the additional color of the theme, or turn on the audio player. The site supports 2 languages, which significantly expands the audience of guests and makes it possible to better understand the information and minimize the level of the language barrier.`,
        `The site was designed easy and understandable. Go to the navigation menu for the tab you are interested in for a more detailed overview of the information. I would be grateful if you leave a comment or write an e-mail about this presentation. Any criticism or praise, a new idea or bug fixes will help me improve the service and collect the necessary data to work in the future. Your opinion is my new developer experience!`,
        `Thank you for visiting my page!`
      ]
    }
  },
  mixins: [textMix]
}
</script>

<style scoped>
.content__text{
  padding: 10px;
}
</style>
