const userAge=3;
userAge>=18?console.log('You are allowed to marry'):console.log('wait for '+(18-userAge)+' years to get married');

//myAge and yourAge comparison
const myAge=22;
const yourAge=myAge-5;

//using ternary
myAge>yourAge?console.log('I am older than you'):console.log('you are older than me');

//using if else
if(myAge>yourAge){
    console.log('I am older than you');
}else{
    console.log('you are older than me');
}

//number is even or not
const integer=18;
integer%2===0?console.log(integer+' is even number'):console.log(integer+' is odd number');

//grade for students using switch case
const score=60;
switch(true){
    case(score>=80 && score<=100):
        console.log('Your grade is:A');
        break;
    case(score>=70 && score<=79):
        console.log('Your grade is:B');
        break;
    case(score>=60 && score<=69):
        console.log('Your grade is:C');
        break;
    case(score>=50 && score<=59):
        console.log('Your grade is:D');
        break;
    case(score>=0 && score<=49):
        console.log('Your grade is:F');
        break;
    default:
        console.log('please enter correct score');
        break;
}
//check season

const month='february';
const year=2100;
currentMonth=month.toLowerCase();
if(currentMonth==='september' || currentMonth==='october'|| currentMonth==='november'){
    console.log('The season is Rainy');
}
else if(currentMonth==='december' || currentMonth==='january'|| currentMonth==='february'){
    console.log('The Season is Winter');
}
else if(currentMonth==='april' || currentMonth==='may'|| month.toLowerCase()==='june'|| currentMonth==='july'){
    console.log('The season is Summer');
}
else if(currentMonth==='march'){
    console.log('The season is Spring');
}
else{
    console.log('you have entered wrong month');
}

//day is weekend or not
const day='sunday';
const currentDay=day.toLowerCase();
if(currentDay==='sunday'||currentDay==='saturday'){
    console.log('weekend');
}else if(currentDay==='monday'||currentDay==='tuesday'||currentDay==='wednesday'||currentDay==='thursday'||currentDay==='friday')
 {
    console.log('Weekday');  
}
else{
    console.log('Please enter correct day');
}

//no of days in month

if(currentMonth==='january'||currentMonth==='march'||currentMonth==='may'||currentMonth==='july'||currentMonth==='august'||currentMonth==='october'||currentMonth==='december')
{
    console.log('No. of days are 31');
}
else if(currentMonth==='april'||currentMonth==='june'||currentMonth==='september'||currentMonth==='november')
{
    console.log('No. of days are 30');
}
else if(currentMonth==='february'){
    if((year%400===0)||(year%4===0 && year%100!=0)){
        console.log('No of days are 29');
    }
    else{
        console.log('no. of days are 28');
    }
}
else{
    console.log('enter correct month');
}

//leap year or not
((year%400===0)||(year%4===0 && year%100!=0))?console.log('leap year'):console.log('not leap year');

//ternary expression
myAge>18?(myAge>25?console.log('A'):console.log('B')):console.log('B');

myAge>25?console.log('D'):myAge>18?console.log('C'):console.log('D');

let result = true ? false ? true ? 'A' : 'B' : false ? 'C' : 'D' : 'E';
console.log(result);//output is D
//it works as follows
/*
if (true) {
    if (false) {
        if (true) {
            result = 'A';
        } else {
            result = 'B';
        }
    } else {
        if (false) {
            result = 'C';
        } else {
            result = 'D';
        }
    }
} else {
    result = 'E';
}*/