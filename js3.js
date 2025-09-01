let year1,year2,month1,month2,day1,day2 =0;
function age(year1,month1,day1,year2,month2,day2){
if((year1>year2)||(year1==year2 &&month1>month2)||(year1==year2 && month1==month2 && day1>day2)){
    return Big1 ;
}
else{
    return big2;
}
console.log(age(2000,2,3,1999,2,1));
