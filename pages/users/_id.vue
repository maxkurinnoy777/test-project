<template>
  <div>
    <h2>{{ title }}</h2>
    <v-btn
      depressed
      class="back-btn"
      :to="'/users'"
    >
      <v-icon
        left
        dark
      >
        mdi-arrow-left
      </v-icon>
      {{ back_btn }}
    </v-btn>
    <UserCard :user="user"/>
  </div>
</template>

<script>
import UserCard from "~/components/UserCard";

export default {
  validate({params}) {
    return /^\d+$/.test(params.id)
  },
  async asyncData({store, params}) {
    const user = await store.dispatch('users/getUser', {id: params.id})

    return {user}
  },
  components: {
    UserCard
  },
  data() {
    return {
      title: 'User info',
      back_btn: 'Back',
      user: {}
    }
  },
  async mounted() {
    this.user = await this.$store.dispatch(
      'users/getUser',
      {id: this.$route.params.id}
    )
  }
}
</script>

<style scoped>
  h2 {
    margin: 20px 0 30px;
    text-align: center;
  }

  .back-btn {
    margin-bottom: 20px;
  }
</style>
