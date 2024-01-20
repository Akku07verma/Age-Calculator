const ageCalculate=()=>{
const today =new Date();
const inputDate = new Date( document.getElementById("date-input").value);
const birthDetails ={
    date: inputDate.getDate(),
    month: inputDate.getMonth()*1,
    year: inputDate.getFullYear(),
};
const currentYear = today.getFullYear();
const currentMonth =today.getMonth();
const currentDate = today.getDate();

if (isFutureDate(birthDetails,currentYear,currentMonth,currentDate)){
    alert("NOT BORN YET");
    displayResult("-","-","-");
    return;
}
const{years,months,days}=CalculateAge(
     birthDetails,
    currentYear,
    currentMonth,
    currentDate
);

displayResult(days,months,years);
};
const isFutureDate=(
    birthDetails,
    currentYear,
    currentMonth,
    currentDate
) =>{
    return(
        birthDetails.year>currentYear ||(birthDetails.year===currentYear &&
            ( birthDetails.month > currentMonth|| birthDetails.month===currentMonth &&
                 (birthDetails.date>currentDate|| birthDetails.date===currentDate)))

    );
};
const CalculateAge =(  birthDetails,
    currentYear,
    currentMonth,
    currentDate)=>{
        let years= currentYear-birthDetails.year
        let months, days;
        if (currentMonth<birthDetails.month){
            years--;
            months=12-(birthDetails.month-currentMonth);
        }else{
            months=currentMonth-birthDetails.month
        }
        if(currentDate< birthDetails.date){
            months--;
            const lastMonth= currentMonth===1?12:
            currentMonth-1;
            const daysInLastMonth=getDaysInMonth(lastMonth,currentYear)
           days= daysInLastMonth-(birthDetails.date-currentDate);
          }else{
            days= currentDate-birthDetails.date;
          }
          return{years,months,days}
        };
        const getDaysInMonth= (month,year)=>{
           let isLeapYear= year%4 === 0 && (year %100=== 0 ||year %400 ===0);
            const getDaysInMonth =[
                31,
                isLeapYear ? 29:28,
                31,
                30,
                31,
                30,
                31,
                31,
                30,
                31,
                30,
                31,
            ];
            return getDaysInMonth[ month-1];
        };
       const displayResult=(bdate,bmonth,byear)=>
       {
        document.getElementById("years").textContent= byear;
        document.getElementById("months").textContent= bmonth;
        document.getElementById("days").textContent= bdate;

       };


document.getElementById("cal-age-btb").addEventListener("click", ageCalculate);
