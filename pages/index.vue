<template>
  <div id="index">
    <div class="container">

      <!-- 로고 -->
      <section class="nav-logo">
        <div>
          <!-- TODO: 스크롤 내리면 축소형 로고로 변하게 하기. -->
          <PCMLogo :isMin="flag.logoMin" />
        </div>
      </section>
      
      <!-- 커버 섹션 -->
      <section class="section-1">
        <div class="content">
          <h1 class="introduction">
            <span class="intro-hello">Hello <span class="smile">:)</span></span><br>
            I am<br>
            <span class="intro-name">ChanMin Park.</span>
          </h1>

          <h2 class="description">
            Front-end Developer
          </h2>
        </div>

        <div class="roundsquare-wrapper-1">
          <TheRoundSquare size="md" />
        </div>
        <div class="roundsquare-wrapper-2">
          <TheRoundSquare size="lg" />
        </div>
      </section>

      <!-- 기술 스택 섹션 -->
      <!-- 블로그, 링크드인, 깃허브 섹션 -->
      <!-- 발표 소개 섹션 -->
      <!-- 포트폴리오 섹션 (간략 소개 & 전용 페이지로 이동) -->
      <!-- Contact 섹션 (이메일) -->
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
