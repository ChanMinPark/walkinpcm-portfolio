<template>
  <div id="index">
    <div class="container">

      <!-- 임시: 로고 -->
      <section class="nav-logo">
        <div>
          <PCMLogo />
        </div>
      </section>
      
      <section class="section-1">
        <h1 class="introduction">
          Hello :)<br>
          I am<br>
          ChanMin Park.
        </h1>

        <h2 class="description">
          Front-end Developer<br>
          based in South Korea.
        </h2>
      </section>

    </div>
  </div>
</template>

<script>
  import PCMLogo from '~/components/PCMLogo'

  export default {
    components: {
      PCMLogo
    }
  }
</script>

<style lang="scss" src="./index.scss">
</style>
