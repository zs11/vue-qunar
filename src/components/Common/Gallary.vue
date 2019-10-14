<template>
  <div class="grallary-container" @click="handleGallaryClick">
    <div class="grallary-wrapper">
      <swiper :options="swiperOption">
      <swiper-slide v-for="item of imgs" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data(){
    return{
      swiperOption: {
        pagination: { 
          el: '.swiper-pagination',
          type : 'fraction',
          },
          observer:true,
          observeParents:true,
      }
    }
  },
  methods: {
    handleGallaryClick(){
      this.$emit('close');
    }
  }
}
</script>

<style scoped>
  .grallary-container >>> .swiper-container{
    overflow: inherit;
  }
  .grallary-container{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 99;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #000;
  }
  .grallary-wrapper{
    width: 100%;
    height: 0;
    padding-bottom: 55%;
  }
  .swiper-img{
    width: 100%;
  }
  .swiper-pagination{
    color: #fff;
    font-size: .36rem;
    bottom: -3rem;
  }
</style>