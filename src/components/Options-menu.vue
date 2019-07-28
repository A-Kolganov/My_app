<template>
  <div :style="{'border': '5px'+' '+ themeColor + ' '+ 'solid'}" class="options-box">
     <form  class="options-box__form">
         <section class="section section--theme">
             <h2 class="section__title">{{lang === 'ru' ? titleTheme.ru : titleTheme.eng}}</h2>
             <label for="colorTheme">{{lang === 'ru'? titleTheme.hexTitle.ru : titleTheme.hexTitle.eng}}</label>
             <input v-on:keypress.enter.prevent v-model.prevent="themeColor" type="text" id="colorTheme" name="themeColor" value="#f0f050">
         </section>
         <section class="section section--lang">
             <h2 class="section__title">{{lang === 'ru' ? titleLang.ru : titleLang.eng}}</h2>
             <input v-model="choosedLang" type="radio" id="langRu" name="language" value="ru">
             <label for="langRu">{{lang === 'ru'? titleLang.radioBtn.ruRu : titleLang.radioBtn.engRu}}</label>
             <input v-model="choosedLang" type="radio" id="langEng" name="language" value="eng">
             <label for="langEng">{{lang === 'ru'? titleLang.radioBtn.ruEng : titleLang.radioBtn.engEng}}</label>
         </section>
         <section class="section section--audio">
             <h2 class="section__title">{{lang === 'ru' ? titleMusic.ru : titleMusic.eng}}</h2>
         </section>
     </form>

  </div>
</template>

<script>

export default {
  data () {
    return {
      lang: 'ru',
      choosedLang: '',
      themeColor: '#cc00cc',
      titleTheme: {
        ru: 'Сменить цвет темы:',
        eng: 'Change theme color:',
        hexTitle:{
          ru:'Введите HEX код цвета',
          eng:'Enter a hex color code'
        }
      },
      titleLang: {
        ru: 'Выберите язык:',
        eng: 'Choose language:',
        radioBtn:{
          ruRu: 'Русский',
          ruEng: 'Английский',
          engRu: 'Russian',
          engEng: 'English'
        }
      },
      titleMusic: {
        ru: 'Аудио плеер',
        eng: 'Audio player'
      } 

    }
  },
  watch:{
    choosedLang: function(val){
      if(this.choosedLang === 'ru'){
        return this.lang = 'ru';
      } else {
        return this.lang = 'eng';
      }
    },
  }
}
</script>

<style scoped>
.options-box{
  position:absolute;
  width:300px;
  height: auto;
  top: 10px;
  border: 3px  solid;
  left: 50%;
  transform: translateX(-50%);
  border-radius:25px;
  box-sizing:border-box;
  padding:10px;
}
.options-box__form{

}
.section{
  padding:10px;
}
.section--lang{
  border-top: 2px solid #000;
  border-bottom: 2px solid #000;
}
.section__title{
  font-family: "Alice";
  font-size: 25px;
  text-align: center;
  padding: 10px;
}
</style>
