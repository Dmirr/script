let introModule = 100;
let gitModule = 269;
let jsModule = 175;
let totalScore = introModule + gitModule + jsModule;
console.log(totalScore);
let averageScore = totalScore / 3;
console.log("Average points for modules " + averageScore);

let studentName = "Dmitriy";
let studentSurname = "Rodionov";
let studentFullname = studentName + " " + studentSurname;

console.log(` Average points for ${studentFullname} is ${averageScore}`);
console.log(
  ` Average points for ${studentName.slice(
    0,
    1
  )}. ${studentSurname} is ${averageScore}`
);
