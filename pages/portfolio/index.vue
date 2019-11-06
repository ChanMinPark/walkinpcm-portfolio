<template>
  <div id="portfolio">
    <section class="section-box">
      <div class="container">
        <h1 class="section-title">Portfolio</h1>
      </div>
    </section>

    <section class="section-box" v-for="(item, index) in portfolioList" :key="index">
      <div class="container">
        <div class="content-box row">
          <!-- Text box (front) -->
          <div class="text-box col-12 col-md-6 text-right">
            <!-- title -->
            <div class="text-box__title"><span class="text-highlight">{{ item.name }}</span></div>
            <!-- description -->
            <div class="text-box__desc">{{ item.description }}</div>
            <!-- link -->
            <div class="text-box__link">
              <a :href="item.link" target="_blank">사이트로 이동 ></a>
            </div>
          </div>

          <!-- Image box -->
          <div class="image-box col-12 col-md-6">
            <img :src="item.image" :alt="item.name">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        portfolioList: [
          {
            name: 'A+E Networks',
            description: `글로벌 미디서 회사인 A+E Networks를 소개하고, 채널 및 프로그램을 안내합니다.`,
            link: 'http://www.aenetworks.co.kr',
            image: '/img/portfolio__A+E.png'
          },
          {
            name: 'Queenssmile',
            description: `다양한 페스티벌의 푸드존의 주문 문제를 해결하기 위한 웹서비스 입니다.`,
            link: 'https://www.queenssmile.co.kr',
            image: '/img/portfolio__Queenssmile.png'
          },
          {
            name: '건국대학교 기프트샵',
            description: `건국대학교의 굿즈를 판매하는 온라인몰 입니다.`,
            link: 'http://kugift.kr',
            image: '/img/portfolio__Kugift.png'
          },
          {
            name: '법무법인 세움',
            description: `법무법인 세움의 소개 웹사이트 입니다.`,
            link: 'https://www.seumlaw.com',
            image: '/img/portfolio__SEUM.png'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped src="./index.scss"></style>