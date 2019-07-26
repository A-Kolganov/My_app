<template>
  <div class="options-box">
     <form v-if="lang === 'ru'" class="options-box__form">
         <section>
             <p>Цветовая тема</p>
         </section>
         <section>
             <p>Язык</p>
         </section>
         <section>
             <p>Плеер</p>
         </section>
     </form>
     <form v-else class="options-box__form">
         
     </form>
  </div>
</template>

<script>

export default {
  data () {
    return {
      lang: 'ru',

    }
  },
}
</script>

<style scoped>

</style>
