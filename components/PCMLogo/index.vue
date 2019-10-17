<template>
  <div
    :class="[
      'walkinpcm-logo',
      { 'logo-bg-dark': flag.isBgDark },
      { 'logo-size-min': isMin }
    ]"
  >
    <div class="logo-full" :class="[`logo-${size}`]">
      <img v-if="flag.isBgDark" src="~assets/img/logo/bg-black-full.jpg" alt="Logo of walkinpcm">
      <img v-else src="~assets/img/logo/bg-white-full.jpg" alt="Logo of walkinpcm">
    </div>
    <div class="logo-min" :class="[`logo-${size}`]">
      <img v-if="flag.isBgDark" src="~assets/img/logo/bg-black-min.jpg" alt="Logo of walkinpcm">
      <img v-else src="~assets/img/logo/bg-white-min.jpg" alt="Logo of walkinpcm">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isMin: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'sm'
    }
  },
  data () {
    return {
      flag: {
        isBgDark: true
      }
    }
  }
}
</script>

<style lang="scss">
  .walkinpcm-logo {
    display: inline-block;
    position: relative;

    .logo-full,
    .logo-min {
      position: absolute;
      top: 0;
      left: 0;
      height: 50px;

      &.logo-sm {
        height: 30px;
      }
      &.logo-md {
        height: 50px;
      }
      &.logo-lg {
        height: 70px;
      }
      &.logo-xl {
        height: 90px;
      }

      > img {
        width: auto;
        height: 100%;
      }
    }

    .logo-full {
      opacity: 1;
      transition: opacity .2s ease;
    }
    .logo-min {
      opacity: 0;
      transition: opacity .2s ease;
    }
    &.logo-size-min {
      .logo-full {
        opacity: 0;
      }
      .logo-min {
        opacity: 1;
      }
    }

    &.logo-bg-dark {
    }
  }
</style>
