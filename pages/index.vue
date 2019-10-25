<template>
  <div id="index">
    <div class="container">

      <!-- 임시: 로고 -->
      <section class="nav-logo">
        <div>
          <PCMLogo :isMin="flag.logoMin" />
        </div>
      </section>
      
      <section class="section-1">
        <div class="content">
          <h1 class="introduction">
            Hello :)<br>
            I am<br>
            ChanMin Park.
          </h1>

          <h2 class="description">
            Front-end Developer<br>
            based in South Korea.
          </h2>
        </div>

        <div class="roundsquare-wrapper-1">
          <TheRoundSquare size="md" />
        </div>
        <div class="roundsquare-wrapper-2">
          <TheRoundSquare size="lg" />
        </div>
      </section>

    </div>
  </div>
</template>

<script>
  import PCMLogo from '~/components/PCMLogo'
  import TheRoundSquare from '~/components/TheRoundSquare'

  export default {
    components: {
      PCMLogo,
      TheRoundSquare
    },
    data () {
      return {
        flag: {
          logoMin: false
        }
      }
    }
  }
</script>

<style lang="scss" src="./index.scss">
</style>
