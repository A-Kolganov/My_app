<template>
  <div :style="{'border': '5px'+' '+ themeColor + ' '+ 'solid'}" class="options-box">
     <form  class="options-box__form" >
         <section class="section section--theme">
             <h2 class="section__title">{{lang === 'ru' ? titleTheme.ru : titleTheme.eng}}</h2>
             <label class="section__inpLabel" for="colorTheme">{{lang === 'ru'? titleTheme.hexTitle.ru : titleTheme.hexTitle.eng}}</label>
             <div class="input-cover">
             <input class="section__inpLabel__input-color" v-on:keypress.enter.prevent v-model="themeColor" type="text" id="colorTheme" name="themeColor">
             <div class="input-example" :style="{'background-color': themeColor }">
               
             </div>
         </div>
         </section>
         <section class="section section--lang">
             <h2 class="section__title">{{lang === 'ru' ? titleLang.ru : titleLang.eng}}</h2>
             <input v-model="choosedLang" type="radio" id="langRu" name="language" value="ru" checked>
             <label class="section__inpLabel" for="langRu">{{lang === 'ru'? titleLang.radioBtn.ruRu : titleLang.radioBtn.engRu}}</label>
             <input v-model="choosedLang" type="radio" id="langEng" name="language" value="eng">
             <label class="section__inpLabel" for="langEng">{{lang === 'ru'? titleLang.radioBtn.ruEng : titleLang.radioBtn.engEng}}</label>
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
      choosedLang: 'ru',
      themeColor: '#cc00cc',
      titleTheme: {
        ru: 'Сменить цвет темы:',
        eng: 'Change theme color:',
        hexTitle: {
          ru: 'Введите HEX код цвета',
          eng: 'Enter a hex color code'
        }
      },
      titleLang: {
        ru: 'Выберите язык:',
        eng: 'Choose language:',
        radioBtn: {
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
  watch: {
    choosedLang: function (val) {
      if (this.choosedLang === 'ru') {
        this.lang = 'ru'
        this.$emit('lang', this.lang)
      } else {
        this.lang = 'eng'
        this.$emit('lang', this.lang)
      }
    },
    themeColor: function (val) {
      this.$emit('theme', this.themeColor)
    }
  }
}
</script>

<style scoped>
.options-box{
  position:absolute;
  background-color:#fff;
  width:300px;
  height: auto;
  top: 10px;
  border: 3px  solid;
  left: 50%;
  transform: translateX(-50%);
  border-radius:25px;
  box-sizing:border-box;
  padding:10px;
      z-index: 25;
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
  padding: 5px;
}
.section__inpLabel{
  font-family: "Rubik";
  font-size: 15px;
  text-align: left;
  padding: 3px;
  margin: 5px;
}
.section__inpLabel__input-color{
    margin: 10px 0;
    padding: 7px;
    font-family: "Rubik";
    font-size: 15px;
    box-sizing: border-box;
    border-radius: 15px;
    display: block;
    outline: none;
}
.input-cover{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.input-example{
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #000;
}
</style>
