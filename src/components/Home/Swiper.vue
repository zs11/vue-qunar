<template>
  <div class="swiper-wrapper" v-if="swiperList.length">
    <swiper :options="swiperOption">
    <swiper-slide v-for="item of swiperList" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'SwiperTool',
  props: {
    swiperList: Array
  },
  data() {
    return { 
      swiperOption: {
        pagination: { el: '.swiper-pagination' },
        loop: true,
        autoplay: true,
        speed: 2000,
      },
    } 
  },
}
</script>

<style scoped>
  .swiper-wrapper >>> .swiper-pagination-bullet-active {
    background: #fff
  }
  .swiper-wrapper {
    width: 100%;
    height: 30.45vw;
    background: #eee;
  }
  .swiper-img {
    width: 100%;
  }
</style>