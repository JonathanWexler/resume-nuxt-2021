<template>
  <b-container fluid class="buffer">
    <b-row class="no-gutters">
      <b-col col cols="6" xs="6" sm="6" lg="4" v-for="(photo, index) in randomPhotos" :key="index">
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
        },
        {
          url: 'https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/96712966_4336498613034296_4508956764628762109_n.jpg?_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=108&_nc_ohc=Wrs8wU8uDsgAX__gWak&oh=36f4c3b382c6236b2bbfd39aa4721b1c&oe=5F6E5A9F'
        },
        {
          url: 'https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/101409836_296839478009868_3275441698689076231_n.jpg?_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=100&_nc_ohc=bPgNjFtGoxsAX9_r8NS&oh=5b07e062725b9e992a4f54c1957cf8d1&oe=5F71F537'
        },
        {
          url: 'https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/101409836_296839478009868_3275441698689076231_n.jpg?_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=100&_nc_ohc=bPgNjFtGoxsAX9_r8NS&oh=5b07e062725b9e992a4f54c1957cf8d1&oe=5F71F537'
        },
        {
          url: 'https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/96389834_156538842569558_5330199874762216813_n.jpg?_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=102&_nc_ohc=R2mlcOiZDuEAX_YVopk&oh=479b7203be3f192c897f812836e952d8&oe=5F71C0A9'
        },
        {
          url: 'https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/84348991_102699824583037_877988124656072496_n.jpg?_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=101&_nc_ohc=rWrR76OqRaEAX9K16HQ&oh=fc0db979ef6a877fba47685a893f3cd7&oe=5F6E8D50'
        },
        {
          url: 'https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/76858148_2589305854728740_1409779483163194864_n.jpg?_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=108&_nc_ohc=x8sSX7s2decAX-HoWw1&oh=960d41b9fd7c10b8141538cdc0ac7883&oe=5F6E4E3F'
        },
        {
          url: 'https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/80012133_188063705713460_360201269433773509_n.jpg?_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=108&_nc_ohc=NYQZwkimIvQAX8E1_1G&oh=d3f08c8e7a88d577f4c2fd5e12837a1f&oe=5F6F3951'
        },
        {
          url: 'https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/76852833_2668292963265323_8641538125990881549_n.jpg?_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=111&_nc_ohc=cWOZcN95gccAX9Sw7HZ&oh=80e6f74bda1bbdf44e9cb54a65f47444&oe=5F6F87F2'
        },
        {
          url: 'https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/79129220_189209025597764_4019012083799059228_n.jpg?_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=108&_nc_ohc=ztDh9T_B6DEAX83YTMt&oh=62b1d7ec01ad42cc63b4cf8ab7cc3ae1&oe=5F6E3F83'
        },
        {
          url: 'https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/74518786_466683217338743_1650772800632002281_n.jpg?_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=111&_nc_ohc=a9uCGehsBwMAX8WpCe0&oh=4a70718d0f640e01a1b845174750c540&oe=5F70EB09'
        },
        {
          url: 'https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/74518786_466683217338743_1650772800632002281_n.jpg?_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=111&_nc_ohc=a9uCGehsBwMAX8WpCe0&oh=4a70718d0f640e01a1b845174750c540&oe=5F70EB09'
        },
        {
          url: 'https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/75332711_470419743856523_8487305534184041072_n.jpg?_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=111&_nc_ohc=l4BQB3VTVwsAX-1YgZ8&oh=e5ee7e718a982ce4bc63a63034b49c14&oe=5F71DE16'
        },
        {
          url: 'https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/74516681_130199895105856_2278637292538903253_n.jpg?_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=104&_nc_ohc=7RxMQ4y7ojUAX_Kt9JQ&oh=0b8f566f537ef0c850aa038f4453645a&oe=5F714E81'
        },
        {
          url: 'https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/75538117_119502779531066_8005244212957263076_n.jpg?_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=102&_nc_ohc=K44IwxzUwkcAX_IZZe7&oh=13ee62819031f362212528a6baab0853&oe=5F714F02'
        },
        {
          url: 'https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/75640832_157458345525939_7196804283414620900_n.jpg?_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=103&_nc_ohc=xrVhtjrfREIAX_wv-zl&oh=e586f9c92b4e40d4d0540d1a2cb8c60d&oe=5F6EDEAD'
        },
        {
          url: 'https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/79489009_1799226870213303_3995992629795722102_n.jpg?_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=103&_nc_ohc=0Pq0ihVcZXIAX8zbTAo&oh=a08bad1b43e9d64d7067cc26c797e2d5&oe=5F6FB85F'
        },
        {
          url: 'https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/77339379_594233531331481_719298912058058623_n.jpg?_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=101&_nc_ohc=RMPJt2Gna_wAX8xYQsK&oh=725e182996115373b8f6132907bde25e&oe=5F70A324'
        },
        {
          url: 'https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/61941253_164720367901069_3670992508305219689_n.jpg?_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=101&_nc_ohc=-_0K1t-9yOQAX-c8ZqC&oh=0f0a61c35e22177c7474e8d50f599548&oe=5F705446'
        },
        {
          url: 'https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/e35/29089121_613101342364929_4330501415865679872_n.jpg?_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=109&_nc_ohc=ETt5IkfGG_YAX8fkRSQ&oh=e8ec5ff4ecc404f128a5e04bd74f010e&oe=5F6F17A5'
        },
        {
          url: 'https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/e35/22710281_1361255890663656_3689162730129850368_n.jpg?_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=100&_nc_ohc=ynUFB_SU9WwAX8aei4n&oh=b2fa0d03276886139e5fd7262bf39d62&oe=5F701822'
        },
        {
          url: 'https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/e35/21827043_1866057580078873_1912423841691336704_n.jpg?_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=101&_nc_ohc=bi88MxlSELIAX8N-Zsc&oh=c5283a535efc6b2435a681f63c2a2ff8&oe=5F6EDC15'
        },
        {
          url: 'https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/e35/19052183_143937266166663_4677086765343834112_n.jpg?_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=103&_nc_ohc=yill4pAxAbQAX9zq2RR&oh=3c4f127792bbcf5794fd4e4771c72ceb&oe=5F6FDA39'
        },
        {
          url: 'https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/e35/16228577_1237554706312695_5103046894318256128_n.jpg?_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=103&_nc_ohc=LDnfPgTOfHcAX89WbbZ&oh=f4e80ccc3cc234b2919048f355ebf881&oe=5F711116'
        },
        {
          url: 'https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/e35/16465149_112955929221021_2373255986963021824_n.jpg?_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=109&_nc_ohc=ZzSlVcYN090AX_bEHlX&oh=7c74b4204d8bb1d8ef68c299a4b870ed&oe=5F70EDF6'
        },
        {
          url: 'https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/e35/16465146_581781372027063_4968183701453144064_n.jpg?_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=103&_nc_ohc=EhFUDGDlLjEAX94-Fmn&oh=3b766ddfd2cf3998779e5f170992abff&oe=5F7102DF'
        },
        {
          url: 'https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/e35/16122417_613815242155182_6302045929063055360_n.jpg?_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=106&_nc_ohc=2v-dm7FIxnMAX-tDSWt&oh=1d843bbbcb50e4f53f27a97a8b912964&oe=5F718A68'
        },
        {
          url: 'https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/e35/16110499_1832179937020291_8731841492575846400_n.jpg?_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=107&_nc_ohc=uF0DIBT54vMAX_umY46&oh=52a66dd2a757968270eb3a625d464abf&oe=5F711953'
        },
        {
          url: 'https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/e35/16123135_151696355329865_6763509876908883968_n.jpg?_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=105&_nc_ohc=ZVEooMKGSn4AX8ug6GH&oh=23e1ce4c4e5506f691e4e92a96a20288&oe=5F6E8E1F'
        },
        {
          url: 'https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/e35/16122539_1660492650910855_8124256752955817984_n.jpg?_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=107&_nc_ohc=smHGGQAo4A8AX8vjs9c&oh=75509adbebd357a6f2a6aa858a0b3236&oe=5F70D9CE'
        },
        {
          url: 'https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/e35/16123692_107337393111441_7806687949126369280_n.jpg?_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=109&_nc_ohc=cNk2mXibQa0AX_eamLc&oh=53d568ab47577c04eb2466e811ce4e2b&oe=5F70E302'
        },
        {
          url: 'https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/e35/16123692_107337393111441_7806687949126369280_n.jpg?_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=109&_nc_ohc=cNk2mXibQa0AX_eamLc&oh=53d568ab47577c04eb2466e811ce4e2b&oe=5F70E302'
        },
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
