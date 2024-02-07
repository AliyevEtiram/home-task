// * Bank Account *
// Create a BankAccount object with properties accountNumber, ownerName, and balance. Include methods for deposit (adds to the balance), withdraw (subtracts from the balance), and getBalance (returns the balance).

// * Банковский счет *
// Создайте объект BankAccount со свойствами accountNumber, OwnerName и Balance. Включите методы депозита (добавляет баланс), вывода (вычитает из баланса) и getBalance (возвращает баланс).

//  const bankAccount = {
//    accountNUmber: "123456789",

//    ownerName: "John Doe",

//    balance: 0,

//    deposit: function (add){
//      this.balance += add;
//      return this.balance
//    },

//    withdraw : function (withs) {
//      this.balance -= withs
//      return this.balance
//    },

//    getBalans: function () {
//    console.log(this.balance + " Balance" )
//    }
//  }

// console.log(bankAccount.deposit(50))
// console.log(bankAccount.withdraw(20))
// bankAccount.getBalans()



// 1. Temperature Converter:

// Create an object that can convert temperatures between Celsius, Fahrenheit, and Kelvin.

// Конвертер температуры:

// Создайте объект, который может преобразовывать температуры между градусами Цельсия, Фаренгейта и Кельвина.

// const thermometer = {

//   celsiusToFahrenheiti: function (celsium)  {
//     return celsium * 9/5 + 32

//   },

//   celsiusToKelvint: function (celsium) {
//     return celsium + 273.15

//   },

//   fahrenheitToCelsius: function (fahrenheit){
//     return (fahrenheit - 32) * 5/9;
//   },
//    fahrenheitToKelvin: function(fahrenheit){
//     return (fahrenheit + 459.67) * 5/9;
//   },
//   kelvinToCelsius: function (kelvin){
//     return kelvin - 273.15;
//   },
//   kelvinToFahrenheit: function (kelvin){
//     return kelvin * 9/5 - 459.67;
//   }
// }

// console.log(thermometer.celsiusToFahrenheiti(50))
// console.log(thermometer.celsiusToKelvint(50))
// console.log(thermometer.fahrenheitToCelsius(50))
// console.log(thermometer.fahrenheitToKelvin(50))
// console.log(thermometer.kelvinToCelsius(50))
// console.log(thermometer.kelvinToFahrenheit(50))



// 2. Password Validator:

// Create an object that validates passwords based on certain criteria (length, contains numbers, contains special 

// 2. Валидатор пароля: ??????????????????????????????????????????????????????????????????????

// Создайте объект, который проверяет пароли на основе определенных критериев (длина, содержит цифры, содержит специальные

// const  passwordValidator = {
//   password: [],

//   newPasword: function (number) {

//     this.password.push({number})

//     },

//    Validator:
//   }

//  passwordValidator.newPasword("1236549")

// console.log(passwordValidator.password)



// 1. Rectangle Object:

// Create an object that represents a rectangle and can calculate its perimeter and area.

// 1. Прямоугольный объект:

// Создайте объект, который представляет прямоугольник и может вычислить его периметр и площадь.

// const rectangle = {

//   perimeter: function (a, b){
//     return 2 * (a + b)
//   },
//   area: function (a,b){
//     return a * b
//   }
// }

// console.log(rectangle.perimeter(5,7))
// console.log(rectangle.area(5 ,7))



// 2. Simple Todo Manager:

// Create an object to manage a to-do list. It should be able to add a task, complete a task, and display all tasks.

// 2. Простой менеджер задач:

// Создайте объект для управления списком дел. Он должен иметь возможность добавлять задачу, выполнять задачу и отображать все задачи.

// const todoManager = {
//   task: [],

//   addTask: function (names){

//     this.task.push ({names})
//   },

//   deletTask: function (names) {
//     this.task.pop ({names})
//   }
// }

// todoManager.addTask("SUd almaq")
// todoManager.addTask("Probejka")
// todoManager.addTask("ders etmek")
// todoManager.addTask("baliqa getmek ")

// todoManager.deletTask("Idti na ribalku ")
// todoManager.deletTask("Zdelat uroki ")
// todoManager.deletTask("kupit moloko ")

// console.log( todoManager.task)



// 3. Базовый объект счетчика: !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Создайте объект, который представляет счетчик и может увеличивать, уменьшать и сбрасывать счетчик.

// const Counter = {
//     count: 5,

//     increase: function() {
       
//       return this.count++
//     },
//     decrease: function() {
        
//       return this.count--
//     },
//     reset: function() {
    
//      return this.count  = 0
//     }
// };

// Counter.increase()
// Counter.increase()
// Counter.increase()


// console.log(Counter.count)
