<template>
  <div>
    <Navigation />
    <Nuxt />
  </div>
</template>
<script>
export default {
  transition: {
    name: 'right',
    mode: 'out-in',
    duration: 500,
    enterClass: 'enter',
    enterToClass: '',
    enterActiveClass: 'enter-active',
    leaveClass: '',
    leaveToClass: 'enter',
    leaveActiveClass: 'enter-active',
  },
  mounted () {
  }
}
</script>
<style lang="scss" scoped>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

// .right-enter-active,
// .right-leave-active {
//   transition: all 0.5s;
// }

// .right-enter,
// .right-leave-to {
//   // opacity: 0;
//   transform: translate3d(-1000px, 0, 0);
// }

// .right-move {
//   // opacity: 0.5;
//   transition: 0.5s;
// }
</style>
