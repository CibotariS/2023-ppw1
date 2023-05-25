t x = parseInt(prompt("Ввидите число от 0 до 9"))
//     switch(x){
//     case 0:
//         console.log("0");
//         break;
//     case 1:
//         console.log("Один");
//         break;
//     case 2:
//         console.log("Два");
//         break;
//     case 3:
//         console.log("Три");
//         break; 
//     case 4:
//         console.log("Четыре");
//         break;
//     case 5:
//         console.log("Пять");
//         break;
//     case 6:
//         console.log("Шесть");
//         break;
//     case 7:
//         console.log("Семь");
//         break;
//     case 8:
//         console.log("Восемь");
//         break;
//     case 9:
//         console.log("Девять");
//         break;
// }

//------------------------Task #2 - loops-------------------------------------
// function summa (a,b){
//     let sum = 0;
//     for (let i= a; i <= b; i++){
//         if (i % 2 === 0){
//             sum += i;
//         }
//     }
//     return sum;
// }
// console.log(summa(1,60));
// console.log(summa(8,23));

//-------------------Task #3 - conditional operator-------------------------------------
// let a = parseInt(prompt('a = '))
// let b = parseInt(prompt('b = '))
// let c = parseInt(prompt('c = '))
// console.log(Math.max(a,Math.max(b,c)));
// console.log(Math.min(a,Math.min(b,c)));

//-----------------------Task #4 - functions----------------------------
// function ucFirst(str) {

// const upper = str.charAt(0).toUpperCase() + str.slice(1);
// return upper;
// }
// const str = prompt('Enter a string: ');
// const result = ucFirst(str);
// console.log(result);

//---------------------Task #5 - String-------------------------------

// function extractCurrencyValue(str) {
//   return +str.slice(1);
// }
// let str = prompt("Введите число $")
// let value = extractCurrencyValue(str);
// console.log(value);

//--------------------Task #6 - conditional operator----------------------------------

// let value = prompt('Введите число', 0);

// if (value > 0) {
//   alert( 1 );
// } else if (value < 0) {
//   alert( -1 );
// } else {
//   alert( "Error" );
// }

//--------------------------Task #7 - conditional operator----------------------------------------------

//let age = parseInt(prompt("Введите возраст  "));

// if (age >= 14 && age <= 90){
// alert("Exzact!!!")
// }
// else{
//     alert("error")
// }



// if (!(age < 14 || age > 90)){
//   alert("Exzact!!!")
//  }
// else{
//     alert("error") 
// }

//------------------------Task #8 - conditional operator-----------------------------------



// let userName = prompt("Введите логин", '');

// if (userName === 'user1') {

//   let pass = prompt('Введите пароль', '');

//   if (pass === '1111') {
//     alert( 'Привет' );
//   } else if (pass === '' || pass === null) {
//     alert( 'Ошибка валидации');
//   } else {
//     alert( 'Неверный пароль' );
//   }

// } else if (userName === '' || userName === null) {
//   alert( 'Ошибка валидации' );
// } else {
//   alert( "Вы кто" );
// }

//---------------------------Task #9 - user interaction--------------------------------------------

// let name = prompt("Ваше имя?", "");
// alert(`Привет,${name}!`);
// let isFamiliar = confirm("Вы знакомы с JavaScript?");
//     if (isFamiliar){
//         alert("Молодец!!!");
//     }else{
// alert("Можно начать изучение прямо сейчас");
//     }

//---------------------------Task #10 - conditional operator and loops-----------------------------------

// function delitel(number){
//     let divisors = [];
//   for (let i = 1; i <= number; i++) {
//     if (number % i === 0) {
//       divisors.push(i);
//     }
//   }
//   console.log(`Делитель числа ${number}: ${divisors.join(', ')}`);
  
// }

// delitel(number = prompt(""));

//---------------------------3.4.2 Practical tasks for Arrays------------------------------------
//------------------------Task #1 - array display-------------------------------------

//const numbers = [1,2,3,4,5];
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }
// let i = 0;
// while (i < numbers.length) {
//   console.log(numbers[i]);
//   i++;
// }

// let i = 0;
// do {
//   console.log(numbers[i]);
//   i++;
// } while (i < numbers.length);


// for (let i in numbers) {
//   console.log(numbers[i]);
// }


// for (let number of numbers) {
//   console.log(number);
// }
//numbers.forEach(number => console.log(number));
//numbers.map(number => console.log(number));

//----------------------Task #2 - array processing----------------------------
//let array = [1, 5, 0, -5, 30, 100, -500, 0, 100, 55];
// function sort(array){
//     array.sort ((a,b) => b - a);
//     console.log(array);
// }
// sort(array);
// function LessThanFive(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] < 5) {
//       console.log(array[i]);
//     }
//   }
// }
// LessThanFive(array)
// function MaxMin(array) {
//   let max = array[0], min = array[0];
//   let maxIndex = 0, minIndex = 0;
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] > max) {
//       max = array[i];
//       maxIndex = i;
//     } else if (array[i] < min) {
//       min = array[i];
//       minIndex = i;
//     }
//   }
//   console.log(`Максимальный элемент ${max} на позиции ${maxIndex}`);
//   console.log(`Минимальный элемент ${min} на позиции ${minIndex}`);
// }
// MaxMin(array)

// function ThanAverage(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   let avg = sum / array.length;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > avg) {
//       console.log(array[i]);
//     }
//   }
// }
// ThanAverage(array)

//---------------------------Task #4 - array processing------------------------------------

// function sumInputNumbers() {
//   let inputArr = [];

//   while (true) {
//     let userInput = prompt("Введите число:");

//     if (userInput === null || userInput === "" || !isFinite(userInput)) {
//       break;
//     }

//     inputArr.push(+userInput);
//   }

//   let sum = 0;

//   for (let num of inputArr) {
//     sum += num;
//   }
