<template>
    <div class="page">
      <nav class="page__nav">
        <ul class="page__nav__list">
          <li class="page__nav__list__item">
            <router-link tag="li" class="page__nav__list__item" active-class="active" :to="'/Home'"><a class="page__nav__list__item__link link">Главная</a> </router-link>
          </li>
          <li class="page__nav__list__item ">
            <router-link tag="li" class="page__nav__list__item" active-class="active" :to="'/About'"><a class="page__nav__list__item__link link">Коротко обо мне</a></router-link>
          </li>
          <li class="page__nav__list__item">
            <router-link tag="li" class="page__nav__list__item" active-class="active" :to="'/Skills'"><a class="page__nav__list__item__link link">Резюме</a></router-link>
          </li>
          <li class="page__nav__list__item">
            <router-link tag="li" class="page__nav__list__item" active-class="active" :to="'/Gallery'"><a class="page__nav__list__item__link link">Примеры работ</a></router-link>
          </li>
          <li class="page__nav__list__item">
            <router-link tag="li" class="page__nav__list__item" active-class="active" :to="'/Contacts'"><a class="page__nav__list__item__link link">Контакты</a></router-link>
          </li>
        </ul>
      </nav>
    </div>
</template>
<script>
import linkMix from './../mixins/activeLinkMixin'

export default {
  data () {
    return {
      title: `hello world!`
    }
  },
  mixins: [linkMix]
}
</script>

<style scoped>
.page{
  position: relative;
  top: -50px;
  border-top: 10px solid #cc00cc;
  background-color: #fff;
  border-radius: 50px;
  width:100%;
  height:100px;
}
.page__nav{
  width:85%;
  height:auto;
  display:block;
  margin: 100px auto 0;
  border: 5px solid #cc00cc;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  background-color: #333;
  max-height: 50px;
  box-sizing: border-box;
}
.page__nav__list{
  display:grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
}
.page__nav__list__item{
  width: 100%;
  display:block;
  cursor:pointer;
}
.page__nav__list__item__link{
  display: block;
  margin: 0 auto;
  font-size: 20px;
  text-align: center;
  line-height: 40px;
  color: #fff;
  text-decoration: none;
}
.page__nav__list__item__link:hover{
  color: #cc00cc;
}
.page__content{

}

</style>
