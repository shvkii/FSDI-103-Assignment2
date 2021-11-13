console.log("Executed");
/*
let userName=prompt("Enter your name: ");
let userEmail=prompt("Enter your email: ");
console.log(userName,userEmail);
const SERVER_URL="http://google.com";*/

//loops
/*console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

for(let i=0;i<=100;i+=10){
    console.log("Iteration " + i);
}

let counter=1;
while(counter<10){
    console.log("while " + counter);
    counter++;
}

let j=0
do{
    console.log("do " + j);
    j++;
}while(j<10);*/

//conditional statements
//mini-challenge
//get the values from the user using the prompt
/*let candy=5; let chocolate=6 
let candy=prompt("Enter number 5 ");
let chocolate=prompt("Enter the number 6 ");

if(candy==chocolate){
    console.log("the numbers are the same");
}else{
    console.log("the numbers are different");*/


let name;
name=prompt("Enter the name ");
if(name=="Grinch"){
    console.log("Merry Christmas");
}
//mini-challenge
//get the name, email,salary (monthly)
//display

let userName=prompt("Enter your name: ");
let userEmail=prompt("Enter your email: ");
let monthlyPay=prompt("Enter monthly pay");
console.log(userName,userEmail,monthlyPay);
console.log(userName,userEmail + monthlyPay*12 );



