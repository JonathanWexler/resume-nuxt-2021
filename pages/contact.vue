<template>
  <div class="container">
    <b-card class="main">
      <b-row>
        <b-col class="col" sm=12 md=3>
          <a href="https://github.com/JonathanWexler" target="_blank">
            <font-awesome-icon size="6x" :icon="['fab', 'github']" />
          </a>
        </b-col>
        <b-col class="col" sm=12 md=3>
          <a href="http://www.linkedin.com/in/jonathanwexler" target="_blank">
            <font-awesome-icon size="6x" :icon="['fab', 'linkedin']" />
          </a>
        </b-col>
        <b-col class="col" sm=12 md=3>
          <a href="https://twitter.com/TheWexler" target="_blank">
            <font-awesome-icon size="6x" :icon="['fab', 'twitter']" />
          </a>
        </b-col>
        <b-col class="col" sm=12 md=3>
          <a href="https://www.manning.com/books/get-programming-with-node-js?a_aid=wexler" target="_blank">
            <font-awesome-icon size="6x" icon="book-open" />
          </a>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 20px;

  .main {
    width: 100%;

    a {
      color: #212529;
    }

    .col {
      padding: 20px 0;
    }
  }
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
