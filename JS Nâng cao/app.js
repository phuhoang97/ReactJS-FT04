// 1. Map
// Thực hiện 1 hàm callback (() => ) duyệt qua các phần tử và tạo ra mảng mới
// Map nhận 3 tham số: 1 là element, 2 là index, 3 là array

// ví dụ:
// let numbers = [1, 2, 3, 4, 5];
//             0  1  2  3  4  length - 1
// let gicungduoc = numbers.map((element, index) => {
//   return element * 2;
// });

// console.log(gicungduoc);

// 2. foreach
// Thực hiện 1 hàm callback duyệt qua các phần tử và không tạo ra mảng mới

// ví dụ:

// numbers.forEach((element, index) => element * 2);

// 3. find
// Duyệt qua các phần tử trong mảng, nếu thỏa mãn điều kiện sẽ trả về phần tử đầu tiền thỏa mãn
// ví dụ:
// let newNumber = numbers.find((number) => number % 2 == 0);
// console.log(newNumber);

// 4. filter
// Duyệt qua các phần tử trong mảng, trả về tất cả phần tử thỏa mãn điều kiện
// ví dụ:

// let newNumber = numbers.filter((number) => number % 2 == 0);
// console.log(newNumber);

// indexOf, findIndex, reduce, ...

// 5. Arrow Function

// function f() {
//   console.log(1);
// }
// f();

// const k = () => {
//   console.log(2);
// };
// k();

// 6. Destructuring
// Array
// let numbers = [1, 2, 3, 4, 5];
// let a = numbers[0];
// let b = numbers[1];
// let c = numbers[2];

// console.log(a, b, c);

// let [a, b, c, d, e, f] = numbers;
// console.log(a, c, e, f);

// // object
// let people = {
//   name: "Bách Cọp",
//   age: 18,
// };

// let { name, age, age2 } = people;
// console.log(name, age, age2);

// 7. Enhanced object literals
// + Định nghĩa key : value cho object
// + Định nghĩa biến cho object

let studentName = "Nguyen Van A";
let age = 20;
let course = "course";

let student = {
  studentName,
  age,
  [course]: "JS",
};

console.log(student);

// 8. Rest Parameters
// Khi sử dụng là tham số
// Khi sử dụng với Destructuring

// ví dụ
// function sum(a, ...rest) {
//   console.log(a);
//   console.log(rest);
// }
// sum(1, 2, 3);

// let arr = [1, 2, 3, 4];
// let [a, b, ...c] = arr;
// console.log(a, b, c);

// 9. Spread
// ví dụ:
// let course1 = ["PHP", "ReactJS"];
// let course2 = ["HTML", "CSS", "JS"];

// let course = [...course1, ...course2];
// console.log(course);
