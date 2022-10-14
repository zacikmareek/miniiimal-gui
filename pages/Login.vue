<template>
  <v-layout align-center justify-center fill-height>
    <v-flex xs12 sm8 md5>
      <v-col align="center">
        <v-card width="500" outlined rounded-md class="pa-12 elevation-60">
          <v-img class="mb-12" width="300" alt="App Logo" src="/logo.png" />
          <h2 class="mb-6">Prihlásenie</h2>
          <v-form @submit.prevent="logIn">
            <div>
              <form-label title="Email" />
              <v-text-field v-on:keydown.enter="logIn" label="Email" :rules="[rules.required, rules.email]" outlined dense v-model="email"></v-text-field>
            </div>
            <div>
              <form-label title="Heslo" />
              <v-text-field
                v-on:keydown.enter="logIn"
                :rules="[rules.required]"
                outlined dense
                label="Heslo"
                v-model="password"
                :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                @click:append="() => (showPassword = !showPassword)"
                :type="!showPassword ? 'password' : 'text'"
              ></v-text-field>
            </div>
            <p class="text-body-2 mb-8">Nemáte účet? <a href="" class="secondary--text text-decoration-none">Vytvorte si ho.</a></p>
            <v-btn color="secondary" depressed large type="submit">Prihlásiť sa</v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-flex>
  </v-layout>
</template>

<script>
import auth_service from "~/services/auth_service";

export default {
  name: "Login",
  layout: 'login',
  head() {
    return {
      title: "Prihlásenie"
    };
  },
  mounted(){
    //this.checkLogin();
  },
  data() {
    return {
      email: "",
      password: "",
      showPassword: false,
      rules: {
        required: value => !!value || 'Prosím, vyplňte toto pole.',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Nesprávny formát emailu.'
        },
      },
    };
  },
  methods: {
    // checkLogin(){
    //   if(this.$cookies.get('access_token')){
    //     this.$router.push('/');
    //   }
    // },
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    async logIn() {
      await auth_service.login({
        email: this.email,
        password: this.password
      })
        .then(async (response) => {
          const success_message = response.data.message;
          this.$cookies.set("auth_token", response.data.auth_token);
          this.$toast.success(success_message , { timeout: 1500 });
          this.$router.push('/');
        })
        .catch((err) => {
          const error_message = err.response.data.error;
          this.$toast.error(error_message, { timeout: 3000 });
        })
    }
  },
}

</script>
