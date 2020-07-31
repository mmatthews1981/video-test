<template>
<div>
  <div> a thing</div>
  <div>video</div>
  <div>
    title goes here{{}}
  </div>
  <div>description {{this.$route.params.id}}</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      video: { },
    };
  },
  methods: {
    async getVideo() {
      let res = await this.$axios.get('http://localhost:8080/video/1')
      this.video = res.data.data;
    },
  },
  mounted() {
    this.getVideo();
  }
}
</script>