<template>
  <article class="content">
      <h2 class="content__title">{{lang === 'ru' ? title.ru : title.eng}}</h2>
      <section class="content__text" v-bind:key="index" v-for="(p, index) of text">
        {{p}}
      </section>
  </article>

</template>

<script>
import textMix from './../mixins/textMixin'

export default {
  props: ['lang', 'themeColor'],
  data () {
    return {
      title: {
        ru: 'Добро пожаловать!',
        eng: 'Welcome !'
      },
      text: [
        `Lorem hic est quibusdam asperiores maxime eaque doloremque illo beatae fugit quasi omnis fuga incidunt. Molestiae dolore, culpa, nihil asperiores rem ut placeat, quisquam cumque ea tenetur architecto dolorum? Ipsa nam optio asperiores possimus. Nemo quibusdam voluptatibus qui voluptas optio maiores quasi modi, esse, velit perferendis voluptatem magni similique totam pariatur. Quas autem eligendi doloribus commodi excepturi. Voluptates omnis sit nobis minus ipsa ducimus vero autem quisquam quaerat explicabo excepturi incidunt aliquid doloremque non animi quia, ad enim optio voluptatem iusto harum asperiores cum maiores aut. Ipsam veritatis debitis cum molestiae nam tempora fuga accusantium quam recusandae incidunt? Maxime, vero officiis inventore sed eligendi nobis rerum suscipit aliquam dolorum neque, soluta laboriosam nam qui placeat autem laborum! Optio quisquam numquam necessitatibus eveniet similique nesciunt dicta! Molestiae voluptatibus tempore nihil dignissimos deleniti inventore atque libero temporibus, eaque id placeat alias amet? `,
        `Ldaf ipsum dolor sit amet consectetur adipisicing elit.`,
        `Quasi expedita necessitatibus dignissimos, ad enim quidem ratione asperiores?`,
        `Repellendus, impedit sequi. Natus atque esse autem placeat animi, reprehenderit corrupti expedita dolores ipsum.`,
        `Facere quo enim molestias tenetur, unde officia quos rerum nisi natus error sunt nesciunt ullam voluptate ipsum aliquid dignissimos ratione tempore maxime? Fuga ab saepe possimus quo incidunt inventore.`,
        `Beatae fugit quasi omnis fuga incidunt. Molestiae dolore, culpa, nihil asperiores rem ut placeat, quisquam cumque ea tenetur architecto dolorum? Ipsa nam optio asperiores possimus. Nemo quibusdam voluptatibus qui voluptas optio maiores quasi modi, esse, velit perferendis voluptatem magni similique totam pariatur. Quas autem eligendi doloribus commodi excepturi. Voluptates omnis sit nobis minus ipsa ducimus vero autem quisquam quaerat explicabo excepturi incidunt aliquid doloremque non animi quia, ad enim optio voluptatem iusto harum asperiores cum maiores aut. Ipsam veritatis debitis cum molestiae nam tempora fuga accusantium quam recusandae incidunt? Maxime, vero officiis inventore sed eligendi nobis rerum suscipit aliquam dolorum neque, soluta laboriosam nam qui placeat autem laborum! Optio quisquam numquam necessitatibus eveniet similique nesciunt dicta! Molestiae voluptatibus tempore nihil`
      ]
    }
  },
  mixins: [textMix]
}
</script>

<style scoped>

</style>
