<template>
  <div id="the-navigation">
    <!-- 로고 -->
    <div class="nav-logo" @click="handleClickLogo">
      <div>
        <PCMLogo :isMin="flag.logoMin" />
      </div>
    </div>
  </div>
</template>

<script>
  import PCMLogo from '~/components/PCMLogo'

  export default {
    components: {
      PCMLogo
    },
    data () {
      return {
        flag: {
          logoMin: false
        }
      }
    },
    mounted () {
      // 스크롤 내리면 작은 로고로 바뀌귀 위한 flag 설정
      if (window) {
        window.addEventListener('scroll', () => {
          if (window.scrollY > 50) {
            this.flag.logoMin = true
          } else if (window.scrollY === 0) {
            this.flag.logoMin = false
          }
        })
      }
    },
    methods: {
      handleClickLogo () {
        // TODO: 메인페이지에서는 상단으로 이동, 이외 페이지에서는 메인페이지로 이동시킴.
        this.$router.push({ name: 'index' })
      }
    }
  }
</script>

<style lang="scss" scoped>
#the-navigation {
  .nav-logo {
    position: fixed;
    top: 20px;
    left: 15px;
    z-index: 999;
  }
}
</style>