<template>
    <div class="wrapper">
            <div v-on:click="openOptionsMenu" class="options-btn-box">
        <div v-if='!optionsBtn' class="options-btn-box__btn"> 
            <span v-if='!optionsBtn' class="options-btn-box__btn__line"></span>
            <span v-else class="options-btn-box__btn__line--open"></span>   
            <span class="options-btn-box__btn__title" v-if="lang ==='ru'"> Настройки</span>
                <span class="options-btn-box__btn__title" v-else> Options</span> 
        </div>
        <div v-else class="options-btn-box__btn--open">
            <span v-if='!optionsBtn' class="options-btn-box__btn__line"></span>
            <span v-else class="options-btn-box__btn__line--open"></span>   
            <span class="options-btn-box__btn__title--open" v-if="lang ==='ru'"> Настройки</span>
            <span class="options-btn-box__btn__title--open" v-else> Options</span> 
        </div>
    </div>
    <div class="options-box">
        <app-options-menu>
        </app-options-menu>
    </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                lang: 'ru',
                optionsBtn: false,
    }
  },
  methods: {
        openOptionsMenu: function(e){
            return this.optionsBtn = !this.optionsBtn;
        }
    },
}
</script>
<style scope>
    .options-btn-box{
    display: block;
    margin: 0px auto;
    width: 25%;
    text-align: center;
    }
    .options-btn-box__btn,.options-btn-box__btn--open{
    min-width: 50px;
    width: 70px;
    height: 30px;
    display: inline-block;
    margin: 5px auto 0;
    text-align: center;
    box-sizing: border-box;
    padding: 3px;
    cursor: pointer;
    }
    .options-btn-box__btn{
border: 3px solid #fff;
    border-bottom-right-radius: 50px 20px;
    border-bottom-left-radius: 50px 20px;
     background-color: #000;
    }
    .options-btn-box__btn--open{
    border-top-right-radius: 50px 20px;
    border-top-left-radius: 50px 20px;
    background-color: #fff;
    border: 3px solid #555;
    }
    .options-btn-box__btn__line,.options-btn-box__btn__line--open{
    display: block;
    text-align: center;
    width: 30px;
    height: 3px;
    margin: 8px auto;
    }
    .options-btn-box__btn__line{
    background-color: #fff;
    }
    .options-btn-box__btn__line--open{
    background-color:#000;
    }
    .options-btn-box__btn__line::before,.options-btn-box__btn__line::after,.options-btn-box__btn__line--open::before,.options-btn-box__btn__line--open::after{
        content: "";
        display:block;
        height: 3px;
        
        position:relative;
    }
    .options-btn-box__btn__line::before,.options-btn-box__btn__line::after{
        background-color: #fff;
    }
    .options-btn-box__btn__line--open::before,.options-btn-box__btn__line--open::after{
        background-color: #000;
    }
    .options-btn-box__btn__line::before{
        width: 50px;
        left: -10px;
        top: -7px;
    }
    .options-btn-box__btn__line::after{
        width: 15px;
        left: 8px;
        top: 4px;
    }
    .options-btn-box__btn__line--open::before{
        width: 15px;
        left: 8px;
        top: -7px;
    }
    .options-btn-box__btn__line--open::after{
        width: 50px;
        left: -10px;
        top: 4px;
    }
    
    .options-btn-box__btn__title,.options-btn-box__btn__title--open{
        
        display: none;
        font-size: 24px;
        font-weight: bold;
        margin: 0 8px;
    }
    .options-btn-box__btn__title{
        color: #fff;
    }
    .options-btn-box__btn__title--open{
        color: #000;
    }
    @media(min-width:1024px){
        .options-btn-box__btn,.options-btn-box__btn--open{
            width: 250px;
        }
        .options-btn-box__btn__line,.options-btn-box__btn__line--open{
            margin: 8px;
            display: inline-block;
        }
        .options-btn-box__btn__title,.options-btn-box__btn__title--open{
            display: inline-block;
        }
    }
</style>