<template>
  <b-container class="profile-container" fluid>
    <b-card>
      <b-row>
        <b-col cols="12" xs="12" sm="12" md="6">
          <img
            v-if="hovered"
            class="main-image"
            src="~/assets/2023_profile.gif"
            alt=""
            @mouseout="changeHover(false)"
          />
          <img
            v-else
            class="main-image image"
            src="~/assets/2023_profile.jpg"
            alt=""
            @mouseover="changeHover(true)"
          />
        </b-col>
        <b-col cols="12" xs="12" sm="12" md="6">
          <section id="main-text">
            <p>Hi, I'm Jon.</p>
            <p>
              I'm a software engineer specializing in web development and
              teaching application development concepts. I have instructed
              <a href="https://nycda.com/about">programming courses</a> in Ruby
              on Rails and Node.js with Express.js, and conducted workshops in
              Philadelphia and New York City.
            </p>

            <p>
              As a former team lead and consultant in application development
              I'm always looking for better ways to collaborate with other
              developers and bridge the gap between the technical and
              non-technical groups in a company. My world revolves around
              technology, creativity, innovation, and exploration.
            </p>

            <p>
              I have experience as a senior engineer at Meta Platforms and
              Bloomberg LP, lead developer at Logorithms App Development, and
              author of
              <a
                href="https://www.manning.com/books/get-programming-with-node-js"
                >Get Programming with Node.js</a
              >
              and
              <a href="https://www.manning.com/books/tiny-node-projects"
                >Tiny Node Projects</a
              >, through Manning Publications.
            </p>

            <p>
              Listen to my
              <a
                href="http://therabbithole.libsyn.com/102-digging-into-javascript-w-jonathan-wexler"
                >podcast interview on Node.js</a
              >
              with The Rabbit Hole. Watch my Twitch livestream on
              <a href="https://www.twitch.tv/videos/808195944"
                >Node.js web apps</a
              >
              and
              <a
                href="https://www.twitch.tv/manningpublications/video/926422598"
                >API development</a
              >
              hosted by Manning Publications.
            </p>
          </section>
        </b-col>
      </b-row>
    </b-card>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      hovered: false,
    };
  },
  methods: {
    changeHover(val) {
      this.hovered = val;
    },
  },
};
</script>

<style lang="scss" scoped>
.main-image {
  width: 100%;
  height: 480px;
  object-fit: cover;
  // clip-path: polygon(0% 15%, 50% 0%, 60% 0%, 100% 10%, 100% 30%, 75% 100%, 0% 80%);

  &.image {
    // &:hover {
    //   opacity: 0;
    // }
  }
}

#main-text {
  width: 100%;
  font-family: "SignikaNegative-Light";
  font-size: 16px;
  padding-top: 20px;

  a {
    &:hover {
      background-color: #ffd400;
      text-decoration: none;
      background-clip: padding-box;
    }
  }
}

.profile-container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  text-align: left;
  max-width: 1000px;
}

.title {
  // font-family:
  //   'Quicksand',
  //   'Source Sans Pro',
  //   -apple-system,
  //   BlinkMacSystemFont,
  //   'Segoe UI',
  //   Roboto,
  //   'Helvetica Neue',
  //   Arial,
  //   sans-serif;
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

@keyframes like-gif {
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 100%;
  }
}
</style>
