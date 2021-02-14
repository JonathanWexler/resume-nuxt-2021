<template>
  <b-container fluid class="buffer">
    <LightBox
      ref="lightbox"
      :showFooterCount="false"
      :showThumbs="false"
      :autoPlayTime="5000"
      :showLightBox="showLightBox"
      :media="randomPhotos"
      />
    <b-row class="no-gutters">
      <b-col col cols="6" xs="6" sm="4" lg="3" v-for="(photo, index) in randomPhotos" :key="index">
        <img class="photo" v-lazy="photo.src" @click="handlePhotoClick(index)">
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import photoData from '@/data/photos'
import LightBox from 'vue-image-lightbox'

export default {
  components: {
    LightBox
  },
  computed: {
    randomPhotos () {
      let photos = this.photos.slice()
      for(let i = photos.length - 1; i > 0; i-- ) {
        const j = Math.floor(Math.random() * i)
        const temp = photos[i]
        photos[i] = photos[j]
        photos[j] = temp
      }
      return photos
    }
  },
  data () {
    return {
      showLightBox: false,
      resources: [
        'https://jonathanwexlerphotos.tumblr.com/',
        'https://jonathanwexler.tumblr.com/'
      ],
      photos: photoData.photos
    }
  },
  methods: {
    handlePhotoClick (index) {
      this.showLightBox = true;
      this.$refs.lightbox.showImage(index);
    }
  }
}
</script>

<style lang="scss" scoped>
.buffer {
  margin-top: 30px;
  padding: 0;
}

.photo {
  width: 100%;
  height: 400px;
  object-fit: cover;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  text-align: center;


}

.title {
  font-family:
    'Quicksand',
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
