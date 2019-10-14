<template>
 <ul class="alphabet-list">
   <li class="alphabet-list-item" v-for="item of letters" :key="item"
    @click="handleLetterClick"
    @touchstart.prevent="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
    :ref="item" >
     {{item}}
   </li>
 </ul>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object
  },
  data() {
    return{
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated(){
    this.startY = this.$refs['A'][0].offsetTop;
  },
  computed: {
    letters() {
      const letters = [];
      for(let i in this.cities){
        letters.push(i);
      }
      return letters;
    }
  },
  methods: {
    handleLetterClick(e){
      this.$emit('change',e.target.innerText);
    },
    handleTouchStart(){
      this.touchStatus = true;
    },
    handleTouchMove(e){
      if(this.touchStatus){
        if(this.timer){
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(()=>{
          const touchY = e.touches[0].clientY - 80;
          const index = Math.floor((touchY - this.startY) / 20);
          if(index >= 0 && index < this.letters.length){
            this.$emit('change',this.letters[index]);
          }
        },10);
      }
    },
    handleTouchEnd(){
      this.touchStatus = false;
    }
  }
}
</script>

<style scoped>
  .alphabet-list{
    position: absolute;
    top: 1.56rem;
    right: .1rem;
    bottom: 0;
    width: .4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .alphabet-list-item{
    line-height: .4rem;
    text-align: center;
    color: #00bcd4;
    font-size: .3rem;
  }
</style>