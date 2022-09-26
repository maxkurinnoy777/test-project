<template>
  <div>
    <h2 style="text-align: center">{{ title }}</h2>

    <v-data-table
      :headers="headers"
      :items="users"
      :items-per-page="10"
      class="elevation-1"
      sort-by="name"
    >
      <template v-slot:item.active="{ item }">
        <v-simple-checkbox
          :value="item.active"
          :key="'active-' + item.id"
          @input="updateUserStatus(item.id)"
        ></v-simple-checkbox>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-btn
          elevation="2"
          outlined
          small
          primary
          :to="'/users/' + item.id"
        >
          {{ btnView }}
        </v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>

export default {
  async fetch({store}) {
    if (store.getters['users/users'].length === 0) {
      await store.dispatch('users/getUsers')
    }
  },
  data() {
    return {
      title: 'Users',
      btnView: 'View',
      headers: [
        {
          text: 'Active',
          align: 'center',
          sortable: false,
          value: 'active',
        },
        {
          text: 'Name',
          align: 'start',
          sortable: true,
          value: 'name',
        },
        {text: 'Username', value: 'username', sortable: true},
        {text: 'Email', value: 'email', sortable: true},
        {text: 'Phone', value: 'phone', sortable: false},
        {text: 'Website', value: 'website', sortable: false},
        {text: 'Company', value: 'company.name', sortable: true},
        {text: '', value: 'actions', sortable: false}
      ],
      error: ''
    }
  },
  computed: {
    users() {
      return this.$store.getters['users/users']
    }
  },
  methods: {
    async updateUserStatus(id) {
      await this.$store.dispatch('users/updateUserStatus', { id: id })
    }
  }
}
</script>

<style scoped>
  h2 {
    margin: 20px 0 30px;
  }
</style>
