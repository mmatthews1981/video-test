<template>

  <b-form @submit="onSubmit">
          <b-form-group
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="form.username"
              type="text"
              required
              placeholder="Enter Username"
            ></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary" @click.prevent="onSubmit()">Submit</b-button>
        </b-form>

</template>

<script>
import { authState } from 'vuex'
export default {
  data() {
    return {
      form: {
        username: ''
      },
      users: []
    };
  },
  methods: {
    onSubmit(){
      let usercheck = this.users.find(obj => obj.username === this.form.username)
      if (usercheck) {this.$store.commit('authenticate'); this.$router.push({path: '/videos'})};    
    },
    async getUsers() {
      let res = await this.$axios.get('http://localhost:8080/users')
      this.users = res.data.data;
    }
  },
  mounted() {
    this.getUsers();
  },
}
</script>