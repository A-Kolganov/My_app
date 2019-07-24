<template>
  <div class="content">
    <h2 class="content__title">{{title}}</h2>
      <div class="content__wrapper">
        <img class="content__img grid-item-one" :src="articles[0].url" :alt="articles[0].alt" >
        <p class="content__text grid-item-two">{{articles[0].message}}</p>
        <p class="content__text grid-item-three">{{articles[1].message}}</p>
        <img class="content__img grid-item-four" :src="articles[1].url" :alt="articles[1].alt" >
        <img class="content__img grid-item-five" :src="articles[2].url" :alt="articles[2].alt" >
        <p class="content__text grid-item-six">{{articles[2].message}}</p>
      </div>
  </div>
</template>

<script>
import textMix from './../mixins/textMixin'

export default {
  data () {
    return {
      title: `Приятно познакомиться!`,
      articles: [{
        url: './static/img/foto.jpg', alt: 'me', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nisi ullam, voluptatem laboriosam ipsum dolorem laudantium voluptates corrupti illo cum.'},
      {
        url: './static/img/foto2.jpg', alt: 'me', message: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure enim unde tenetur iste minima animi maiores vero quasi eligendi explicabo. Saepe minima laborum ut, ipsa cumque ab incidunt eius cum. Ut consequuntur deleniti incidunt. Praesentium?`},
      {
        url: './static/img/foto3.jpg', alt: 'me', message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus officia illo molestiae laudantium tempore, nemo esse distinctio explicabo, nihil ipsam eligendi reiciendis libero. Unde nisi voluptates ex illo distinctio, quos libero dolore ullam. Magni porro ea, expedita autem, maxime culpa accusamus, minima a amet perferendis minus dolorum commodi asperiores et.`}
      ]
    }
  },
  mixins: [textMix]
}
</script>

<style scoped>
.content__wrapper{
  display: grid;
  grid-template-columns: 250px 1fr 250px;
  grid-template-rows: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  margin-top: 30px;
}
.content__img{
  width:200px;
  height:200px;
  border-radius: 25px;
}
.content__text{
  display:block;

  padding: 25px 10px;
}
.grid-item-one{
  grid-column: 1;
  grid-row: 1 / 2;
}
.grid-item-two{
  grid-column: 2 / 4;
  grid-row: 1 / 2;
}
.grid-item-three{
  grid-column: 1 / 3;
  grid-row: 2 / 3;
}
.grid-item-four{
  grid-column: 3 / 4;
  grid-row: 2 / 3;
}
.grid-item-five{
  grid-column: 1;
  grid-row: 3 / 4;
}
.grid-item-six{
  grid-column: 2 / 4;
  grid-row: 3 / 4;
}
</style>
