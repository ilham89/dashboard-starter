<template>
  <div>
    <v-navigation-drawer
      id="default-drawer"
      v-model="$store.state.drawer"
      :right="$vuetify.rtl"
      :mini-variant.sync="$store.state.mini"
      mini-variant-width="80"
      app
      width="260"
    >
      <div class="px-2">
        <DrawerHeader />
        <v-divider class="mx-3 mb-2" />
        <v-list dense>
          <v-list-item
            v-for="item in $store.state.items"
            :key="item.title"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>

      <div class="pt-12" />
    </v-navigation-drawer>
    <AppBar />
  </div>
</template>

<script>
export default {
  name: "Drawer",
};
</script>

<style lang="sass">
#default-drawer
  .v-list-item
    margin-bottom: 8px

  .v-list-item::before,
  .v-list-item::after
    display: none

  .v-list-group__header__prepend-icon,
  .v-list-item__icon
    margin-top: 12px
    margin-bottom: 12px
    margin-left: 4px

  &.v-navigation-drawer--mini-variant
    .v-list-item
      justify-content: flex-start !important
</style>
