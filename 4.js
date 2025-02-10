/*
INSTRUKSI
=========

Buatlah sebuah function binaryGenerator yang berfungsi untuk merubah angka dibawah ini.
Diberikan sekelompok angka, ubahlah angka input tersebut sehingga angka dibawah 5 menjadi 0
dan angka 5 keatas menjadi 1.

Contoh:
Input: 45385593107843568
Output: '01011110001100111'

Hanya diperbolehkan menggunakan 1 built-in function (toString)
Dilarang menggunakan built-in function selain yang diperbolehkan.
*/

function binaryGenerator(angka) {
  // isikan kode anda disini
  let binary = angka.toString();
  let result = '';

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] >= 0 && binary[i] < 5) {
      result += '0'
    } else {
      result += '1'
    }
  }

  return result;
}

console.log(binaryGenerator(45385593107843568));
//'01011110001100111
console.log(binaryGenerator(509321967506747));
//'101000111101101'
console.log(binaryGenerator(366058562030849490134388085)) 
//011011110000101010000011011