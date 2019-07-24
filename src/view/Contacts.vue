<template>
  <div>
      <h2 class="content__title">{{title}}</h2>

  </div>

</template>

<script>
import textMix from './../mixins/textMixin'
export default {
  data () {
    return {
      title: `Мои контакты !`
    }
  },
  mixins: [textMix]
}
</script>

<style scoped>

</style>
