<template>
  <div id="playground">
    <!-- vue-global-custom-alert -->
    <section id="sec__vue-global-custom-alert">
      <div class="container">
        <div class="p-5">
          <button type="button" class="btn btn-primary" @click="handleShowAlert">Show Alert</button>
          <div>
            result message: {{ alertMsg }}
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
      alertMsg: '-',
    }
  },
  methods: {
    async handleShowAlert () {
      const result = await this.$globalAlert.appear({
        resolveMsg: {
          message: 'User click Okay.'
        },
        rejectMsg: {
          message: 'User click Cancel.'
        },
      })
      this.alertMsg = result
    }
  }
}
</script>

<style lang="scss" scoped></style>