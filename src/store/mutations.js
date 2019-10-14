export default {
  changeCity(state, city){
    state.city = city;
    try{
      localStorage.city = city;
    }catch(e){
      throw new Error('localStorage can’t use.');
    }  
  },
  getDetailData(state, data){
    state.detailData = data;
  }
}