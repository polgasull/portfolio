<template>
  <div class="features" id="features">
    <b-container>
      <b-row class="mt-5">
        <b-col>
          <img src="@/assets/images/web_devices.svg" width="400" class="feature-img"/>
        </b-col>
        <b-col>
          <h2> Características </h2>
          <p>
            Diseños Responsive compatibles con todos los dispositivos
          </p>
          <p>
            Metodologías UX/UI
          </p>
          <p>
            Posicionamiento SEO
          </p>
          <p>
            Hosting y correo electrónico
          </p>
          <p>
            Trabajamos con Wordpress, Ruby on Rails, Javascript, PHP, Sass y HTML.
          </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'Features'
}
</script>

<style lang="scss" scoped>
  .features {
    background: #F8F9FA;
    padding-top: 10rem;
    padding-bottom: 10rem;
  }

  h2 {
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    .features {
      text-align: center;
    }

    .feature-img {
      width: 250px;
      margin-bottom: 4rem;
    }
  }
</style>