<template>
    <header class="header">
        <app-options @lang="changeLang">
      
      </app-options>
    </header>
        
    
</template>
<script>
import optMenu from './../components/Options-menu';
    export default {
        data () {
            return {
                lang: 'ru',
    }
  },
    methods: {
        changeLang: function(data){
            this.lang = data;
            this.$emit('lang', this.lang);
        }
    },
    components: {
        optMenu
        }
}
</script>
<style scope>
    .header{
        width:100%;
        background-color: #000000;
        height: 40px;
    }
</style>