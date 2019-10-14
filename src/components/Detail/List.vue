<template>
  <div>
    <div :class="detailListStyle"
    v-for="(item,index) of list"
    :key="index">
      <div class="item-tile border-bottom">
        <span class="item-title-icon" v-if="isBlock"></span>
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-children">
        <DetailList :list="item.children" :isBlock="false"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array,
    isBlock: {
      type: Boolean,
      default(){
        return true;
      }
    }
  },
  components: {
  },
  data(){
    return {
    }
  },
  methods: {
    
  },
  computed: {
    detailListStyle(){
      if(this.isBlock){
        return 'detail-list-item detail-list-block';
      }
      else{
        return 'detail-list-item';
      }
    }
  }
}
</script>
  
<style scoped>
  .detail-list-item{
    background: #fff;
  }
  .item-title-icon{
    display: inline-block;
    position: relative;
    left: .08rem;
    top: .08rem;
    width: .36rem;
    height: .36rem;
    background: url('../../assets/photo/p1.png') 0 -.45rem no-repeat;
    margin-right: .1rem;
    background-size: .4rem 3rem;
  }
  .item-tile{
    line-height: .8rem;
    font-size: .32rem;
    padding: 0 .2rem;
  }
  .item-children{
    padding: 0 .1rem;
  }
  .detail-list-block{
    margin-bottom: .2rem;
  }
</style>