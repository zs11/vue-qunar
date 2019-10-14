<template>
  <div>
    <div class="recommend-title">
      周末去哪儿
    </div>
    <ul>
      <li class="recommend-item border-bottom"
        v-for="item of WeekendRecommendList"
        :key="item.id">
          <div class="recommend-img-wrapper">
            <img class="recommend-img"  :src="item.imgUrl"/>
          </div>
          <div class="recommend-info">
            <p class="recommend-info-title">{{item.title}}</p>
            <p class="recommend-info-desc">{{item.desc}}</p>
          </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'WeekendRecommend',
  props: {
    WeekendRecommendList: Array
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>
  .recommend-title{
    line-height: .8rem;
    background: #eee;
    text-indent: .2rem;
  }
  .recommend-img-wrapper{
    overflow: hidden;
    height: 0;
    padding-bottom: 37.6%;
  }
  .recommend-img{
    width: 100%;
  }
   .recommend-info{
    padding: .1rem .2rem;
    min-width: 0;
    margin-bottom: .1rem;
  }
  .recommend-info-title{
    line-height: .54rem;
    font-size: .32rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .recommend-info-desc{
    line-height: .46rem;
    color: #ccc;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>