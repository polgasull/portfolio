<template>
  <div class="contact" id="contact">
    <b-container>
      <h2 class="text-center">Contacto</h2>
      <div v-if="submitted === false">
        <form class="vue-form" @submit.prevent="sendContactMessage">
          <div class="mt-5">
            <div>
              <b-form-input 
                size="lg" 
                placeholder="Nombre"
                name="name"
                id="input-name"
                v-model="name"
                :state="isNameStateValid"
                aria-describedby="input-name-help input-name-feedback"
              />
              <b-form-invalid-feedback id="input-name-feedback" :state="isNameStateValid">
                Mínimo 3 carácteres 
              </b-form-invalid-feedback>
            </div>
            <div>
              <b-form-input 
                size="lg" 
                placeholder="Correo electrónico" 
                class="mt-4"
                type="email" 
                name="email" 
                id="input-email" 
                v-model="email.value"
                :state="isEmailStateValid"
                aria-describedby="input-email-help input-email-feedback"
              />
              <b-form-invalid-feedback id="input-email-feedback" :state="isEmailStateValid">
                Indica un correo electrónico válido
              </b-form-invalid-feedback>
            </div>
            <div>
              <b-form-input 
                type="tel"
                size="lg" 
                placeholder="Teléfono" 
                class="mt-4"
                name="phone"
                id="input-phone"
                v-model="phone.value"
                :state="isPhoneStateValid"
                aria-describedby="input-phone-help input-phone-feedback"
              />
              <b-form-invalid-feedback id="input-phone-feedback" :state="isPhoneStateValid">
                Indica un teléfono válido
              </b-form-invalid-feedback>
            </div>
            <b-form-input 
              size="lg" 
              class="mt-4"
              placeholder="Asunto"
              name="subject"
              id="input-subject"
              v-model="subject"
            />
            <b-form-textarea
              name="textarea" 
              id="textarea"
              placeholder="Tu mensaje"
              class="contact-textarea mt-4"
              size="lg"
              rows="6"
              v-model="message.text"
              :maxlength="message.maxlength"
            />
            <span class="counter">{{ message.text.length }} / {{ message.maxlength }} carácteres </span>
          </div>
          <div class="mt-5 text-center">
            <b-button variant="success" size="lg" type="submit">Enviar mensaje</b-button>
          </div>
        </form>
      </div>
      <div v-else>
        <b-alert variant="success" show>Mensaje enviado correctamente</b-alert>
      </div>
    </b-container>
  </div>
</template>

<script>
var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var phoneRegExp = /^[0-9]{2,3}-? ?[0-9]{6,7}$/;

export default {
  name: 'Contact',
  data: function() {
    return {
      name: "",
      email: {
        value: "",
      },
      phone: {
        value: "",
      },
      subject: "",
      message: {
        text: "",
        maxlength: 255
      },
      submitted: false
    };
  },
  methods: {
    sendContactMessage: function() {
      const url = `https://us-central1-polgasull-e9c9f.cloudfunctions.net/sendEmail?name=${this.name}&phone=${this.phone.value}&email_from=${this.email.value}&subject=${this.subject}&message=${this.message.text}`;
      const requestOptions = {
        method: 'GET',
        headers: { "Content-Type": "application/json" }
      };
      fetch(url, requestOptions);
      this.submitted = true;
    },
    validateName() {
      return this.name.length > 2 ? true : false
    },
    validateEmail(value) {
      return this.isEmail(value) ? true : false
    },
    isEmail(value) {
      return emailRegExp.test(value);
    },
    validatePhone(value) {
      return this.isPhone(value) ? true : false
    },
    isPhone(value) {
      return phoneRegExp.test(value);
    }
  },
  computed: {
    isNameStateValid() {
      if (this.name) {
        return this.validateName(this.name)
      }
      return null
    },
    isEmailStateValid(value) {
      if (this.email.value) {
        return this.validateEmail(this.email.value, value);
      }
      return null
    },
    isPhoneStateValid(value) {
      if (this.phone.value) {
        return this.validatePhone(this.phone.value, value);
      }
      return null
    }
  },
}
</script>

<style lang="scss" scoped>
  .contact {
    padding-top: 10rem;
    padding-bottom: 10rem;
  }

  .contact-textarea {
    height: 100% !important;
  }
</style>