<template>
  <div id="home">
    <Navigation />
    <video autoplay muted loop id="myVideo">
      <source src="../assets/images/header_computer_video.mp4" type="video/mp4">
    </video>
    <header class="header">
      <b-container>
        <h1 class="heading">
          Desarrollo de páginas web a medida
        </h1>
        <h2 class="sub-heading mb-3">
          Impulsa tu negocio o marca personal
        </h2>
        <div class="sub-heading">
          <b-button variant="primary" href="#contact"> ¿Hablamos? </b-button>
        </div>
      </b-container>
    </header>
  </div>
</template>

<script>
import Navigation from './Navigation.vue';

export default {
  name: 'Header',
  components: {
    Navigation
  }
}
</script>

<style lang="scss" scoped>
  #myVideo {
    width: 100%;
  }

  .header {
    text-align: right;
    position: absolute;
    top: 20%;
    right: 0;
    width: 100%;
  }

  .heading {
    font-weight: bold;
    font-size: 3rem;
  }

  .sub-heading {
    font-size: 1.5rem;
    font-weight: 400;
  }

  @media (max-width: 778px) {
    .header {
      display: none;
    }
  }

  @media (min-width: 1399px) {
    .header {
      top: 30%;
    }
  }
</style>

