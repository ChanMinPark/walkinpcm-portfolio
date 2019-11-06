<template>
  <div id="portfolio">

  </div>
</template>

<script>
  export default {
    data () {
      return {
        portfolioList: [
          {
            name: 'A+E Networks',
            description: `
              <p>
                글로벌 미디서 회사인 A+E Networks를 소개하고, 채널 및 프로그램을 안내합니다.
              </p>
            `,
            link: 'http://www.aenetworks.co.kr',
            image: '/img/portfolio__A+E.png'
          },
          {
            name: 'Queenssmile',
            description: `
              <p>
                다양한 페스티벌의 푸드존의 주문 문제를 해결하기 위한 웹서비스 입니다.
              </p>
            `,
            link: 'https://www.queenssmile.co.kr',
            image: '/img/portfolio__Queenssmile.png'
          },
          {
            name: '건국대학교 기프트샵',
            description: `
              <p>
                건국대학교의 굿즈를 판매하는 온라인몰 입니다.
              </p>
            `,
            link: 'http://kugift.kr',
            image: '/img/portfolio__Kugift.png'
          },
          {
            name: '법무법인 세움',
            description: `
              <p>
                법무법인 세움의 소개 웹사이트 입니다.
              </p>
            `,
            link: 'https://www.seumlaw.com',
            image: '/img/portfolio__SEUM.png'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped></style>