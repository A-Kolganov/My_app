<template>
  <div class="container">
    <div class="page-header">
      <div class="page-header__visual-effect">
        <img class="page-header__visual-effect__img" src="./../assets/img/foto.jpg" alt="that's me!">
        <h2 class="page-header__visual-effect__title">{{title}}</h2>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: `hello world!`
    }
  }
}
</script>

<style scoped>

.page-header {
  height: 250px;
  width: 100%;

}
.page-header__visual-effect{
  background:
  linear-gradient(40deg, #000000 0%, #2c2c2c 56%, #cc00cc 60%, #cc00cc 61%, #2b2b2b 65%, #1c1c1c 91%, #131313 100%);
  height:100%;
  width:100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr;
}
.page-header__visual-effect__img{
  width:200px;
  height:200px;
  display:block;
  box-sizing:border-box;
  position:relative;
  left:50%;
  top:50%;
  transform: translate(-50%,-25%);
  border:  5px solid #cc00cc;
  cursor: pointer;
  border-radius: 25px;
  z-index:10;
}
.page-header__visual-effect__title{
  display:block;
  width:100%;
  height:auto;
  font-family: 'Righteous', cursive ;
  font-weight: 700;
  color: #fff;
  font-size: 80px;
  text-transform: uppercase;
  text-align: center;
  line-height: 200px;
}

</style>
