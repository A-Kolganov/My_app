<template>
  <div :style="{'border': '5px'+' '+ themeColor + ' '+ 'solid'}" class="options-box">
     <form  class="options-box__form">
         <section class="section section--theme">
             <h2 class="section__title">{{lang === 'ru' ? titleTheme.ru : titleTheme.eng}}</h2>
             <label class="section__inpLabel" for="colorTheme">{{lang === 'ru'? titleTheme.hexTitle.ru : titleTheme.hexTitle.eng}}</label>
             <input class="section__inpLabel__input-color" v-on:keypress.enter.prevent v-model.prevent="themeColor" type="text" id="colorTheme" name="themeColor" value="#f0f050">
         </section>
         <section class="section section--lang">
             <h2 class="section__title">{{lang === 'ru' ? titleLang.ru : titleLang.eng}}</h2>
             <input v-model="choosedLang" type="radio" id="langRu" name="language" value="ru" checked="checked">
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
        this.lang = 'ru';
        this.$emit('lang', this.lang);
       
        return
      } else {
         this.lang = 'eng';
        this.$emit('lang', this.lang);
       
        return
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
    width: 100%;
    box-sizing: border-box;
    border-radius: 15px;
    display: block;
    outline: none;
}
</style>
