<template>
<b-container class="video">
  <b-row>
    <b-col>
      <nuxt-link to="/videos">Back</nuxt-link>
    </b-col>
  </b-row>

  <b-row>
    <b-col>
      <h3>Video Player</h3>
      <div class="video-wrapper">
        <span v-if="showVid">
          <script :src="'//fast.wistia.com/embed/medias/'+video.video_id+'.jsonp'" async></script>
          <script src="//fast.wistia.com/assets/external/E-v1.js" async></script>
          <div class="wistia_embed" :class="[embedClass]" style="height:400px;width:720px">&nbsp;</div>
        </span>
        <h3>
          {{video.title}}
        </h3>
        <div>{{video.description}}</div>
      </div>
    </b-col>
  </b-row>
</b-container>
</template>

<script>
export default {
  data() {
    return {
      video: { },
      showVid: false,
      id: this.$route.params.id
    };
  },
  computed: {
    embedClass(){ return 'wistia_async_'+this.video.video_id},
  },
  methods: {
    async getVideo() {
      let res = await this.$axios.get('http://localhost:8080/videos/'+this.id)
      this.video = res.data.data;
      this.showVid = true;
    },
    async getThumb(){
      let res = await this.$axios.get('https://fast.wistia.com/embed/medias/'+ this.video_id +'.json')
      let thumb = res.data.media.assets.filter(function(curr){ return curr.type === "still_image"});
      this.video = thumb[0];
    }
  },
  mounted() {
    this.getVideo();
  }
}
</script>

<style>
  h3{
  font-size: 24px;
  margin: 15px 0 50px 0;
}
.video {
  margin-top: 50px;
}
.video-wrapper {
  margin: 0px auto;
  max-width: 720px;
}
</style>