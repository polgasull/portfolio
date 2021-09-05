<template>
  <div>
    <b-navbar type="light" variant="faded" :class="{'nav-bg': scrollPosition > 100 }">
      <b-container>
        <b-navbar-brand href="#home" class="mb-0 is-desktop"> Pol Gasull - Desarrollador web </b-navbar-brand>
        <b-navbar-brand href="#home" class="mb-0 is-mobile"> Pol Gasull </b-navbar-brand>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#projects">Proyectos</b-nav-item>
          <b-nav-item href="#contact">Contacto</b-nav-item>
        </b-navbar-nav>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      scrollPosition: null
    }
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  }
}

</script>

<style lang="scss" scoped>
  .navbar {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1000;
  }

  .nav-item .nav-link {
    color: black;
  } 

  .nav-bg {
    background-color: white;
  }

  @media (max-width: 778px) {
    .is-desktop {
      display: none;
    }

    .is-mobile {
      display: block;
    }
  }

  @media (min-width: 779px) {
    .is-desktop {
      display: block;
    }

    .is-mobile {
      display: none;
    }
  }
</style>
