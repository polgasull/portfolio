<template>
  <div class="projects" id="projects">
    <b-container>
      <h2 class="text-center"> Proyectos </h2>
      <b-row class="mt-5">
        <b-col v-for="project in projects" :key="project.id" lg="4">
          <Card
            :title="project.title" 
            :description="project.description"
            :img="project.img"
            :url="project.url" 
          />
        </b-col>
      </b-row>

    </b-container>
  </div>
</template>

<script>
import Card from './Card.vue'

export default {
  name: 'Projects',
  components: {
    Card
  },
  data() {
    return {
      projects: [
        { 
          id: 1,
          title: 'WeAreHiring', 
          description: 'Talent place para perfiles digitales con sistema de matching', 
          img: 'wearehiring-img.png',
          url: 'https://www.wearehiring.io/'
        },
        { 
          id: 2,
          title: 'Souldesign', 
          description: 'Tienda online de la marca Soul. Productos de moda handmade y slow fashion', 
          img: 'souldesign-img.png',
          url: 'https://www.souldesignbcn.com/'
        },
        { 
          id: 3,
          title: 'garatehausmann', 
          description: 'Diseño de interiores buscando el equilibrio perfecto entre concepto, espacio, diseño y experiencia', 
          img: 'garatehausmann-img.png',
          url: 'https://www.garatehausmann.com/'
        },
        { 
          id: 4,
          title: 'bicicarril', 
          description: 'Alquiler y rutas en bicicleta por la provincia de Girona', 
          img: 'bicicarril-capture.png',
          url: 'https://www.bicicarril.com/'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .projects {
    padding-top: 10rem;
    padding-bottom: 10rem;
  }
</style>
