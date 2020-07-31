<template>
  <div @click="thing">{{authed}}</div>
</template>

<script>
import { authState } from 'vuex'
export default {
  computed: {
      authed() {
        return this.$store.state.authenticated
      }
    },
    methods: {
      thing() {
        console.log('click');
        this.$store.commit('authenticate')
      }
    }
}
</script>