<template>
<b-list-group-item>
  <div><img :src="video.url" /></div>
  <div>{{title}}</div> 
  <div>{{description}}</div>
  <nuxt-link :to="'videos/'+id">link</nuxt-link>  
</b-list-group-item>
</template>

<script>
export default {
  props: ["title", "description","id", "video_id"],
  data() {
    return {
      video:{}
    }
  },
  methods: {
    async getThumb(){
      let res = await this.$axios.get('https://fast.wistia.com/embed/medias/'+ this.video_id +'.json')
      let thumb = res.data.media.assets.filter(function(curr){ return curr.type === "still_image"});
      this.video = thumb[0];
    }
  },
  mounted() {
    this.getThumb()
  },
}
</script>