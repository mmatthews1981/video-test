<template>
<b-container fluid>
  <b-container>
    <div>
      <b-card>
        <h2>User Login</h2>
        <LoginForm />
      </b-card>
    </div>
  </b-container>
</b-container>


</template>

<script>


export default {
  middleware: 'authenticated',
}
</script>

<style scoped>

.container-fluid {
  background-color: #013b30;
  display: flex;
  height: 90vh
}
.container{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.card {
  border-radius: 0;
  padding: 30px;
  min-width: 500px
}

.title {
  font-family: 'Quicksand',
  'Source Sans Pro',
  -apple-system,
  BlinkMacSystemFont,
  'Segoe UI',
  Roboto,
  'Helvetica Neue',
  Arial,
  sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
