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