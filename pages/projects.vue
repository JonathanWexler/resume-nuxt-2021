<template>
  <div class="container">
    <b-row>
      <b-col sm="12">
        <a href="http://www.linkedin.com/in/jonathanwexler" target="_blank" v-for="(project, index) in [1,2,3,4,5,6]" :key="index">
          <b-card class="project-card">
            <b-row class="row">
              <b-col class="col" sm=4>
                <font-awesome-icon class="project-icon" size="4x" icon="project-diagram" />
              </b-col>
              <b-col class="col details" sm=8>
                <section class="title">
                  Content Title
                </section>
                <section class="description">
                  Content description  Content description  Content description  Content description  Content description  Content description  Content description
                </section>
              </b-col>
            </b-row>
          </b-card>
        </a>
      </b-col>
    </b-row>
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
  padding-top: 20px;
  text-align: center;

  .row {
    max-width: 800px;
  }

  .project-card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px;

    .details {
      justify-content: flex-start;
      text-align: left;
    }

    .project-icon {
      color: #212529;
      text-decoration: none;
    }
  }
}

.title {
  display: inline-flex;
}

.links {
  padding-top: 15px;
}
</style>
