<template>
  <div class="Navigation" v-if="show">
    <nav class="row nav-container">
      <div>
        <b-row class="center no-gutters" align-h="center">
          <b-col sm="12" md="3" class="center">
            <b-button
              class="name-card"
              variant="light"
              size="lg"
              ref="name"
              to="/"
              exact
            >
              Jon Wexler
            </b-button>
          </b-col>
          <b-col sm="12" md="9" class="center">
            <b-button-group>
              <b-button
                class="nav-button"
                variant="light"
                size="lg"
                v-for="item in buttons"
                :to="item.link"
                exact
                :key="item.label"
              >
                <font-awesome-icon :icon="item.icon" />
                {{ item.label }}
              </b-button>
            </b-button-group>
          </b-col>
        </b-row>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Navigation",
  methods: {
    blink() {
      let name = this.$refs.name;
      if (!name) return;
      name = name.$el;
      if (name.className.includes("blink"))
        name.className = name.className.replace("blink", "");
      else name.className = name.className + " blink";
    },
    handleScroll(_e) {
      if (window.scrollY > 30) this.show = false;
      else this.show = true;
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.setInterval(() => {
        this.blink();
      }, 1000);
    });
    window.addEventListener("scroll", this.handleScroll);
  },
  data() {
    return {
      show: true,
      buttons: [
        {
          label: "Portfolio",
          link: "/portfolio",
          icon: "file-alt",
        },
        {
          label: "Books",
          link: "/books",
          icon: "book",
        },
        {
          label: "Photos",
          link: "/photos",
          icon: "images",
        },
        {
          label: "Articles",
          link: "/articles",
          icon: "newspaper",
        },
        {
          label: "Contact",
          link: "/contact",
          icon: "id-card",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.center {
  text-align: center;
  margin-bottom: 10px;
}
.btn:focus,
.btn:active {
  outline: none !important;
  box-shadow: none;
}

.Navigation {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 6vw;
  position: fixed;
  /* margin: 0 auto; */
  width: 100%;
  z-index: 20;

  .nav-container {
    &.show {
      background-color: transparent;
    }
  }

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
  font-family: "SignikaNegative-Light";
  width: 185px;
  font-size: 30px;
  background-color: #ebfcfd;
  color: rgba(82, 82, 82, 0.5);
  text-align: left;
  border: none;
  outline: none;
  height: 68px;
  border-right: 8px solid #caf0f3;

  &.blink {
    border-right: 8px solid #ebfcfd;
  }
}
</style>
