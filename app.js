
// let arr =["apple", "mango", "banana"];
//  let myArr = arr[Symbol.iterator]();

// console.log(myArr.next().value);
// console.log(myArr.next().value);
// (myArr.next())
// console.log(myArr.next())

// let fruits = ["apple","mango","banana"];
// let myFruits = fruits[Symbol.iterator]();
// console.log(myFruits.next().value);     //apple
// console.log(myFruits.next());         //{value: 'mango', done: false}
// myFruits.next();                      //skip
// console.log(myFruits.next());          // {value: undefined, done: true}


// Lexical scope /environment
// let a = 20;
// function outerFunction(){
//     function innerFunction(){
//         function innerMostFunction(){
//            let a = 10;
//             console.log(a);
//         }
//         innerMostFunctaion()
//     }
//     innerFunction()
// }
// // outerFunction()

// function mom(){
//     function madiha(){        
//         function anas(){
// let ab = 50;          
//             console.log(ab);
//         }
//         anas()
//     }
//     madiha()
// }
// mom()


// function outerFunction(number2){
//     let number1 = 10
//     function innerFunction(){
//        let number3 = 90
//        console.log(number1+number2+number3);
//     }
//     return innerFunction
// }
// let returningFunction = outerFunction(20);
// console.log(returningFunction());

// function outerFunction(number2){
//     let number1 = 10;
//     function innerFunction(){
//        let number3 = 90;
//        return number1 + number2 + number3; 
//     }
//     return innerFunction;
// }
// let returningFunction = outerFunction(20);
// console.log(returningFunction());

// function declaration // Named function   //simple function
// function abc(){
// return "hello"
// }
// console.log(abc());

// const greet = () => {
//     return "Hello World!";
// };
// console.log(greet());  // Outputs: Hello World!

// let abc = num1=>num1
// console.log(abc(2));

// optional chaining

// const employee = {
//  employeeName : "Shabana",
//  empolyeId:321,
//  gender: "female",
//  address:{
//     street: "mt ana"
//  }
// }

// console.log(employee?.address?.area?.area);


// Params destructuring
// function userBio({firstName,id}) {
//     console.log(firstName,id);

// }
// const users = [
//   {
//     firstName: "laiba",
//     lastName: "Sadiq",
//     id: 783,
//   },
//   {
//     firstName: "javeria",
//     lastName: "saleem",
//     id: 783,
//   },
//   {
//     firstName: "sadia",
//     lastName: "gulaam nabi",
//     id: 783,
//   },
// ];

// for (let user of users) {
// //   let { firstName, id } = user;

//   userBio(user);
// }

// function apnaKamFunction(callback) {
//    console.log(
//       "bartan dhore ho ammi ke dant sunrhe non extistent susraal ke tane sunrhe ho "
//    );
//    callback()
// }
// function dostKaFunction() {
//    console.log("assignment chaap do mera dost nh ha yaar");

// }
// apnaKamFunction(dostKaFunction);

// const numbers = [1,2,3,4];
// numbers.forEach((value,index)=>{
//     console.log(value,index);
// })

// const numbers = [1, 2, 3, 4];
// let result = numbers.map(function (value, index) {
//   if (value % 2 === 0) {
//     return value;
//   }
//   return "no value"
// });

// console.log(result);
