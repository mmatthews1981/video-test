<template>
<b-col class="summary">
  <nuxt-link :to="'videos/'+id">
  <div class="image-container">
  <img class="thumb" :src="video.url" />
  <div class="after"></div>
  </div>
  
  </nuxt-link>  
  <h3>{{title}}</h3> 
  <div>{{description}}</div>
</b-col>
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

<style>

h3{
  font-size: 24px;
  margin-top: 15px;
}
  .summary {
    flex-basis: 30%;
    align-self: flex-start;
    max-width: 30%;
    padding-top: 20px;
  }

.image-container {
    position: relative;

}
.image-container .after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    color: #FFF;
    border: 15px solid #013b30
}
.image-container:hover .after {
    display: block;
    background: rgba(0, 0, 0, .4);
}
</style>
