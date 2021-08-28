<template>
  <div>
    <b-card
      :title="title"
      :img-src="require(`@/assets/images/${img}`)"
      img-alt="title"
      img-top
      tag="article"
      class="mb-2"
    >
      <b-card-text>
        {{ description }}
      </b-card-text>

      <b-button :href="url" variant="primary" target="_blank">Ver proyecto</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: String,
    description: String,
    img: String,
    url: String
  }
}
</script>

<style scoped>

</style>
