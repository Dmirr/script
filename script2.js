let value1 = 7;
let value2 = Math.floor(Math.random() * 50);
console.log(value2); //49 (последний расчет)
console.log(value1 + value2 / 5 + 17); //33.8 (результат последнего расчета)
/* приоритет операторов:
 value2/5
 value1+(result value2/5) +17
 */
