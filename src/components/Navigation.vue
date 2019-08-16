<template>
<div>
        <nav class="nav">
        <ul class="nav__list" :style="{'border': '5px'+' '+ themeColor + ' '+ 'solid', 'background-color': themeColor}">
          <li class="nav__list__item nav__list__item--grid-home">
            <router-link tag="li" class="nav__list__item--router"  active-class="active" :to="'/Home'"><a  class="nav__list__item__link link" >{{lang === 'ru' ? 'Главная' : 'Home'}}</a> </router-link>
          </li>
          <li class="nav__list__item nav__list__item--grid-bout">
            <router-link tag="li" class="nav__list__item--router" active-class="active" :to="'/About'"><a class="nav__list__item__link link">{{lang === 'ru' ? 'Коротко обо мне' : 'About Me'}}</a></router-link>
          </li>
          <li class="nav__list__item nav__list__item--grid-skills">
                     <router-link tag="li" class="nav__list__item--router" active-class="active" :to="'/Gallery'"><a class="nav__list__item__link link">{{lang === 'ru' ? 'Примеры работ' : 'My work'}}</a></router-link>

          </li>
          <li class="nav__list__item nav__list__item--grid-gallary">
              <router-link tag="li" class="nav__list__item--router" active-class="active" :to="'/Skills'"><a class="nav__list__item__link link">{{lang === 'ru' ? 'Резюме' : 'My skills'}}</a></router-link>
          </li>
          <li class="nav__list__item nav__list__item--grid-contacts">
            <router-link tag="li" class="nav__list__item--router" active-class="active" :to="'/Contacts'"><a class="nav__list__item__link link">{{lang === 'ru' ? 'Контакты' : 'My contacts'}}</a></router-link>
          </li>
        </ul>
      </nav>
      <router-view class="view" v-bind:themeColor="themeColor" v-bind:lang="lang"></router-view>
</div>

</template>
<script>

export default {
  props: ['themeColor', 'lang'],
  data () {
    return {

    }
  },
  methods: {

  },
  computed: {

  }
}
</script>

<style scoped>
.nav{
  width:90%;
  max-width: 290px;
  height:auto;
  display:block;
  margin: 100px auto 0;
}
.nav__list{
  display: grid;
    grid-template-columns: 1fr 1fr ;
  grid-template-rows: 35px 54px 35px;
  border: #cc00cc 5px solid;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
                  transition-property: all;
        transition-duration: 1s;
        transition-timing-function: linear;

}
.nav__list__item--grid-home{
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  text-align: center;
  align-self: center;
}
.nav__list__item{
  align-self: center;
  height: 100%;
}
.nav__list__item--router{
  height:100%;
}
.nav__list__item__link{
  color: #fff;
  font-size:20px;
  text-decoration:none;
  text-align: center;
  display:block;
  padding: 7px;
  border-radius:20px;
  box-sizing:border-box;
  background-color: #2c2c2c;
  border-radius: 0;
  cursor:pointer;
  font-family: "Alice", sans-serif;
  height:100%;
}
.nav__list__item--grid-home>.nav__list__item--router>.nav__list__item__link{
      border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
.nav__list__item__link:hover{
  border-radius:0;
    font-weight: bolder;
    text-shadow: 1px 1px #fff;
}
.nav__list__item--grid-home>.nav__list__item--router>.nav__list__item__link:hover{
    border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
.active>a{
  background-color:  transparent;
  color: #000000;
  border-radius: 0;
}
.active>a:hover{
  text-shadow: 1px 1px #000;
}
.nav__list__item--grid-home>.active>a{
    border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
.view{
  width:90%;
  height:auto;
  display:block;
  margin: 20px auto 50px;
  padding: 15px;
  background-color: #eee;
    border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-sizing:border-box;
}
@media(min-width:768px){
  .nav{
  width:90%;
  max-width: none;

}
  .nav__list{
     grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  }
  .nav__list__item--grid-home{
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  text-align: center;
  align-self: center;
  border-top-right-radius: 0
}
.nav__list__item--grid-contacts,.nav__list__item--grid-contacts>.nav__list__item--router>.link{
  border-top-right-radius: 25px;
}
.nav__list__item--grid-home>.nav__list__item--router>.nav__list__item__link{
  border-top-right-radius: 0;
}
.nav__list__item--grid-home>.nav__list__item--router>.nav__list__item__link:hover{
  border-top-right-radius: 0;
}
}

</style>
