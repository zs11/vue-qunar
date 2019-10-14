<template>
  <main class="detail-contianer" ref="detail">
    <DetailBanner />
    <DetailHeader />
    <DetailInfo />
    <div class="detail-content">
      <DetailList :list="detailData.detailList"/>
    </div>
  </main>
</template>

<script>
import DetailBanner from '../../components/Detail/DetailBanner';
import DetailHeader from '../../components/Detail/Header';
import DetailList from '../../components/Detail/List';
import DetailInfo from '../../components/Detail/DetailInfo';
// import BScroll from 'better-scroll';
import axios from 'axios';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList,
    DetailInfo
  },
  data() {
    return {
      
    }
  },
  methods: {
    getDetailListInfo(){
      axios.get('/api/detail.json',{
        params: {
          id: this.$route.params.id
        }
      }).then(res => {
        const { success, data } = res.data;
        if(success&&data){
          this.getDetailData(data);
        }
      })
    },
    ...mapActions(['getDetailData'])
  },
  computed: {
    ...mapState(['detailData'])
  },
  mounted(){
    // this.scroll = new BScroll(this.$refs.detail);
  },
  activated(){
    this.getDetailListInfo();
  }
}
</script>

<style scoped>
  .detail-contianer{
    background: rgba(192, 192, 192, .2);
  }
</style>