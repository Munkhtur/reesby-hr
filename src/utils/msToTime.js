const zeroFill =(num)=>{
    if(num < 10){
        return '0' + num
    }
    return num
}
 function msToTime(s) {
    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;
  
    return zeroFill(hrs) + ':' + zeroFill(mins) + ':' + zeroFill(secs);
  }

  export default msToTime

