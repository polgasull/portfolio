<template>
  <div id="app">
    <Header />
    <Services />
    <Features />
    <Projects />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Services from './components/Services.vue'
import Features from './components/Features.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Services,
    Features,
    Projects,
    Contact,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

h2 {
  font-weight: bold;
  font-size: 2.2rem;
  margin-bottom: 5rem;
}

</style>
