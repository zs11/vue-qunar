<template>
  <div class="list" ref="wrapper">
    <div @click="handleCityClick">
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hotCities" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id">
            {{innerItem.name}}
          </div>
        </div>
      </div>   
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import { mapState, mapActions } from 'vuex';

export default {
  name: "CityList",
  props: {
    cities: Object,
    hotCities: Array,
    letter: String,
  },
  methods: {
    handleCityClick(e){
      // this.$store.dispatch('changeCity', e.target.innerText);
      this.changeCity(e.target.innerText);
      this.$router.push({path: '/'});
    },
    ...mapActions(['changeCity'])
  },
  computed: {
    ...mapState(['city'])
  },
  watch: {
    letter() {
      const element = this.$refs[this.letter];
      this.scroll.scrollToElement(element[0]);
      // console.log(element[0]);
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper);
  },
}
</script>

<style scoped>
  .list{
    position: absolute;
    left: 0;
    right: 0;
    top: 1.58rem;
    bottom: 0;
    overflow: hidden;
  }
  .title{
    line-height: .54rem;
    background: #eee;
    padding-left: .2rem;
    color: #666;
  }
  .border-topbottom::before{
    border-color: #ccc;
  }
  .border-topbottom::after{
    border-color: #ccc;
  }
  .button-list{
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    padding: .1rem .6rem .1rem .1rem;

  }
  .button-wrapper{
    width: 33.3%;
  }
  .button{
    margin: .1rem;
    padding: .1rem;
    text-align: center;
    border: .02rem solid #ccc;
    border-radius: .06rem;
  }
  .item{
    line-height: .76rem;
    padding-left: .2rem;
  }
  .border-bottom::before{
    border-color: #ccc;
  }
</style>