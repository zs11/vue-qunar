export default {
  changeCity(ctx, city){
    ctx.commit('changeCity', city);
  },
  getDetailData(ctx, data){
    ctx.commit('getDetailData', data);
  }
}