<template>
  <div class="container">
    <div class="footer-header">
      <div class="page-footer__visual-effect">
      </div>

    </div>
  </div>
</template>

<script>

</script>

<style scoped>

.footer-header {
  height: 150px;
  width: 100%;
  position:relative;
  top: 0px;
  z-index: -5;
    background-color: #000;
}
.page-footer__visual-effect{
    position: absolute;
    top: -50px;
  background:
  linear-gradient(320deg, #000000 0%, #2c2c2c 56%, #cc00cc 60%, #cc00cc 61%, #2b2b2b 65%, #1c1c1c 91%, #131313 100%);
  height:100%;
  width:100%;
}

</style>
