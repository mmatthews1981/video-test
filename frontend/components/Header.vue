<template>
  <b-container>
    <b-row>
      <b-col>
    <b-navbar-brand href="/">
        <img class="Logo" src="https://cdn.algaecal.com/wp-content/themes/algaecal/img/logo-2020.svg" />
    </b-navbar-brand>
        <b-nav class="ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="/" @click.prevent="loginout()">{{logintext ? "Log Out" : "Log In"}}</a>
          </li>
          <b-nav-item :if="this.$store.state.authenticated" to="/videos" v-if="logintext">Videos</b-nav-item>
        </b-nav>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { authState } from 'vuex'
export default {
  methods: {
    loginout(){
      this.$store.commit('logout');
      console.log(this.$store.state.authenticated)
      this.$router.push({name: 'custom'})
    }
  },
  computed: {
      logintext() {
        return this.$store.state.authenticated;
      }
    }
}
</script>

<style scoped>

.col {
  display: flex;
  padding: 1.5vh 0;
}

.container {
  height: 10vh;
}

.Logo {
  height: 7vh;
}

a{
  display: flex;
  align-self: center;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>