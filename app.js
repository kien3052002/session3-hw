// 1) swapping
// let a, b;

// Cach 1:
// let tmp = a;
// a = b;
// b = tmp;

// Cach 2:
// [a, b] = [b, a];

// ---------------------------------------

// 2) split string
// let str;
// let strArr = str.split(" ");

// ---------------------------------------

// 3)
// const a = [1, 2, 3, 4];
// console.log(...a);

// ---------------------------------------

// 4)
// const shopItems = ["Jeans", "T-shirt", "Socks"];
// while (1) {
//   let cmd = prompt(
//     "Welcome to shop admin panel, what do you want (C, R, U, D)"
//   );
//   if (cmd == "C" || cmd == "c") {
//     let newItem = prompt("Enter new item");
//     shopItems.push(newItem);
//     alert("Done");
//   } else if (cmd == "R" || cmd == "r") {
//     let print = "Current shop items:\n";
//     for (let i = 0; i < shopItems.length; i++) {
//       print += `${i + 1}. ${shopItems[i]}\n`;
//     }
//     alert(print);
//   } else if (cmd == "U" || cmd == "u") {
//     let updatePst = prompt("Enter update position");
//     let updateItem = prompt("Enter item name");
//     shopItems[updatePst - 1] = updateItem;
//     alert("Done");
//   } else if (cmd == "D" || cmd == "d") {
//     let deletePst = prompt("Enter delete position");
//     shopItems.splice(deletePst - 1, 1);
//     alert("Done");
//   } else if (cmd == "end") break;
//   else alert("This command is not supported");
// }

// ---------------------------------------

// 5)
// const inputSeq = prompt("Enter number sequence, seperated by commas");
// let numArr = inputSeq.split(",");
// numArr = numArr.map(function (value) {
//   return Number(value);
// });
// let sum = numArr.reduce(function (currentSum, currentValue) {
//   return currentSum + currentValue;
// }, 0);
// alert(sum);

// ---------------------------------------

// 6)
// const inputSeq = prompt("Enter number sequence, seperated by commas");
// let numArr = inputSeq.split(",");
// let min;
// numArr = numArr.map(function (value) {
//   let a = Number(value);
//   if (min == undefined || a < min) min = a;
//   return a;
// });
// alert(min);

// ---------------------------------------

// 7)
// const arr = [3, 5, 2, 5, 66, 43];
// let num = Number(prompt("Enter a number"));
// let index = arr.findIndex(function (n) {
//   return n == num;
// });
// if (index >= 0) alert(`${num} is FOUND in my array at index ${index}`);
// else alert(`${num} is NOT FOUND in my array`);

// ---------------------------------------

// 8)
// let sheepSizes = [12, 34, 5, 7, 90, 67];
// for (let month = 0; month <= 4; month++) {
//   // Months looping
//   if (month > 0) {
//     console.log(`MONTH ${month}`);
//     sheepSizes = sheepSizes.map(function (a) {
//       return a + 50;
//     });
//   }
//   // Sheep sizes
//   console.log("Sheep sizes:");
//   console.log(...sheepSizes);
//   // Find max size
//   let maxSize = Math.max(...sheepSizes);
//   console.log(`Biggest sheep size: ${maxSize}`);
//   // Shave max size
//   if (maxSize > 8) {
//     let index = sheepSizes.findIndex(function (a) {
//       return a == maxSize;
//     });
//     if (index >= 0) sheepSizes[index] = 8;
//     console.log("Shaved biggest sheep");
//     console.log(...sheepSizes);
//     console.log(`\n`);
//   }
// }
// // Sell flock
// let totalSize = sheepSizes.reduce(function (a, b) {
//   return a + b;
// }, 0);
// let income = totalSize * 2;
// console.log(`Flock size total: ${totalSize}`);
// console.log(`Total income: ${income}`);

// ---------------------------------------

// 9)
// function demo() {
//   reset();
//   const colors = ["red", "gray", "blue", "purple", "cyan"];
//   let len = 0;
//   for (let c = 0; c < 5; c++) {
//     color(colors[c]);
//     for (let i = 0; i < 4; i++) {
//       fd(len);
//       right(90);
//     }
//     len += 50;
//   }
// }

// ---------------------------------------

// 10)
// let nameSeq = prompt("Enter name sequence");
// let nameArr = nameSeq.split(", ");
// let result = "";
// let newArr = nameArr.map(function (a) {
//   let newName = "<" + a + ">";
//   result += newName;
//   return newName;
// });
// alert(result);

// ---------------------------------------

// 11)
// let numberSeq = prompt("Enter number sequence");
// let numArr = numberSeq.split(", ");
// let result = "";
// let newArr = numArr.map(function (a) {
//   let number = Number(a);
//   if (number % 2) result += a + " ";
//   return number;
// });
// alert(result);
