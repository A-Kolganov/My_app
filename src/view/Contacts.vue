<template>
  <div>
      <h2 class="content__title">{{lang === 'ru' ? title.ru : title.eng}}</h2>
      <h3 class="list-title">{{lang === 'ru' ? text.ru[0] : text.eng[0]}}</h3>
      <ul class="url-list">
        <li class="url-list_item">
          <a class="url-list_item__link" href="https://www.facebook.com/tema.crow" target="_blank">
          <img class="url-list_item__link__img" src="./../../static/icons/Facebook-icon-300x300.png" alt="fb profile">
          </a>
        </li>
        <li class="url-list_item">
          <a class="url-list_item__link" href="https://www.instagram.com/tema_kolganov/" target="_blank">
          <img class="url-list_item__link__img" src="./../../static/icons/instagram-png-instagram-png-logo-1455.png" alt="insta profile">
          </a>
        </li>
        <li class="url-list_item">
          <a class="url-list_item__link" href="https://github.com/A-Kolganov" target="_blank">
          <img class="url-list_item__link__img" src="./../../static/icons/github-512.png" alt="">
          </a>
        </li>
      </ul>
      <h3 class="list-title">{{lang === 'ru' ? text.ru[1] : text.eng[1]}}</h3>
      <ul class="url-list">
        <li class="url-list_item">
          <img class="url-list_item__link__img" src="./../../static/icons/Skype-Icon.png" alt="skype">
          <p>tema.crow</p>
        </li>
        <li class="url-list_item">
          <p></p>
          <img class="url-list_item__link__img" src="./../../static/icons/Viber-App-Logo.png" alt="viber">
          <p>+380632441032</p>
        </li>
        <li class="url-list_item">
         <p></p>
          <img class="url-list_item__link__img" src="./../../static/icons/telegram-icon-7.png" alt="telegram">
          <p>+380632441032</p>
        </li>
      </ul>
      <h3 class="list-title">{{lang === 'ru' ? text.ru[2] : text.eng[2]}}</h3>
      <ul class="url-list">
        <li class="url-list_item">
          <img class="url-list_item__link__img" src="./../../static/icons/mail-icon-logo-template-icono-de-gmail-11562954424h5fw2mradf.png" alt="skype">
          <p>tema.crow@gmail.com</p>
        </li>
        <li class="url-list_item">
          <p></p>
          <img class="url-list_item__link__img" src="./../../static/icons/lifecell-1.png" alt="viber">
          <p>+380632441032</p>
        </li>
      </ul>
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
      },
      text: {
        ru: ['Социальные сети','Мессенджеры','Почта и телефон'],
        eng: ['Social networks','Messengers','E-mail and telephone number']
      }

    }
  },
  mixins: [textMix]
}
</script>

<style scoped>
.url-list{
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 800px;
  padding: 10px 5px;
  margin: 0 auto;
}
.url-list_item{
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  align-items: center;    
  word-break: break-word;
  text-align:center;
}
.url-list_item__link__img{
  width: 50px;
  height: 50px;
  display: block;
  margin: 10px;
}
.list-title{
  font-family: 'Rubik';
  font-size: 18px;
  text-align: center;
  padding: 10;
}
.url-list_item__link{
  cursor: pointer;
}
.url-list_item:hover {
  transform: scale(1.2);
  background-color: #fff;
  border-radius:10px;
}
</style>
