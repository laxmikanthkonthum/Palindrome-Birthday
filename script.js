function stringRev(str) {
  var separated = str.split('');
  var separatedrRev = separated.reverse();
  var strRev = separatedrRev.join('');
  return strRev;
}
function isPalindrome(str) {
  var strRev = stringRev(str);
  if (str === strRev) {
    return true;
  }
  else {
    return false;
  }
}
function numToString(date) {
  if (date.day < 10) {
    date.day = '0' + date.day;
  }
  else {
    date.day = date.day.toString();
  }

  if (date.month < 10) {
    date.month = '0' + date.month;
  }
  else {
    date.month = date.month.toString();
  }
  date.year = date.year.toString();
  return date;
  
}
function dateVariations(date) {
//  console.log('in line 36' , date);
  var strDate = numToString(date);
  var ddmmyyyy = strDate.day + strDate.month + strDate.year;
  // MM-DD-YYYY
  var mmddyyyy = strDate.month + strDate.day + strDate.year;
  // YYYY-MM-DD
  var yyyymmdd = strDate.year + strDate.month + strDate.day;
  // DD-MM-YY
  var ddmmyy = strDate.day + strDate.month + strDate.year.slice(-2);
  // MM-DD-YY
  var mmddyy = strDate.month + strDate.day + strDate.year.slice(-2);
  // YY-MM-DD
  var yymmdd = strDate.year.slice(-2) + strDate.month + strDate.day;
  return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];

}
function isPalindromeForAll(date) {
  var allDates = dateVariations(date);
  var isPalindromeForAllResult = [];
  for (var i = 0; i < allDates.length; i++) {
    var res = false;
   
    if (isPalindrome(allDates[i])) {
      res = true;
      
    }
    isPalindromeForAllResult.push(res);
  }
  return isPalindromeForAllResult;
  
}
function nextDate(inputDate){
  var day =  inputDate.day + 1;
  var month = inputDate.month;
  var year = inputDate.year;
  var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
if (month == 2){
  if(isLeap(year)){
    daysInMonth[1] = 29;
  }
  else{
    daysInMonth[1] = 28;
  }
}
if (day > daysInMonth[month-1]){
  month = month + 1;
  day = 1;
}
if (month > 12){
  day = 1;
  month=1;
  year = year +1;
}
return {
    day: day,
    month: month,
    year: year
  }
}
function isLeap(year) {

  if (year % 400 === 0)
    return true;

  if (year % 100 === 0)
    return false;

  if (year % 4 === 0)
    return true;

  return false;
}
function nextPalindromeDate(date){
  var i =0;
  console.log(date);
  var newDate = nextDate(date);
  console.log(newDate);
  while(1){
    i = i+1;
    var allDates = isPalindromeForAll(newDate);

    for(var j=0; j<allDates.length;j++){
    if(allDates[j]){
        return [i,newDate];
    }
    }
    newDate.day = Number(newDate.day);
    newDate.month = Number(newDate.month);
    newDate.year = Number(newDate.year);
    newDate=nextDate(newDate);
   } 
}
function prevDate(inputDate){
  var day =  inputDate.day -1;
  var month = inputDate.month;
  var year = inputDate.year;
  var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
if (month === 3){
  if(isLeap(year)){
    daysInMonth[1] = 29;
  }
  else{
    daysInMonth[1] = 28;
  }
}
if (day === 0){
  month = month - 1;
  day = daysInMonth[month-1];
}
if (month === 0){
  day = 31;
  month= 12;
  year = year - 1;
}
return {
    day: day,
    month: month,
    year: year
  }
}
function prevPalindromeDate(date){
  var i =0;
  var newDate = prevDate(date);
  while(1){
    i = i+1;
    var allDates = isPalindromeForAll(newDate);
    for(var j=0; j<allDates.length;j++){
    if(allDates[j]){
        return [i,newDate];
    }
    }
    newDate.day = Number(newDate.day);
    newDate.month = Number(newDate.month);
    newDate.year = Number(newDate.year);
    newDate=prevDate(newDate);
   } 
}

var date = {
  day: 14,
  month: 2,
  year: 2021
}
var inputDate = document.querySelector('.birthday');
var submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click',logic);
function logic(){
  var userDate = inputDate.value;
  if (userDate !== '') {
    var date =userDate.split('-');
    var yyyy = date[0];
    var mm = date[1];
    var dd = date[2];

    var date = {
      day: Number(dd),
      month: Number(mm),
      year: Number(yyyy)
    };
var allDates = isPalindromeForAll(date);
var flag = false;
console.log(allDates)
for(var j=0; j<allDates.length;j++){
    if(allDates[j]){
        flag =true ;
        break;
    }
}
if(flag == false){
  console.log(date,typeof date.day)
      console.log(prevDate(date));
      var pastCtr = prevPalindromeDate(date)[0];
      var pastDate = prevPalindromeDate(date)[1];
      var futureCtr = nextPalindromeDate(date)[0];
      var futureDate = nextPalindromeDate(date)[1];
      console.log(pastCtr,pastDate);
      console.log(futureCtr,futureDate);

}else{
  console.log("Yay! its a Palindrome");
}
}
}

// var allDates = isPalindromeForAll(date);
// for(var j=0; j<allDates.length;j++){
//     if(allDates[j]){
//         console.log('Yay! You have a palindrome Bday');
//     }
//     else{
//       var pastCtr = prevPalindromeDate(date)[0];
//       var pastDate = prevPalindromeDate(date)[1];
//       var futureCtr = nextPalindromeDate(date)[0];
//       var futureDate = nextPalindromeDate(date)[1];
//       console.log(pastCtr,pastDate);
//       console.log(futureCtr,futureDate);
//     }
//   }






