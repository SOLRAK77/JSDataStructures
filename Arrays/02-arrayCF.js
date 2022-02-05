/* Funciones comunes en arreglos */
/* common array interactions  */

const weekdays = ['Sunday','Mondat','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const weekly_weather = [70,72,68,74,74,73,68];

console.log('The temperature on Sunday was:' + weekly_weather[0]);
console.log('The temperature on Monday was:' + weekly_weather[1]);
console.log('The temperature on Tuesday was:' + weekly_weather[2]);
console.log('The temperature on Wednesday was:' + weekly_weather[3]);
console.log('The temperature on Thurday was:' + weekly_weather[4]);
console.log('The temperature on Friday was:' + weekly_weather[5]);
console.log('The temperature on Saturday was:' + weekly_weather[6]);

/*More simple */
for(i=0; i<weekdays.length-1;i++){
    console.log(`The temperature on ${weekdays[i]} was: ${weekly_weather[i]}`);
}

/*getting the average */
let temp_averge =0;
let sum_totalTemperature = 0;
for(i=0; i<weekdays.length-1;i++){
    sum_totalTemperature += weekly_weather[i];
}

temp_averge = sum_totalTemperature / weekdays.length;

console.log('The average temperature is:',temp_averge);
console.log('Total temperature:',sum_totalTemperature);


