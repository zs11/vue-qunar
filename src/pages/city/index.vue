<template>
  <div>
    <CityHeader></CityHeader>
    <CitySearch :cities="cities"></CitySearch>
    <CityList :cities="cities" :hotCities="hotCities" :letter="letter"></CityList>
    <CityAlphabet :cities="cities" @change="handleLetterChange"></CityAlphabet>
  </div>
</template>

<script>
import CityHeader from '../../components/City/Header';
import CitySearch from '../../components/City/Search';
import CityList from '../../components/City/List';
import CityAlphabet from '../../components/City/Alphabet';
import axios from 'axios';

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data() {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    getCityInfo(){
      axios.get('/api/city.json').then(res => {
        const { success, data } = res.data;
        if(success&&data){
          const { cities, hotCities } = data;
          this.cities = cities;
          this.hotCities = hotCities;
        }
      })
    },
    handleLetterChange(letter){
      this.letter = letter;
    }
  },
  mounted(){
    this.getCityInfo();
  }
}
</script>

<style scoped>

</style>