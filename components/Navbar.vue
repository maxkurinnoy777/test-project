<template>
  <v-navigation-drawer
    app
    permanent
    expand-on-hover
  >
    <v-list
      nav
      dense
    >
      <v-list-item
        v-for="item in menu"
        :to="item.link"
        :key="item.link"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ item.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      menu: [
        {
          name: 'Home',
          icon: 'mdi-home',
          link: '/'
        },
        {
          name: 'Users',
          icon: 'mdi-account-multiple',
          link: '/users'
        }
      ]
    }
  }
}
</script>
