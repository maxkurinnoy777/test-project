<template>
  <v-app dark>
    <Navbar />
    <v-main>
      <v-container>
        <v-row class="justify-center">
          <v-col cols="10">
            <nuxt />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar';

export default {
  name: 'DefaultLayout',
  components: {
    Navbar
  }
}
</script>

<style>
.v-main {
  padding: 0 !important;
}
</style>
