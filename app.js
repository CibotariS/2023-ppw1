
//---------------------------Task #5 - changing DOM -------------------------------------
// Получаем элементы со страницы
// const minusBtn = document.getElementById('minus-btn');
// const numberInput = document.getElementById('number-input');
// const plusBtn = document.getElementById('plus-btn');

// // Обработчик событий для кнопки -
// minusBtn.addEventListener('click', function() {
//   let currentValue = parseInt(numberInput.value); // Получаем текущее значение из инпута и преобразуем его в число
//   if (currentValue > 0) { // Если текущее значение больше 0, уменьшаем на 1 и записываем в инпут
//     currentValue--;
//     numberInput.value = currentValue;
//   }
//   if (currentValue === 0) { // Если текущее значение равно 0, делаем кнопку - неактивной
//     minusBtn.disabled = true;
//   }
//   plusBtn.disabled = false; // Всегда делаем кнопку + активной
// });

// // Обработчик событий для кнопки +
// plusBtn.addEventListener('click', function() {
//   let currentValue = parseInt(numberInput.value); // Получаем текущее значение из инпута и преобразуем его в число
//   if (currentValue < 9) { // Если текущее значение меньше 9, увеличиваем на 1 и записываем в инпут
//     currentValue++;
//     numberInput.value = currentValue;
//   }
//   if (currentValue === 9) { // Если текущее значение равно 9, делаем кнопку + неактивной
//     plusBtn.disabled = true;
//   }
//   minusBtn.disabled = false; // Всегда делаем кнопку - активной
// });
//-------------------------------Task #6 - adding elements to DOM-------------------------------------


// const boardSize = 8; // размер доски
//     const table = document.querySelector('#chessboard'); // выбираем таблицу

//     for (let i = 0; i < boardSize; i++) { // цикл для строк таблицы
//         const row = document.createElement('tr'); // создаем строку таблицы
//         for (let j = 0; j < boardSize; j++) { // цикл для ячеек таблицы
//             const cell = document.createElement('td'); // создаем ячейку таблицы
//             if ((i + j) % 2 === 0) { // определяем, какую ячейку закрашивать черным цветом
//                 cell.style.backgroundColor = 'black';
//             }
//             row.appendChild(cell); // добавляем ячейку в строку
//         }
//         table.appendChild(row); // добавляем строку в таблицу
//     }
//------------------------Task #10 - DOM elements properties-------------------------------------



// const field = document.querySelector('#field');
// const ball = document.querySelector('#ball');

// const fieldRect = field.getBoundingClientRect();
// const ballRect = ball.getBoundingClientRect();

// const centerX = fieldRect.left + (fieldRect.width - ballRect.width) / 2;
// const centerY = fieldRect.top + (fieldRect.height - ballRect.height) / 2;

// ball.style.left = centerX + 'px';
// ball.style.top = centerY + 'px';

//ball.style.left = "0";
//ball.style.top = "0";

 //ball.style.left = fieldRect.width - ballRect.width + "px";
 //ball.style.top = "0";

// ball.style.left = "0";
// ball.style.top = fieldRect.height - ballRect.height + "px";

// ball.style.left = fieldRect.width - ballRect.width + "px";
// ball.style.top = fieldRect.height - ballRect.height + "px";

//-----------------------Task #15 - keyboard events------------------------------------------------
// const numberInput = document.getElementById('numberInput');

// numberInput.addEventListener('blur', () => {
//   const inputValue = Number(numberInput.value);
//   if (isNaN(inputValue)) {
//     numberInput.value = 0;
//   }
// });

//---------------------------Task #16 - keyboard events----------------------------------------------
// const numberInput = document.getElementById("numberInput");

// numberInput.addEventListener("input", () => {
//   const regex = /^\d*\.?\d*$/; // регулярное выражение для чисел (целых и дробных)
//   const value = numberInput.value;
  
//   if (!regex.test(value)) {
//     numberInput.value = "";
//   }
// });

//------------------Task #20 - working with DOM-------------------------------
// function deleteRow(button) {
//   var row = button.parentNode.parentNode;
//   row.parentNode.removeChild(row);
// }

// function addUser(event) {
//   event.preventDefault();
//   var name = this.elements["name"].value;
//   var user = this.elements["user"].checked ? "X" : "";
//   var admin = this.elements["admin"].checked ? "X" : "";
  
//   var table = document.getElementById("users-table").getElementsByTagName("tbody")[0];
//   var newRow = table.insertRow();
//   var nameCell = newRow.insertCell();
//   var userCell = newRow.insertCell();
//   var adminCell = newRow.insertCell();
//   var buttonCell = newRow.insertCell();
  
//   nameCell.innerHTML = name;
//   userCell.innerHTML = user;
//   adminCell.innerHTML = admin;
//   buttonCell.innerHTML = '<button onclick="deleteRow(this)">X</button>';
  
//   this.reset();
// }

// document.getElementById("add-user-form").addEventListener("submit", addUser);