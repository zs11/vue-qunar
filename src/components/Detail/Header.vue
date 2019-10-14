<template>
  <div>
    <router-link tag="div" to="/" class="header-abs"
    v-show="showAbs"><div class="iconfont left-arrow">&#xe624;</div></router-link>
    <div class="header-fixed" v-show="showFixed"
    :style="opacityStyle">
      <router-link to="/">
        <div class="iconfont left-arrow">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  components: {
  },
  data(){
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll(){
      const top = document.documentElement.scrollTop;
      if(top > 60){
        if(top < 180){
          const opacity = top / 180;
          this.opacityStyle = {
            opacity
          };
        }
        this.showAbs = false;
      }
      else{
        this.showAbs = true;
      }
    }
  },
  computed: {
    showFixed() {
      return !this.showAbs;
    }
  },
  activated() {
    window.addEventListener('scroll',this.handleScroll);
  },
  deactivated() {
    window.removeEventListener('scroll',this.handleScroll);
  }
}
</script>
  
<style scoped>
  .header-abs{
    position: absolute;
    left: .2rem;
    top: .2rem;
    width: .7rem;
    height: .7rem;
    border-radius: .4rem;
    background: rgba(0, 0, 0, .6);
    text-align: center;
    line-height: .7rem;
  }
  .left-arrow{
    color: #fff;
    font-size: .3rem;
  }
  .header-fixed{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    overflow: hidden;
    height: .86rem;
    line-height: .86rem;
    text-align: center;
    color: #fff;
    background: #00bcd4;
    font-size: .32rem;
    z-index: 2;
  }
  .header-fixed .left-arrow{
    position: absolute;
    width: .64rem;
    text-align: center;
    font-size: .4rem;
    top: 0;
    left: .05rem;
    color: #fff;
  }
</style>