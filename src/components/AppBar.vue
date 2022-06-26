<template>
  <v-app-bar
    id="default-app-bar"
    app
    color="secondary"
    :clipped-left="$vuetify.rtl"
    :clipped-right="!$vuetify.rtl"
    height="70"
    flat
  >
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click="handleDrawer($store.state.drawer)"
    />

    <DrawerToggle class="hidden-sm-and-down" />

    <div><b>Halaman Dashboard</b></div>
    <v-spacer />
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",
  methods: {
    handleDrawer(update) {
      this.$store.dispatch("handleDrawer", update);
    },
  },
};
</script>