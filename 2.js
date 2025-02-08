function penghitungSiswaLulus(nilai) {
  if (nilai.length === 0) {
    return 'Data kosong';
  }

  let lulus = nilai.filter((n) => n >= 75).length;

  if (lulus === 0) {
    return 'Tidak ada yang lulus';
  } else if (lulus === nilai.length) {
    return 'Semua lulus';
  } else {
    return `${lulus} orang lulus`;
  }
}

// Test case
console.log(penghitungSiswaLulus([76, 77, 30, 80, 10, 20])); // 3 orang lulus
console.log(penghitungSiswaLulus([100, 100, 74, 60, 87])); // 3 orang lulus
console.log(penghitungSiswaLulus([90, 100, 85, 79, 80, 74])); // 5 orang lulus
console.log(penghitungSiswaLulus([100, 100, 100, 85, 90])); // Semua lulus
console.log(penghitungSiswaLulus([0, 0, 0, 0, 0])); // Tidak ada yang lulus
console.log(penghitungSiswaLulus([])); // Data kosong
