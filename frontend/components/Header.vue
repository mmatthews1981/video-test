<template>
  <b-container>
    <b-row>
      <b-col>
    <b-navbar-brand href="/">
        <img class="Logo" src="https://cdn.algaecal.com/wp-content/themes/algaecal/img/logo-2020.svg" />
    </b-navbar-brand>
        <b-nav class="ml-auto">
          <b-nav-item to="/login">Logout</b-nav-item>
          <b-nav-item to="/videos">Videos</b-nav-item>
        </b-nav>
      </b-col>
    </b-row>
  </b-container>
</template>

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