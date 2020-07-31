<template>
<b-list-group-item>
  <div>video image</div>
  {{title}} 
  {{description}}
  <nuxt-link :to="'videos/'+id">link</nuxt-link>  
</b-list-group-item>
</template>

<script>
export default {
  props: ["title", "description","id"]
}
</script>