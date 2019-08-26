<template>
  <div>
      <h2 class="content__title">{{lang === 'ru' ? title.ru : title.eng}}</h2>

  </div>

</template>

<script>
import textMix from './../mixins/textMixin'
export default {
  props: ['lang', 'themeColor'],
  data () {
    return {
      title: {
        ru: 'Мои контакты',
        eng: 'My contacts'
      }
    }
  },
  mixins: [textMix]
}
</script>

<style scoped>

</style>
