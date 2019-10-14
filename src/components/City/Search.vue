<template>
  <div>
    <div class="search" >
      <input class="search-input" type="text" placeholder="输入城市名或拼音" v-model="keyword"/>
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul @click="handleCityClick">
        <li v-for="item of list" :key="item.id" class="serach-item border-bottom">{{item.name}}</li>
        <li class="serach-item border-bottom" v-show="hasData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import { mapActions } from 'vuex';

export default {
  name: 'Search',
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  methods: {
    handleCityClick(e){
      // this.$store.dispatch('changeCity', e.target.innerText);
      this.changeCity(e.target.innerText);
      this.$router.push('/');
    },
    ...mapActions(['changeCity'])
  },
  computed: {
    hasData(){
      return !this.list.length;
    }
  },
  watch: {
    keyword() {
      if(this.timer){
        clearTimeout(this.timer);
      }
      if(!this.keyword){
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for(let i in this.cities){
          this.cities[i].forEach((value) => {
            if(value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1){
                result.push(value);
              }
          })
        }
        this.list = result;
      }, 200);
    }
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.search);
  }
}
</script>

<style scoped>
  .search{
    height: .72rem;
    padding: 0 .3rem;
    background: #00bcd4;
  }
  .search-input{
    width: 100%;
    height: .62rem;
    text-align: center;
    border-radius: .06rem;
    box-sizing: border-box;
    padding: 0 .2rem
  }
  .search-content{
    position: absolute;
    left: 0;
    right: 0;
    top: 1.58rem;
    bottom: 0;
    z-index: 1;
    background: #eee;
  }
  .serach-item{
    line-height: .62rem;
    padding-left: .2rem;
    color: #666;
    background: #fff;
  }
</style>