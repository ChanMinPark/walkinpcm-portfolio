<template>
  <div class="comp-global-alert" :class="{ 'hide': isHide }">
    <!-- Background Layer -->
    <div class="cga__bg-layer">

    </div>

    <!-- Alert Box -->
    <div class="cga__alert-box">
      <!-- title -->
      <div>
        Alert Title
      </div>

      <!-- content -->
      <div>
        Alert Content
      </div>

      <!-- button group -->
      <div>
        <button type="button" @click="handleCancel">Cancel</button>
        <button type="button" @click="handleOkay">Okay</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    resolveMsg: {
      type: String|Object,
      default: undefined
    },
    rejectMsg: {
      type: String|Object,
      default: undefined
    },
  },
  data () {
    return {
      isHide: true
    }
  },
  mounted () {
    setTimeout(() => {
      this.isHide = false
    }, 100)
  },
  methods: {
    handleClose () {
      this.$globalAlert.disappear(this)
    },
    handleOkay () {
      this.$emit('resolve', this.resolveMsg)
    },
    handleCancel () {
      this.$emit('resolve', this.rejectMsg)
    },
  }
}
</script>

<style lang="scss" scoped>
.comp-global-alert {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  transition: opacity .15s ease;

  &.hide {
    opacity: 0;
  }

  .cga__bg-layer {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: .3;
  }

  .cga__alert-box {
    position: relative;
    z-index: 2;
    width: 500px;
    min-height: 300px;
    max-height: 500px;
    background-color: #fff;
    color: #000;
    padding: 20px;
    box-shadow: 2px 2px 5px #999;
    border-radius: 4px;
  }

  &+.comp-global-alert {
    .cga__alert-box {
      // top: 20px;
      // left: 20px;
      transform: translate(40px, 40px);
    }
  }
}
</style>