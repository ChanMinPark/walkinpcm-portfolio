<template>
  <div class="comp-the-round-square">
    <div class="round-square" :class="[ `size-${size}` ]" :style="{ 'border-color': getColor() }">
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      size: {
        type: String,
        default: 'md'
      },
      color: {
        type: String,
        default: null
      }
    },
    data () {
      return {
        colors: [
          '#e5eec1', '#a2d4ab', '#3eaca8', '#547a82'
        ]
      }
    },
    methods: {
      getColor () {
        if (this.color) {
          return this.color
        } else {
          return this.colors[Math.floor(Math.random() * this.colors.length)]
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .comp-the-round-square {
    display: inline-block;

    .round-square {
      display: inline-block;
      width: 50px;
      height: 50px;
      border-width: 15px;
      border-radius: 20px;
      border-style: solid;

      &.size-sm {
        width: 30px;
        height: 30px;
        border-radius: 12px;
        border-width: 8px;
      }
      &.size-md {
        width: 50px;
        height: 50px;
        border-radius: 20px;
        border-width: 15px;
      }
      &.size-lg {
        width: 70px;
        height: 70px;
        border-radius: 25px;
        border-width: 20px;
      }
    }
  }
</style>