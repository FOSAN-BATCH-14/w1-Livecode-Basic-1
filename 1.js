/*
INSTRUKSI
=========

Buatlah sebuah function penampilAngka yang menjalankan proses menampilkan angka-agka bernilai ganjil.
function tersebut menerima 1 parameter berupa string yang setiap karakternya mewakili 1 angka

Contoh:
Input: '98765432'
Output : '9753'
 */

function penampilAngka(stringAngka) {
  let angkaGanjil = '';
  for (let i = 0; i < stringAngka.length; i++) {
    if (stringAngka[i] % 2 != 0) {
      angkaGanjil += stringAngka[i];
    }
  }

  return angkaGanjil;
}

//Test case
console.log(penampilAngka('12345678')); // '1357'
console.log(penampilAngka('1346789')); // '1379'
console.log(penampilAngka('1298967')); // '1997'
console.log(penampilAngka('43447453')); // '3753'
console.log(penampilAngka('46824')); // ''
