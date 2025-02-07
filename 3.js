/*
INSTRUKSI
=========

Buatlah sebuah function yang bernama jumlahHuruf dimana function tersebut digunakan
untuk menghitung jumlah huruf vokal yang ada didalam sebuah kalimat.

Contoh:
Input: "jawatengah"
Output: 4

Dilarang menggunakan built-in function
*/

function jumlahHuruf(str) {
let count = 0;
let hurufVokal = "aiueo";

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < hurufVokal.length; j++) {
      if (str[i] === hurufVokal[j]) {
        count++;
      }
      
    }
    
  }
  return count
} 

console.log(jumlahHuruf("indonesia")); //5
console.log(jumlahHuruf("fosanacademy")); //5
console.log(jumlahHuruf("javascript")); //3
console.log(jumlahHuruf("semarangselatan")); //6
console.log(jumlahHuruf("jawatengah")); //4
