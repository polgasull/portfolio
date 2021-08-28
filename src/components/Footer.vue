<template>
  <div class="footer">
    <footer class="footer">
      <b-container>
        <b-row>
          <b-col lg="4" class="mb-5">
            <p class="lead mb-0">
                pol@wearehiring.io
                <br>
                +34 660825979
            </p>
          </b-col>
          <b-col lg="8" class="mb-5 text-right">
            <a class="btn btn-social" href="https://www.linkedin.com/in/pol-gasull-navarro/" target="_blank">
              <img src="../assets/images/linkedin.svg" alt="linkedin" width="40" height="40">
            </a>
            <a class="btn btn-social" href="https://github.com/polgasull" target="_blank">
              <img src="../assets/images/github.svg" alt="github" width="40" height="40">
            </a>
            <a class="btn btn-social" href="https://twitter.com/pgasulln" target="_blank">
              <img src="../assets/images/twitter.svg" alt="twitter" width="40" height="40">
            </a>
          </b-col>
        </b-row>
      </b-container>
      <b-container class="copyright">
        Copyright © {{ currentWebsite }} {{ currentYear }}
      </b-container>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      currentWebsite: "polgasull.com",
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
  .footer {
    background: #000000;
    color: white;
    padding-top: 2rem;
    padding-bottom: .5rem;
    background-color: #2c3e50;
  }

  .btn-social:hover {
    opacity: .9;
  }

  .copyright {
    font-size: 14px;
  }
  
</style>