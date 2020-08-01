<template>
<div>
  <div>a thing</div>
  <span v-if="showVid">
    <script :src="'//fast.wistia.com/embed/medias/'+video.video_id+'.jsonp'" async></script>
    <script src="//fast.wistia.com/assets/external/E-v1.js" async></script>
    <div class="wistia_embed" :class="[embedClass]" style="height:349px;width:620px">&nbsp;</div>
  </span>

  <div>video</div>
  <div>
    {{video.title}}
  </div>
  <div>{{video.description}}</div>
</div>
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