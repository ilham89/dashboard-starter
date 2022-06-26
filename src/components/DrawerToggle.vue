<template>
  <v-btn
    class="ml-3 mr-4"
    elevation="1"
    fab
    small
    @click="handleMini($store.state.mini)"
  >
    <v-icon>
      {{ $store.state.mini ? "mdi-format-list-bulleted" : "mdi-dots-vertical" }}
    </v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "DrawerToggle",
  methods: {
    handleMini(update) {
      this.$store.dispatch("handleMini", update);
    },
  },
};
</script>
