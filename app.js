/*
    NAME: Maggie Csori
    DESC: DATES
    DATE: 01/21/2021
*/ 

let registration = new Date(2021, 0,7,8, 25); //Jan 7, 2021 8:25am

console.log(registration);
console.log(`Year: ${registration.getFullYear()}`);
console.log(`Month: ${registration.getMonth()}`);
console.log(`Date: ${registration.getDate()}`);
console.log(`Day of Week: ${registration.getDay()}`);
console.log(`Hours: ${registration.getHours()}`);
console.log(`Minutes: ${registration.getMinutes()}`);
console.log(`Seconds: ${registration.getSeconds()}`);

console.log(`------------------------------------\n\n`);
let now = new Date();
console.log(now);
console.log(`Milliseconds: ${now.getMilliseconds()}`);
now.setFullYear(1999);
console.log(`${now.toDateString()} ${now.toTimeString()}`);

console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);

let birthDate = new Date(1972,8,13); // why is month a month less than actual month - as in this case
console.log(`My birthday is: ${birthDate}`);

console.log(`What is the date 1 billion seconds from my birthday and how old am I going to be that year`);

let seconds = 1000000000; // this is 1 billions seconds
let days = seconds/86400; // how many seconds in a 24hr in a day
let nextDate = birthDate.getDate() + days;
let newDate = new Date(birthDate.getFullYear(),birthDate.getMonth(),birthDate.getDate()); 
newDate.setDate(nextDate);
console.log(`Date from my birthday in 1 billion seconds: ${newDate}`);

let age = newDate.getFullYear() - birthDate.getFullYear();
console.log(`My age of year ${newDate.getFullYear()} is or will be ${age}`);

console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);

// Repeat for 1 billion milliseconds
console.log(`What is the date 1 billion milliseconds from my birthday and how old am I going to be that year`);
let milliseconds = 1000000000; // this is 1 billions milliseconds
days = milliseconds/86400000; // this is how many number of days in 1 billion milliseconds
nextDate = birthDate.getDate() + days;

newDate = new Date(birthDate.getFullYear(),birthDate.getMonth(),birthDate.getDate());
newDate.setDate(nextDate);

console.log(`Date from my birthday in 1 billion milliseconds: ${newDate}`);
age = newDate.getFullYear() - birthDate.getFullYear();

console.log(`My birth day: ${birthDate}`);
console.log(`My age in the year of ${newDate.getFullYear()} is or will be ${age}`);

let m2 = new Date(birthDate.getFullYear(),birthDate.getMonth(),birthDate.getDate());
m2.setSeconds(1000000000);
console.log(m2);

console.log(`Age: ${m2.getFullYear() - birthDate.getFullYear()}`);


