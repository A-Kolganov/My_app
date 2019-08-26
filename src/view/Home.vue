<template>
  <article class="content">
      <h2 class="content__title">{{lang === 'ru' ? title.ru : title.eng}}</h2>
      <section class="content__text" v-bind:key="index" v-for="(p, index) of text">
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
      text: [
        `Рад приветствовать Вас на моём личном сайте! Здесь Вы сможете найти немного информации обо мне и о том что я делаю - мои идеи и мои работы. `,
        `Для удобства вверху сайта предоставленно небольшое меню. Нажимайте на кнопку и в отдельном окне Вы можете настроить цвет темы для своего комфортна, выбрать язык и включить музыку для более комфорта прибывания на сайте. Ниже есть навигация по сайту, выбирайте интересующую Вас вкладку для более конкретной информации. Так же, Вы можете отпрвить свой комментарий на вкладке "Контакты" . Буду рад прочесть Ваше мнение, идеи или получить критику. `,
        
      ]
    }
  },
  mixins: [textMix]
}
</script>

<style scoped>

</style>
