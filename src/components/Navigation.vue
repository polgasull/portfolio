<template>
  <div>
    <b-navbar type="light" variant="faded" :class="{'nav-bg': scrollPosition > 100 }">
      <b-container>
        <b-navbar-brand tag="h1" class="mb-0">polgasull</b-navbar-brand>
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
</style>
