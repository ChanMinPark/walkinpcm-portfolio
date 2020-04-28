<template>
  <div id="index">
    
    <!-- 커버 섹션 -->
    <section class="section-box section-1">
      <div class="container">
        <div class="content">
          <h1 class="introduction">
            <div class="text-fadeup" :class="{ 'show': flag.coverLoading1 }">
              <span class="intro-hello">Hello <span class="smile">:)</span></span>
            </div>
            <div class="text-fadeup" :class="{ 'show': flag.coverLoading2 }">
              I am<br>
              <span class="intro-name">ChanMin Park.</span>
            </div>
          </h1>

          <h2 class="description text-fadeup" :class="{ 'show': flag.coverLoading3 }">
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

    <section class="section-box section-hashtag">
      <div class="container">
        <h1 class="section-title">Hash Tags</h1>
        <div class="tag-list">
          <ul class="list-unstyled d-flex flex-wrap">
            <li>#Developer</li>
            <li>#FrontEnd</li>
            <li>#HTML</li>
            <li>#CSS</li>
            <li>#Javascript</li>
            <li>#Vue.js</li>
            <li>#AWS</li>
            <li>#Serverless</li>
            <li>#LikeCommunity</li>
          </ul>
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

      <div class="roundsquare-wrapper-1">
        <TheRoundSquare size="lg" />
      </div>
      <div class="roundsquare-wrapper-2">
        <TheRoundSquare size="md" />
      </div>
    </section>

    <!-- 블로그, 링크드인, 깃허브 섹션 -->
    <section class="section-box section-3">
      <div class="container">
        <h1 class="section-title">Links</h1>
        <ul class="list-unstyled row links-list">
          <li class="col-4">
            <div class="icon-box">
              <a href="https://blog.walkinpcm.com" target="_blank"><img src="~assets/img/icon/blogger.svg" alt="Blog"></a>
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

      <div class="roundsquare-wrapper-1">
        <TheRoundSquare size="md" />
      </div>
    </section>

    <!-- 발표 소개 섹션 -->
    <section class="section-box section-4">
      <div class="container">
        <h1 class="section-title">Community</h1>
        <p>
          개발자들의 공유의 문화를 정말 좋아합니다.<br>
          오랜 세월 동안, 많은 개발자들이 서로가 배운 것을 나누고 함께 성장하는 문화가 자리 잡힌 것 같습니다.<br>
          덕분에 저는 많은 개발 커뮤니티에 참석하면서 많은 지식들을 배울 수 있었습니다.
        </p>
        <p>
          정기적으로 참석하는 커뮤니티로는 <span class="text-highlight text-awskrug"><a href="https://www.facebook.com/groups/awskrug" target="_blank">AWSKRUG Serverless 소모임</a></span>이 있습니다. 소모임에서는 서로의 실무 경험이나 학습 내용을 공유하는 자리를 달마다 가지고 있습니다.<br>
          이런 자리는 스스로를 자극시키는 좋은 원동력이 됩니다.
        </p>
        <p>
          저 또한, 다른 사람들에게 좋은 자극이 되었으면 하는 마음에 몇번의 좋은 기회를 얻어서 지식을 공유하는 자리를 가졌습니다. 앞으로도 이런 자리를 더 가지고 싶은 바람입니다.
        </p>

        <div v-swiper:ptSwiper="swiperOption">
          <div class="swiper-wrapper">
            <div class="swiper-slide presentation-box" v-for="(item, index) in presentations" :key="index">
              <div class="pb__title"><span class="text-highlight">{{ item.title }}</span></div>
              <div class="pb__pic">
                <img :src="item.image" :alt="item.title">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-box section-5">
      <div class="container">
        <h1 class="section-title">Portfolio</h1>
        <p>
          참여했던 프로젝트들을 소개합니다 !<br>
          아래 이미지를 눌러주세요~
        </p>
        <div class="portfolio-cover">
          <nuxt-link :to="{ name: 'portfolio' }">
            <img src="/img/portfolio-cover.png" alt="Move to portfolio page.">
          </nuxt-link>
        </div>
      </div>
    </section>

    <!-- TODO: Contact 섹션 (이메일) -->
    <!-- <section class="section-box section-6">
      <div class="container">
        <h1 class="section-title">Let's Talk</h1>
        <div>

        </div>
      </div>
    </section> -->
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import TheRoundSquare from '~/components/TheRoundSquare/index.vue'

  export default Vue.extend ({
    components: {
      TheRoundSquare
    },
    data () {
      return {
        flag: {
          coverLoading1: false,
          coverLoading2: false,
          coverLoading3: false
        },
        presentations: [
          {
            title: 'AWS Summit Seoul 2018',
            image: '/img/presentation-1.jpg'
          },
          {
            title: 'AWSKRUG Serverless 소모임',
            image: '/img/presentation-2.jpg'
          },
          {
            title: '클라우드 세미나 (NDS & AWS)',
            image: '/img/presentation-3.jpg'
          }
        ],
        swiperOption: {
          loop: false,
          slidesPerView: 3,
          centeredSlides: false,
          spaceBetween: 40,
          breakpoints: {
            // when window width is <= 992px
            992: {
              slidesPerView: 2.2,
              spaceBetween: 35
            },
            768: {
              slidesPerView: 1.7,
              spaceBetween: 30
            },
            480: {
              slidesPerView: 1.2,
              spaceBetween: 25
            }
          }
        }
      }
    },
    mounted () {
      // 커버 섹션의 트랜지션 효과를 위한 flag 설정
      setTimeout(() => {
        this.flag.coverLoading1 = true
      }, 500)
      setTimeout(() => {
        this.flag.coverLoading2 = true
      }, 1800)
      setTimeout(() => {
        this.flag.coverLoading3 = true
      }, 2700)
    }
  })
</script>

<style lang="scss" src="./index.scss">
</style>
