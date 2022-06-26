<template>
  <v-app>
    <div v-if="this.$store.state.isLogged">
      <Drawer />
    </div>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  mounted() {
    if (!this.$store.state.isLogged) {
      this.$router.replace({ name: "Login" });
    }
  },
};
</script>
