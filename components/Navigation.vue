<template>
  <div class="Navigation">
    <!-- <transition name="fade"> -->
      <nav class="row" v-if="show">
        <div>
          <b-row class="center no-gutters" align-h="center">
            <b-col sm="12" md="4" class="center">
              <b-button
                class="name-card"
                variant="light"
                size="lg"
                ref="name"
                to="/">
                  Jon Wexler
              </b-button>
            </b-col>
            <b-col sm="12" md="8" class="center">
              <b-button-group>
                <b-button
                class="nav-button"
                  variant="light"
                  size="lg"
                  v-for="item in buttons"
                  :to="item.link"
                  :key="item.label">
                  <font-awesome-icon :icon="item.icon" />
                  {{ item.label }}
                </b-button>
              </b-button-group>
            </b-col>
        </b-row>
        </div>
      </nav>
      <div class="row buffer" v-else></div>
    <!-- </transition> -->
  </div>
</template>
<script>
export default {
  name: 'Navigation',
  methods: {
    blink () {
      let name = this.$refs.name
      if (!name) return
      name = name.$el
      if (name.className.includes('blink')) name.className = name.className.replace('blink', '')
      else name.className = name.className + ' blink'
    },
    handleScroll (e) {
      if (window.scrollY > 30) this.show = false
      else this.show = true
    }
  },
  mounted () {
    this.$nextTick(() => {
      window.setInterval(() => {
          this.blink();
      }, 1000);
    })
    window.addEventListener('scroll', this.handleScroll);
  },
  data () {
    return {
      show: true,
      buttons: [
        {
          label: 'Resume',
          link: 'resume',
          icon: 'file-alt'
        },
        {
          label: 'Projects',
          link: 'projects',
          icon: 'project-diagram'
        },
        {
          label: 'Photos',
          link: 'photos',
          icon: 'images'
        },
        {
          label: 'Contact',
          link: 'contact',
          icon: 'id-card'
        },
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.center {
  text-align: center;
}
.btn:focus,.btn:active {
   outline: none !important;
   box-shadow: none;
}

.Navigation {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;

  .buffer {
    width: 100%;
    height: 70px;
  }

  .nav-button {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}


.name-card {
  font-family: OpenSans-Light;
  font-size: 35px;
  background-color: #ebfcfd;
  color: rgba(82, 82, 82, 0.50);
  text-align: left;
  border: none;
  outline : none;
  border-right: 8px solid #caf0f3;

  &.blink {
      border-right: 8px solid #ebfcfd;
  }
}

</style>