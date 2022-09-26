<template>
  <v-app dark>
    <template v-if="error.statusCode === 404">
      <Navbar/>
      <v-main>
        <v-container>
          <v-row class="justify-center">
            <v-col cols="12">
              <v-img
                alt="404"
                src="/404.png"
              ></v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </template>
    <template v-else>
      <h2>
        {{ otherError }}
      </h2>
    </template>
  </v-app>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      otherError: 'An error occurred'
    }
  },
  head () {
    const title = this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
