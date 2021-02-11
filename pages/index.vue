<template>
  <b-container class="profile-container">
    <b-card>
      <b-row>

        <b-col class="main-image">
          <img id="main-image" src="~/assets/profile.gif" alt="">
        </b-col>
        <b-col class="main-text">
          <p>Hi, I'm Jon.
          </p>
          <p>
            I'm a software engineer specializing in web development and teaching application development
            concepts. I have instructed <a href="https://nycda.com/about">programming courses</a> in Ruby on
            Rails and Node.js with Express.js, and conducted workshops in Philadelphia and New York City. </p>

          <p> As a former team lead and consultant
            in application development I'm always looking for better ways to collaborate with other
            developers and bridge the gap between the technical and non-technical groups in a company. My
            world revolves around technology, creativity, innovation, and exploration.</p>

          <p>I'm currently a senior engineer at Bloomberg LP, lead developer at Logorithms LLC, and author of
            <a href="https://www.manning.com/books/get-programming-with-node-js">Get Programming with
              Node.js</a>, through Manning Publications.</p>

          <p>Listen to my <a
              href="http://therabbithole.libsyn.com/102-digging-into-javascript-w-jonathan-wexler">podcast
              interview on Node.js</a> with The Rabbit Hole.</p>
          </a>
        </b-col>
      </b-row>
    </b-card>
  </b-container>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.main-image {
  display: flex;
  justify-content: center;
}
#main-image {
  max-height: 420px;
}
.profile-container {
  margin-top: 20px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  margin-top: 20px;
  text-align: left;
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
