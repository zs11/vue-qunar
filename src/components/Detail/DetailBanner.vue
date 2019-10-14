<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="detailData.bannerImage"/>
      <div class="banner-info">
        <div class="banner-title">{{detailData.sightName}}</div>
        <div class="banner-number"> <span class="iconfont banner-icon">&#xe692;</span>{{length}}</div>
      </div>
    </div>
    <CommonFade>
      <CommonGallary :imgs="detailData.gallaryImage" v-show="showGallary"
        @close="handleGallaryClose"/>
    </CommonFade>
  </div>
</template>

<script>
import CommonGallary from '../../components/Common/Gallary';
import CommonFade from '../../components/Common/Fade';
import { mapState } from 'vuex';

export default {
  name: 'DetailBanner',
  components: {
    CommonGallary,
    CommonFade
  },
  data(){
    return{
      showGallary: false,
    }
  },
  methods: {
    handleBannerClick(){
      this.showGallary = true;
    },
    handleGallaryClose(){
       this.showGallary = false;
    }
  },
  computed: {
    ...mapState(['detailData']),
    length(){
      return this.detailData.gallaryImage ?  this.detailData.gallaryImage.length : 0;
    }
  }
}
</script>

<style scoped>
  .banner{
    position: relative;
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;
  }
  .banner-img{
    width: 100%;
  }
  .banner-info{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: .6rem;
    display: flex;
    color: #fff;
    /* background-image: linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.8)); */
  }
  .banner-title{
    flex: 1;
    font-size: .32rem;
    padding: .2rem;
  }
  .banner-number{
    padding: 0 .32rem;
    height: .46rem;
    line-height: .46rem;
    border-radius: .2rem;
    margin: .3rem .1rem 0 0;
    font-size: .24rem;
    background: rgba(0, 0, 0, .8);
  }
  .banner-icon{
    font-size: .24rem;
    margin-right: .1rem;
  }
</style>