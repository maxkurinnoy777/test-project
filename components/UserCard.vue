<template>
  <div class="user-card">
    <h3>{{ user.name }}</h3>
    <v-divider></v-divider>
    <p><b>Username:</b> {{ user.username }}</p>
    <p><b>Email:</b> {{ user.email }}</p>
    <p><b>Address:</b> {{ user.address.street + ', ' + user.address.suite + ', ' + user.address.city + ', ' + user.address.zipcode }}</p>
    <p><b>Phone:</b> {{ user.phone }}</p>
    <p><b>Website:</b> {{ user.website }}</p>
    <p><b>Company:</b> {{ user.company.name }}</p>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
  .user-card {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  p {
    margin: 0
  }

  p:first-of-type {
    margin-top: 20px;
  }
</style>
