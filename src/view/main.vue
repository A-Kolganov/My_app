<template>
    <main class="main-content" :style="{'border-top': '10px'+' '+ themeColor + ' '+ 'solid','border-bottom': '10px'+' '+ themeColor + ' '+ 'solid'}
    ">
        <div class="main-content__img-wrapper" :style="{'border': '5px'+' '+ themeColor + ' '+ 'solid','background-color': themeColor}">

        <img src="../assets/img/foto.jpg" class="main-content__img-wrapper__img" alt="That's me!">

        </div>
        <app-nav :themeColor="themeColor" :lang="lang"></app-nav>
    </main>
</template>

<script>
export default {
  props: ['themeColor', 'lang'],
  data () {
    return {

    }
  }
}

</script>

<style scoped>

.main-content{
    display: block;
    position: relative;
    border-radius: 50px;
    width:100%;
    margin:200px auto 0;
    height: auto;
    background-color:#fff;
                transition-property: all;
        transition-duration: 1s;
        transition-timing-function: linear;
}
.main-content__img-wrapper{
    position: absolute;
    width: 150px;
    height: 150px;
        top: -125px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 20px;
                transition-property: all;
        transition-duration: 1s;
        transition-timing-function: linear;
}
.main-content__img-wrapper__img{
    width:150px;
    height:150px;
    border-radius: 20px;
    box-sizing: border-box;
}
@media(min-width: 768px){
    .main-content__img-wrapper{
            top: -100px;
            left: 15%;
    }
}
</style>
