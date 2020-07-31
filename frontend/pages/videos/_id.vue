<template>
<div>
  <div> a thing</div>
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
      id: this.$route.params.id
    };
  },
  methods: {
    async getVideo() {
      let res = await this.$axios.get('http://localhost:8080/videos/'+this.id)
      this.video = res.data.data;
    },
  },
  mounted() {
    this.getVideo();
  }
}
</script>