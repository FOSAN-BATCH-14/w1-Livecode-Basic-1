/*
INSTRUKSI
=========

Implementasikan function throwbackMe untuk membalikkan sebuah data yang terdapat dalam parameter `arr`.
Sehingga index terakhir menjadi didepan dan berurutan sampe index pertama yang posisinya pindah ke belakang.
-DAN- begitu juga dengan setiap elemen string yang ada didalamnya menjadi terbalik.

Contoh:
- input: ['devil jin', 'geese', 'akuma']
  output: ['amuka', 'eseeg', 'nij lived']

- input: ['alisa', 'xiaoyu', 'nina', 'lili']
  output: ['ilil', 'anin', 'uyoaix', 'asila']

- input: []
  output: []


ATURAN CODING:
--------------
- Dilarang menggunakan built-in function:
  - .map()
  - .filter()
  - .reduce()
  - .reverse()
  - .split()
  - .join()
  - .find()
  - .splice()
*/

function throwbackMe(arr) {
  let reversedArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
      let reversedStr = "";
      for (let j = arr[i].length - 1; j >= 0; j--) {
          reversedStr += arr[i][j];
      }
      reversedArr[arr.length - 1 - i] = reversedStr;
  }
  return reversedArr;
}

console.log(throwbackMe(['dimitri', 'sergei', 'alexei']));
// ['iexela', 'iegres', 'irtimid']

console.log(throwbackMe(['kira', 'lawliet', 'near', 'mello']));
// [ 'ollem', 'raen', 'teilwal', 'arik' ]

console.log(throwbackMe([]));
// []