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
          <div class="text-box col-12 col-md-6">
            <!-- title -->
            <div class="text-box__title"><span class="text-highlight">{{ item.name }}</span></div>
            <!-- description -->
            <div class="text-box__desc">{{ item.description }}</div>
            <!-- role -->
            <div class="pt-1">- 담당 업무: {{ item.role }}</div>
            <!-- tech -->
            <div class="pt-1">- 관련 기술: {{ item.tech }}</div>
            <!-- remark -->
            <div v-if="item.remark !== ''" class="pt-1">- 비고: {{ item.remark }}</div>
            <!-- link -->
            <div class="text-box__link">
              <a :href="item.link" target="_blank">사이트로 이동 ></a>
              <!-- <a :href="item.link" target="_blank">{{ item.link }}</a> -->
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

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend ({
    data () {
      return {
        portfolioList: [
          {
            name: 'A+E Networks',
            description: `글로벌 미디어 회사인 A+E Networks를 소개하고, 채널 및 프로그램을 안내합니다.`,
            link: 'http://www.aenetworks.co.kr',
            image: '/img/portfolio__AE.png',
            role: '퍼블리싱 및 프론트 엔드',
            tech: 'HTML, CSS, Javascript, Nuxt.js(Vue.js)',
            remark: '패밀리 사이트인 ‘History Korea’, ‘Lifetime Korea’, ‘Blog’ 사이트 모두 개발'
          },
          {
            name: 'Queenssmile',
            description: `다양한 페스티벌의 푸드존의 주문 문제를 해결하기 위한 웹서비스 입니다.`,
            link: 'https://www.queenssmile.co.kr',
            image: '/img/portfolio__Queenssmile.png',
            role: '퍼블리싱 및 프론트 엔드, 호스팅 환경 셋팅',
            tech: 'HTML, CSS, Javascript, Nuxt.js(Vue.js), AWS',
            remark: '사용자 사이트 및 관리자(푸드트럭 사장) 사이트 모두 개발'
          },
          {
            name: '건국대학교 기프트샵',
            description: `건국대학교의 굿즈를 판매하는 온라인몰 입니다.`,
            link: 'http://kugift.kr',
            image: '/img/portfolio__Kugift.png',
            role: '퍼블리싱 및 프론트 엔드',
            tech: 'HTML, CSS, Javascript, Nuxt.js(Vue.js)',
            remark: ''
          },
          {
            name: '법무법인 세움',
            description: `법무법인 세움의 소개 웹사이트 입니다.`,
            link: 'https://www.seumlaw.com',
            image: '/img/portfolio__SEUM.png',
            role: '프로젝트 매니징, 퍼블리싱 및 프론트 엔드',
            tech: 'HTML, CSS, Javascript, Nuxt.js(Vue.js)',
            remark: ''
          }
        ]
      }
    }
  })
</script>

<style lang="scss" scoped src="./index.scss"></style>