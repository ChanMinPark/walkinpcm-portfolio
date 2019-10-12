<template>
  <div
    :class="[
      'walkinpcm-logo',
      'font-ubuntu',
      { 'logo-bg-dark': flag.isBgDark }
    ]"
  >
    <span class="logo-www">WWW</span><span class="logo-alkinpcm">ALKINPCM</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      flag: {
        isMin: false,
        isBgDark: true
      }
    }
  }
}
</script>

<style lang="scss">
  // 폰트: Ubuntu ( https://fonts.googleapis.com/css?family=Ubuntu&display=swap )
  @import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');
  @mixin font-ubuntu {
    font-family: 'Ubuntu', sans-serif;
  }
  .font-ubuntu {
    @include font-ubuntu();
  }

  $logo-color-black: #000;
  $logo-color-white: #fff;

  .walkinpcm-logo {
    display: inline-block;
    // border: 1px solid $logo-color-white;

    .logo-www {
      display: inline-block;
      background-color: $logo-color-black;
      border: 1px solid $logo-color-black;
      border-right: 0 !important;
      color: $logo-color-white;
      padding: 0 0 0 2px;
    }
    .logo-alkinpcm {
      display: inline-block;
      background-color: $logo-color-white;
      border: 1px solid $logo-color-black;
      border-left: 0px;
      color: $logo-color-black;
      padding: 0 3px 0 1px;
    }

    &.logo-bg-dark {
      .logo-www {
        background-color: $logo-color-white;
        border: 1px solid $logo-color-white;
        color: $logo-color-black;
      }
      .logo-alkinpcm {
        background-color: $logo-color-black;
        border: 1px solid $logo-color-white;
        color: $logo-color-white;
      }
    }
  }
</style>
