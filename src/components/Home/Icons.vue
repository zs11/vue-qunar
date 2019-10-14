<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <img class="icon-img" :src="item.imgUrl"/>
          <p class="icon-desc">{{item.desc}}</p>
        </div> 
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    iconList: Array
  },
  data() {
    return {
      swiperOption: {
         pagination: { el: '.swiper-pagination' }
      },
    }
  },
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item,index) => {
        const page = Math.floor(index/8);
        if(!pages[page]){
          pages[page] = [];
        }
        pages[page].push(item);
      })
      return pages;
    }
  }
}
</script>

<style scoped>
  .icons{
    /* height: 30vh; */
    height: 0;
    padding-bottom: 56%;
  }
  .icons >>> .swiper-slide{
    display: flex;
    flex-wrap: wrap;
  }
  .icon{
    overflow: hidden;
    width: 25%;
    padding: .26rem;
    box-sizing: border-box;
    text-align: center;
    position: relative;
  }
  .icon-img{
    width: 100%;
  }
  .icon-desc{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    padding: 0 .05rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .swiper-pagination{
    position: relative;
    padding-top: .4rem;
  }
</style>