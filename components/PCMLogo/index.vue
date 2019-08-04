<template>
  <div
    :class="[
      'walkinpcm-logo',
      { 'logo-bg-dark': isBgDark }
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
    border: 1px solid $logo-color-white;

    .logo-www {
      display: inline-block;
      background-color: $logo-color-white;
      color: $logo-color-black;
      padding: 0 1px 0 2px;
    }
    .logo-alkinpcm {
      display: inline-block;
      background-color: $logo-color-black;
      color: $logo-color-white;
      padding: 0 3px 0 2px;
    }

    &.logo-bg-dark {

    }
  }
</style>
