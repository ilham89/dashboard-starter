<template>
  <div>
    <v-app>
      <v-main>
        <div class="container">
          <div>
            <h2 style="text-align: center; margin-bottom: 16px">
              <b>Soal Tes</b>
            </h2>
            <v-text-field
              outlined
              dense
              label="Email"
              name="email"
              type="text"
              prepend-inner-icon="mdi-email"
            ></v-text-field>

            <v-text-field
              outlined
              dense
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show ? 'text' : 'password'"
              @click:append="show = !show"
              label="Password"
              name="password"
              prepend-inner-icon="mdi-lock-outline"
            ></v-text-field>
            <v-btn
              width="100%"
              depressed
              color="primary"
              @click="handleLogin($store.state.isLogged)"
            >
              Login
            </v-btn>
          </div>
        </div>
      </v-main>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {},
  data() {
    return {
      show: true,
    };
  },
  methods: {
    handleLogin(update) {
      this.$store.dispatch("handleLogin", update);
      this.$router.replace({ name: "Home" });
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
}
</style>
