/*
1. Create a function named `sayHello` that alerts a message `Hello World!`.
*/
Ans--
function sayHello (){
  alert("Hello world");}


  
/*
2. Create a function named `fullName` with the following steps:
  - Prompts a message saying `Enter your first name` and store the value into variable named `firstName`
  - Prompts a message saying `Enter your last name` and store the value into variable named `lastName`
  - Concat the value of fistName and lastName and store it in another variable named `fullName`.
  - Alert `fullName`
*/
Ans--
function fullName(){
  let firstName=prompt("Enter Your First Name");
  let lastName=prompt("Enter Your Lastt Name");
  let fullName=`${(firstName+lastName)}`;
  alert(fullName);
  }



/*
3. Create a function named `addTwoNumbers` with the following steps:
  - Prompts a message saying `Enter the first number` and store the value into variable named `firstNum`
  - Prompts a message saying `Enter the second` and store the value into variable named `secondNum`
  - Add the value of firstNum and secondNum and store it in another variable named `sum`.
  - Alert `sum`
*/
Ans--
function addTwoNumbers(){
  let firstNum=+prompt("Enter the First Number");
  let secondNum=+prompt("Enter the Second Number");
  let sum=firstNum+secondNum;
  alert(sum);
  }



/*
4. Create a function named `getTable` with the following steps:
  - Prompts a message saying `Enter a number` and store the value into variable named `num`
  - Using `console.log` logs the Multiplication Table of the number entered by the user.
  - Example: Number is 9
  9 * 1 = 9
  9 * 2 = 18
  9 * 3 = 27
  9 * 4 = 36
  9 * 5 = 45
  9 * 6 = 54
  9 * 7 = 63
  9 * 8 = 72
  9 * 9 = 81
  9 * 10 = 90
*/
Ans--
function getTable(){
  let num=prompt("Enter a Number");
  for(let i=1;i<=10;i=i+1){
  table=i*num;
  console.log(`${num}*${i}=${table}`);
    }
  }



/*
5. Create a function named `isLeapYear` with the following steps:
  - Prompts a message saying `Enter a year` and store the value into variable named`year`
  - Alert `[year] is a leap year` otherwise `[year] is not a leap year`
*/
Ans--
function isLeapYear(){
  let year=+prompt("Enter a year");
  if(year%4==0){
      alert(`${year} is leap year`);}
  else{
    alert(`${year} is not leap year`);}
    }
  



/*
6. Create a function named `getFactorial` with the following steps:
  - Prompts a message saying `Enter a number` and store the value into variable named`number`
  - Alert `The factorial of [number] is [factorial]`
*/
Ans--
function getFactorial(){
  let number=+prompt("Enter the number");
  let fact=1;
  for(let  i=1;i<=number;i=i+1){
    fact=fact*i;}{
  alert(`The factorial of ${number}  is ${fact}`);
    }
  }