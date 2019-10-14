let defaultCity = "深圳";

try{
  if(localStorage.city){
    defaultCity = localStorage.city;
  }
}catch(e){
  throw new Error('localStorge can’t use.')
}

export default {
  city: defaultCity,
  detailData: {}
}