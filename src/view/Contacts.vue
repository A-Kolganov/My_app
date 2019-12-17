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

      <div class="comment-box">
        <h3 class="comment-box__title">{{lang === 'ru' ? `Оставьте отзыв` : `Left feedback`}}</h3>
        <div class="comment-box__input-box">
             <input class="comment-box__input-box__input comment-box__input-box__input--name"  v-model="inpName" >
             <input class="comment-box__input-box__input comment-box__input-box__input--e-mail"   v-model="inpEmail">
             <textarea class="comment-box__input-box__input comment-box__input-box__input--comment"   v-model="inpCom">Comment</textarea>
             <button class="comment-box__input-box__submit-btn" type="submit" :style="{'color': themeColor }" v-on:click="setValue">Submit</button>
                 <button class="comment-box__input-box__submit-btn" type="submit" :style="{'color': themeColor }" v-on:click="getValue">Get</button>
            <!--  <input v-model="" type="" id="" name="" value=""> -->
            <!--  <input v-model="" type="" id="" name="" value="" > -->
        </div>
        <div  class="comment-box__output-box">
          <ul class="comment-box__output-box__list">
            
          </ul>
        </div>
      </div>

      <div class=" map-wrapper">
        <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20334.57867266711!2d30.35684761415068!3d50.42578174178385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cb905c71b475%3A0x5594a8c68e2d4d9d!2z0JHQvtGA0YnQsNCz0L7QstC60LAsINCa0LjQtdCyLCAwMjAwMA!5e0!3m2!1sru!2sua!4v1575292982400!5m2!1sru!2sua" frameborder="0" style="border:0;" allowfullscreen=""></iframe>

      </div>
  </div>

</template>

<script>
import textMix from './../mixins/textMixin'
import * as js from '../main.js'

export default {
  props: ['lang', 'themeColor', 'db'],
  data () {
    return {
      title: {
        ru: 'Мои контакты',
        eng: 'My contacts'
      },
      text: {
        ru: ['Социальные сети (активные ссылки)', 'Мессенджеры', 'Почта и телефон'],
        eng: ['Social networks active links', 'Messengers', 'E-mail and telephone number']
      },
      inpName: 'Name*',
      inpEmail: 'Email*',
      inpCom: 'Comment*',
      

    }
  },
  beforeCreate() {
    getValue();
  },
  methods: {
    setValue: function () {
      var citiesRef = js.db.collection("feedback");
        citiesRef.doc().set({
        name: this.inpName, 
        eMail: this.inpEmail, 
        comment: this.inpCom
      })} ,

        getValue: function () {
          const list= document.querySelector(".comment-box__output-box__list");
      js.db.collection("feedback").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc)  {
       
        list.insertAdjacentHTML("afterBegin", "<li v-bind:class='comment-box__output-box__list__item' ><p v-bind:class='comment-box__output-box__list__item__name'>"+'Name: '+ doc.data().name +"</p><p class='comment-box__output-box__list__item__comment'>"+'Comment: '+doc.data().comment+"</p> </li>")
        console.log( doc.data());
    // const li = document.createElement('li')
        // li.classList.add("comment-box__output-box__list__item")
        // const pName = document.createElement('p')
        // pName.classList.add("comment-box__output-box__list__item__name")
        // const pComment = document.createElement('p')
        // pComment.classList.add("comment-box__output-box__list__item__comment")
        // pName.textContent = doc.data().name
        // pComment.textContent = doc.data().comment
        // li.appendChild(pComment)
        // li.appendChild(pName)
        // list.appendChild(li)
       
    });
});
 
      },

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
.list-title,.comment-box__title{
  font-family: 'Rubik';
  font-size: 18px;
  text-align: center;
  padding: 10px;
}
.url-list_item__link{
  cursor: pointer;
}
.url-list_item:hover {
  transform: scale(1.2);
  background-color: #fff;
  border-radius:10px;
}
.map{
  min-width: 200px;
  min-height: 200px;
  width: 100%;
  height: 100%;
  max-width: 500px;
  max-height: 500px;
    border-radius: 10px;
    border: #fff 5px solid;
    box-sizing: border-box;
}
.map-wrapper{
  display: block;
  margin: 50px auto;
    min-width: 200px;
  min-height: 200px;
  width: 100%;
  height: 100%;
  max-width: 500px;
  max-height: 500px;

}
.comment-box__input-box__input{
  width: 80%;
  min-width: 150px;
  max-width: 300px;
  height: auto;
  display: block;
  margin: 10px auto 30px;
  padding: 5px;
  border-radius: 10px;
  font-family: sans-serif;
  font-size: 15px;
  outline: none;
    border: 1px #000 solid;
    cursor: pointer;
    text-align: left;
}
.comment-box__input-box__input--comment{
  min-height: 100px;
}
.comment-box__input-box__submit-btn{
    width: 80%;
  min-width: 150px;
  max-width: 300px;
  height: auto;
    display: block;
  margin: 10px auto 30px;
  padding: 5px;
   border-radius: 10px;
   cursor: pointer;
   font-weight: bolder;
   font-size:20px;
}
.comment-box__output-box__list,.comment-box__output-box__list__item__name{
  width: 100%;
  height: auto;
  padding: 10px;
  background-color: #888;
  font-size: 15px;
  border-radius: 10px;
  display:block;
  box-sizing:border-box;
}

</style>
