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
    let i = 0;
    let vokal = ['a', 'i', 'u', 'e', 'o'];

    while (str[i] !== undefined) {
        let j = 0;
        while (vokal[j] !== undefined) {
            if (str[i] === vokal[j]) {
                count++;
                break;
            }
            j++;
        }
        i++;
    }
    return count;
}

console.log(jumlahHuruf("indonesia")); //5
console.log(jumlahHuruf("fosanacademy")); //5
console.log(jumlahHuruf("javascript")); //3
console.log(jumlahHuruf("semarangselatan")); //6
console.log(jumlahHuruf("jawatengah")); //4
