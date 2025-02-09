/*
INSTRUKSI
=========

Implementasikan function penghitungSiswaLulus untuk menampilkan berapa orang yang lulus berdasarkan
data nilai yang diberikan dengan aturan jika nilai lebih besar atau sama dengan 75
maka orang itu dinyatakan lulus.

Contoh:
- Input: [70, 85, 65, 90]
  Output: 2 orang lulus
- Input: [0, 65, 30, 74]
  Output: Tidak ada yang lulus
- Input: [90, 100, 76, 85]
  Output: Semua lulus
- Input: []
  Output: Data kosong
*/

function penghitungSiswaLulus(nilai) {
  if (nilai[0] === undefined){
    return "Data kosong";
  }

  let jumlahLulus = 0;
  let totalSiswa = 0;
  
  while (nilai[totalSiswa] !== undefined){
    if (nilai[totalSiswa] >= 75){
      jumlahLulus++;
    }
    totalSiswa++;
  }

  if (jumlahLulus === 0){
    return "Tidak ada yang lulus"
  } else if (jumlahLulus === totalSiswa){
    return "Semua orang lulus"
  } else {
    return jumlahLulus + " orang lulus"
  }
}

//Test case
console.log(penghitungSiswaLulus([76, 77, 30, 80, 10, 20])); // 3 orang lulus
console.log(penghitungSiswaLulus([100, 100, 74, 60, 87])); // 3 orang lulus
console.log(penghitungSiswaLulus([90, 100, 85, 79, 80, 74])); // 5 orang lulus
console.log(penghitungSiswaLulus([100, 100, 100, 85, 90])); // Semua orang lulus
console.log(penghitungSiswaLulus([0, 0, 0, 0, 0])); // Tidak ada yang lulus
console.log(penghitungSiswaLulus([])); // Data kosong
