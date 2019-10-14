<template>
  <div>
    <div class="recommend-title">
      热销推荐
    </div>
    <ul>
      <router-link  tag="li" class="recommend-item border-bottom"
        v-for="item of recommendList"
        :key="item.id"
        :to="'/detail/'+item.id">
          <img class="recommend-img"  :src="item.imgUrl"/>
          <div class="recommend-info">
            <p class="recommend-info-title">{{item.title}}</p>
            <p class="recommend-info-desc">{{item.desc}}</p>
            <button class="recommend-button">查看详情</button>
          </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>
  .recommend-title{
    margin-top: .2rem;
    line-height: .8rem;
    background: #eee;
    text-indent: .2rem;
  }
  .recommend-item{
    display: flex;
    overflow: hidden;
    height: 2rem;
    padding: .1rem;
  }
  .recommend-img{
    width: 1.7rem;
    height: 1.7rem;
    padding: .1rem;
  }
  .recommend-info{
    flex: 1;
    padding: .1rem;
    min-width: 0;
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
  .recommend-button{
    line-height: .44rem;
    background: #ff9300;
    padding: 0 .2rem;
    border-radius: .06rem;
    margin-top: .16rem;
    color: #fff;
  }
</style>