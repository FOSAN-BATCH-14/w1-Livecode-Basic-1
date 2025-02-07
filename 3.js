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
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == 'a' ||
      str[i] == 'i' ||
      str[i] == 'u' ||
      str[i] == 'e' ||
      str[i] == 'o'
    ) {
      count++;
    }
  }
  return count;
}

console.log(jumlahHuruf('indonesia')); //5
console.log(jumlahHuruf('fosanacademy')); //5
console.log(jumlahHuruf('javascript')); //3
console.log(jumlahHuruf('semarangselatan')); //6
console.log(jumlahHuruf('jawatengah')); //4
