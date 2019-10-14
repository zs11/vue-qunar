<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont left-arrow">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
    </div>
    <router-link to="/city">
      <div class="header-right">{{this.city}}
        <span class="iconfont down-arrow">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Header',
  data(){
    return {

    }
  },
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
  .header
    display flex
    line-height .86rem
    background #00bcd4
    color #fff
    .header-left
      width .64rem
      .left-arrow
        text-align center
        font-size .4rem
    .header-right
      min-width 1.04rem
      padding 0 .1rem
      text-align center
      color #fff
      .down-arrow
        margin-left -.04rem
        font-size .24rem
    .header-input
      flex 1
      background #fff
      height .64rem
      line-height .64rem
      border-radius .1rem
      margin-top .12rem
      margin-left .2rem
      color #ccc
      padding-left .2rem
</style>