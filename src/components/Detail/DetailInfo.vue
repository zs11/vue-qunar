<template>
  <div class="detail-info">
    <div class="detail-info-card border-bottom">
      <div>
        <span class="detail-card-score">5.0</span>
        <span class="detail-card-text">分</span>
        <span class="detail-card-desc">非常棒</span>
      </div>
      <div>
        <span class="detail-card-comment">48752条评论</span>
        <span class="detail-card-comment">30条攻略</span>
      </div>
    </div>
    <div class="detail-info-address">
      <p class="detail-info-address-desc">广东省深圳市南山区深南大道9037号</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailInfo',
  components: {
  },
  data(){
    return{
    }
  },
  methods: {
   
  }
}
</script>

<style scoped>
  .detail-info{
    position: relative;
    top: -.12rem;
    padding: .1rem .2rem 0 .2rem;
    background: #fff;
    border-radius: .16rem .16rem 0 0;
    margin-bottom: .14rem;
  }
  .detail-info-card{
    padding: .2rem;
  }
  .detail-card-score{
    font-size: .45rem;
    color: #ff8300;
    line-height: .45rem;
  }
  .detail-card-text{
    font-size: .28rem;
    color: #ff8830;
    line-height: .48rem;
  }
  .detail-card-desc{
    font-size: .28rem;
    color: #ff8300;
    line-height: .48rem;
    margin-left: .2rem;
  }
  .detail-card-comment{
    font-size: .24rem;
    color: #9e9e9e;
    line-height: .32rem;
    margin-right: .2rem;
  }
  .detail-info-address{
    padding: .2rem 0;
    line-height: .36rem;
    color: #212121;
  }
  .detail-info-address-desc{
    padding-right: .56rem;
    position: relative;
    padding-left: .16rem;
  }
</style>