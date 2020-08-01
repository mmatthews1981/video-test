<template>
  <div class="container-fluid">
    <b-container>
      <b-row>
        <b-col col="12">
          <h1>Welcome to Our Video Library</h1>
        </b-col>
      </b-row>
      <b-row class="summaries">
            <VideoSummary v-for="video in videos" 
              v-bind:key="video.id"
              v-bind:title="video.title"
              v-bind:description="video.description" 
              v-bind:id="video.id"
              v-bind:video_id="video.video_id" />
      </b-row>
    </b-container>
  </div>
</template>

<script>

export default {

  data() {
    return {
      videos: { },
      test: {}
    };
  },
  methods: {
    async getVideos() {
      let res = await this.$axios.get('http://localhost:8080/videos')
      this.videos = res.data.data;
    }
  },
  mounted() {
    this.getVideos();
  },
}

</script>

<style scoped>

.container-fluid{
  margin: 50px 0;
}

.summaries {
  flex-wrap:wrap;

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
