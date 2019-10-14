<template>
  <main class="home-wrapper" ref="wrapper">
    <div>
      <Header />
      <Swiper :swiperList="swiperList"/>
      <Icons :iconList="iconList"/>
      <HomeRecommend :recommendList="recommendList"/>
      <WeekendRecommend :WeekendRecommendList="WeekendRecommendList"/>
    </div>
  </main>
</template>

<script>
import Header from '../../components/Home/Header';
import Swiper from '../../components/Home/Swiper';
import Icons from '../../components/Home/Icons';
import HomeRecommend from '../../components/Home/Recommend';
import WeekendRecommend from '../../components/Home/WeekendRecommend';
import BScroll from 'better-scroll';
import axios from 'axios';
import { mapState } from 'vuex';

export default {
  name: 'home',
  components: {
    Header,
    Swiper,
    Icons,
    HomeRecommend,
    WeekendRecommend
  },
  data() {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      WeekendRecommendList: []
    }
  },
  methods: {
    getHomeInfo() {
      axios.get('/api/mock.json?city=' + this.city).then(res => {
        const { success, data }  = res.data;
        if(success && data){
          const { swiperList, iconList, recommendList, WeekendRecommendList } = data;
          this.swiperList = swiperList;
          this.iconList = iconList;
          this.recommendList = recommendList;
          this.WeekendRecommendList = WeekendRecommendList;
        }
      });
    }
  },
  computed: {
    ...mapState(['city'])
  },
  mounted() {
    this.getHomeInfo();
    this.lastCity = this.city;
    this.scroll = new BScroll(this.$refs.wrapper);
  },
  activated() {
    if(this.lastCity !== this.city){
      this.lastCity = this.city;
      this.getHomeInfo();
    }
  }
}
</script>

<style scoped>
  .home-wrapper{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow: hidden;
  }
</style>