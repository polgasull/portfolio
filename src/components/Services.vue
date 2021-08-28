<template>
  <div class="services text-center" id="services">
    <b-container>
      <h2> Servicios </h2>
      <b-row class="mt-5">
        <b-col>
          <img src="@/assets/images/web_landing.svg" width="200" class="service-img" />
          <div class="mt-5">
            <h4>Web Profesional</h4>
            <p>
              Mejora tu presencia online.
            </p>
          </div>
        </b-col>
        <b-col>
          <img src="@/assets/images/web_professional.svg" width="200" class="service-img" />
          <div class="mt-5">
            <h4>Web E-Commerce</h4>
            <p> 
              Impulsa, expande y mejora las ventas de tu negocio.
            </p>          
          </div>
        </b-col>
        <b-col>
          <img src="@/assets/images/web_custom.svg" width="200" class="service-img"  />
          <div class="mt-5">
            <h4>Web Customizada</h4>
            <p> 
              Para aquellos que busquen la máxima diferenciación. 
            </p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Servies'
}
</script>

<style lang="scss" scoped>
  .services {
    padding-top: 10rem;
    padding-bottom: 10rem;
  }

  @media (max-width: 360px) {
    .service-img {
      width: 150px;
    }

    .service-img + div {
      margin-bottom: 4rem;
    }
  }
</style>
