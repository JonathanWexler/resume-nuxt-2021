<template>
  <b-container fluid class="buffer">
    <b-row class="no-gutters">
      <b-col col sm="12" md="6" lg="4" v-for="(photo, index) in randomPhotos" :key="index">
        <a :href="photo.url">
          <img class="photo" v-lazy="photo.url">
        </a>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
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
      resources: [
        'https://jonathanwexlerphotos.tumblr.com/',
        'https://jonathanwexler.tumblr.com/'
      ],
      photos: [
        {
          url: 'https://64.media.tumblr.com/0c63f4a2c3219361acb55c346edb3187/tumblr_mqnihrdyg51svodtno1_1280.jpg'
        },
        {
          url: 'https://64.media.tumblr.com/2ba3e7366394f1e46b64278cb9de6690/tumblr_mqeowqvgq01svodtno1_1280.jpg'
        },
        {
          url: 'https://64.media.tumblr.com/383850d1eda0f2e0a3caf7eb53db182f/tumblr_mqcwgt8zN21svodtno1_1280.jpg'
        },
        {
          url: 'https://64.media.tumblr.com/564fce3c94f14d863b2982239f1a3999/tumblr_mqc0uuXclS1svodtno1_1280.jpg'
        },
        {
          url: 'https://64.media.tumblr.com/980c18b91309f0d6c9b576d26aa4671f/tumblr_mq75v40XKH1svodtno1_1280.jpg'
        },
        {
          url: 'https://64.media.tumblr.com/f212e156ac5a405680f45349b9c2f68b/tumblr_mq5fkuJs4b1svodtno1_1280.jpg'
        },
        {
          url: 'https://64.media.tumblr.com/41b90ef9932878b87fda05856335ace9/tumblr_mq4esw9hRk1svodtno1_1280.jpg'
        },
        {
          url: 'https://64.media.tumblr.com/b63f7144bf24a69500cf524c89b15ba1/tumblr_mq1pymJyf01svodtno1_1280.jpg'
        },
        {
          url: 'https://64.media.tumblr.com/d79bcbbe41104eac268cbbc924f234dc/tumblr_mpw5zkeTqf1svodtno1_1280.jpg'
        },
        {
          url: 'https://64.media.tumblr.com/ed64c1f42ad2c580004ac517a03da34c/tumblr_mps9m7MhIh1svodtno1_1280.jpg'
        },
        {
          url: 'https://64.media.tumblr.com/e76edcffb63ea135666924df3736c386/tumblr_mpqto20Xne1svodtno1_1280.jpg'
        },
        {
          url: 'https://64.media.tumblr.com/8fc2dd9bbe34e30b5f64886a7e5810f2/tumblr_mppnm7fHCa1svodtno1_1280.jpg'
        },
        {
          url: 'https://64.media.tumblr.com/64b6b09ec03376e72097463b527453e6/tumblr_mpjwqoj4241svodtno1_1280.jpg'
        },
        {
          url: 'https://64.media.tumblr.com/ac9b31e686eaad61efeffb60c6193e0d/tumblr_mpg45mAwOj1svodtno1_1280.jpg'
        },
        {
          url: 'https://64.media.tumblr.com/d9d9c7790824cf2d260b9c5d08a7e682/tumblr_mpckq6Ragg1svodtno1_1280.jpg'
        },
        {
          url: 'https://64.media.tumblr.com/6295f69573ea2d7ca4582a320775d026/tumblr_mp7ccwIMCZ1svodtno1_1280.jpg'
        },
        {
          url: 'https://64.media.tumblr.com/04e2c3e944e28d990a8e0aed93f4d988/tumblr_mp67zxfWtx1svodtno1_1280.jpg'
        },
        {
          url: 'https://64.media.tumblr.com/7ef2cf16a5e270cd2dca18ccc97fba45/tumblr_mp2ixv2Fl31svodtno1_1280.jpg'
        },
        {
          url: 'https://64.media.tumblr.com/4901092365b14905e29dcef8c858ee60/tumblr_mp0cm5s9hw1svodtno1_1280.jpg'
        },
        {
          url: 'https://64.media.tumblr.com/1166b0b87c710c256cff0157b8ede947/tumblr_mqwvbfXYNB1sdjuxbo1_1280.jpg'
        },
        {
          url: 'https://64.media.tumblr.com/67e1a53a20b990e52c6d5edbbab9da60/tumblr_mqz2dd02SG1sdjuxbo1_1280.jpg'
        },
        {
          url: 'https://64.media.tumblr.com/973911a87d18edc25477e8c5f4f0c7a1/tumblr_mt1t5npbuv1sdjuxbo1_1280.jpg'
        },
        {
          url: 'https://64.media.tumblr.com/82cac05f5951eadd293076b089272cae/tumblr_mt1tr6BVaL1sdjuxbo1_1280.jpg'
        },
        {
          url: 'https://64.media.tumblr.com/0d8b7b9105fb368e202de0076187e805/tumblr_mt1u5eZ2EX1sdjuxbo1_1280.jpg'
        },
        {
          url: 'https://64.media.tumblr.com/d00d4365af9adbf3cd3deda3309bbaea/tumblr_mwauq5uLO21sdjuxbo1_1280.jpg'
        },
        {
          url: 'https://64.media.tumblr.com/46a7bd26629dd76e96f462e7076334a8/tumblr_n3h7wtE5e41sdjuxbo1_1280.jpg'
        },
        {
          url: 'https://64.media.tumblr.com/4c296c6e5af6140a008eb8aa6f00eec4/tumblr_n65qz7chGo1sdjuxbo1_1280.jpg'
        },
        {
          url: 'https://64.media.tumblr.com/862917dabaa3b36aedad5fad31ee537e/tumblr_nc04iatVjY1sdjuxbo1_1280.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.buffer {
  margin-top: 30px;
}

.photo {
  width: 100%;
  height: 600px;
  object-fit: cover;
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
