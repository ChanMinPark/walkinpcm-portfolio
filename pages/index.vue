<template>
  <div id="index">
    <!-- 로고 -->
    <section class="nav-logo">
      <div>
        <!-- TODO: 스크롤 내리면 축소형 로고로 변하게 하기. -->
        <PCMLogo :isMin="flag.logoMin" />
      </div>
    </section>
    
    <!-- 커버 섹션 -->
    <section class="section-box section-1">
      <div class="container">
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
      </div>
    </section>

    <!-- 기술 스택 섹션 -->
    <section class="section-box section-2">
      <div class="container">
        <h1 class="section-title">Tech Story</h1>
        <p>
          UI 라이브러리로 <strong class="text-highlight">Vue.js</strong>를 이용합니다. 정확하게는 프레임워크로 <strong class="text-highlight">Nuxt.js</strong>를 주로 이용합니다.<br>
          경험했던 프로젝트들의 특성상 SEO를 위해서 SSR이 필수적이었는데, Router, State management 등이 잘 갖춰진 Nuxt.js는 상용 웹어플리케이션을 만들기에 충분했습니다.
        </p>
        <p>
          최근에는 Front-end 개발 역량을 넓히기 위해서 <strong class="text-highlight">React.js</strong>와 <strong class="text-highlight">Typescript</strong>를 조금씩 익히고 있습니다.
        </p>
        <p>
          Front-end 개발자지만, <strong class="text-highlight">AWS</strong>에 관심이 많습니다.<br>
          단순히 Front-end만 개발하기보다, 웹어플리케이션이 운영되기 위한 전체에 대해서 알아보는게 재미가 있습니다.<br>
          특히 <strong class="text-highlight">Serverless 분야</strong>에 관심이 많습니다. 전문적으로 Back-end 기술에 대해서 알아보기에는 Back-end 기술이 너무 넓고 깊이 있어서 선뜻 접근하기 어렵습니다.
          하지만 AWS Serverless Service들은 Back-end 기술을 몰라도 쉽게 비용 효율적이면서 고가용성인 Back-end를 구축할 수 있게 해주기 때문에 큰 매력을 느끼고 있습니다.
        </p>
      </div>
    </section>

    <!-- 블로그, 링크드인, 깃허브 섹션 -->
    <section class="section-box section-3">
      <div class="container">
        <h1 class="section-title">Links</h1>
        <ul class="list-unstyled row links-list">
          <li class="col-4">
            <div class="icon-box">
              <a href="https://walkinpcm.blogspot.com" target="_blank"><img src="~assets/img/icon/blogger.svg" alt="Blog"></a>
            </div>
          </li>
          <li class="col-4">
            <div class="icon-box">
              <a href="https://github.com/ChanMinPark" target="_blank"><img src="~assets/img/icon/github.svg" alt="Github"></a>
            </div>
          </li>
          <li class="col-4">
            <div class="icon-box">
              <a href="https://www.linkedin.com/in/chanminpark" target="_blank"><img src="~assets/img/icon/linkedin.svg" alt="Linkedin"></a>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <!-- 발표 소개 섹션 -->
    <!-- 포트폴리오 섹션 (간략 소개 & 전용 페이지로 이동) -->
    <!-- Contact 섹션 (이메일) -->
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
