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
  // isikan kode anda disini
  let vocal = 0;

  for (i = 0; i < str.length; i++) {
    switch (str[i]) {
      case 'a':
        vocal++
        break;
      case 'i':
        vocal++
        break;
      case 'u':
        vocal++
        break;
      case 'e':
        vocal++
        break;
      case 'o':
        vocal++
        break;
      default:
        break;
    }
  }

  return vocal;
}

console.log(jumlahHuruf("indonesia")); //5
console.log(jumlahHuruf("fosanacademy")); //5
console.log(jumlahHuruf("javascript")); //3
console.log(jumlahHuruf("semarangselatan")); //6
console.log(jumlahHuruf("jawatengah")); //4
