// 1. toFixed()
/**
 * Method toFixed digunakan untuk membuat tampilan angka dengan jumlah desimal yang tetap.
 * Method ini membutuhkan satu parameter opsional yang jika diinput akan menentukan jumlah digit setelah tanda desimal.
 * Hasil pemanggilan method ini bertipe String.
 */
let angka = 456.123;
// console.log(angka.toFixed(2));

// 2. random()
/**
 * Method Math.random() berfungsi untuk menghasilkan angka acak dalam setiap pemanggilan.
 * Nilai akhir berada dalam rentang 0 dan 1.
 */
let angkaAcak = Math.floor(Math.random() * 10) + 1;
// console.log(angkaAcak);

// 3. concat()
/**
 * Method String.concat() berfungsi untuk operasi penyambungan String.
 * Method ini membutuhkan 1 atau lebih argumen bertipe String untuk disambung.
 */
let nama = "Chaerul";
// console.log(nama.concat(" Marwan"));

// 4. trim()
/**
 * Method String.trim() berfungsi untuk menghapus karakter spasi atau string kosong di awal dan di akhir String.
 */
let alamat = " Sumedang ";
// console.log(alamat.trim());

// 5. join()
/**
 * Method Array .join() berfungsi untuk menggabungkan elemen array menjadi sebuah string.
 * Sebuah argumen bisa diinputkan kedalam method ini yang nantinya berfungsi sebagai pembatas untuk menyatukan array.
 */
let arr = [2, 5, 8, "a", "b", "c"];
// console.log(arr.join("-"));

// 6. reduce()
/**
 * Method ini berfungsi untuk mereduce elemen array menjadi single value dengan menjumlahkan setiap elemen array-nya (dari kiri ke kanan)
 */
const arrAngka = [1, 2, 3, 4, 5];
// const hasil = arrAngka.reduce((a, b) => a + b, 1);
// console.log(hasil);

// 7. every()
/**
 * Method ini berfungsi untuk mengecek apakah setiap elemen dalam array semuanya memenuhi kondisi atau tidak.
 * Hasil pemanggilan method ini bertipe Boolean.
 */
const arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const result = arrNumber.every(item => item > 5);
// console.log(result);

// 8. includes()
/**
 * Method ini berfungsi untuk mengecek apakah pada elemen array mengandung atau ada suatu karakter tertentu atau tidak.
 */
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const cari = number.includes(6);
// console.log(cari);

// 9. find()
/**
 * Method ini berfungsi untuk mencari atau menemukan suatu elemen yang sesuai pada array.
 * Jika yang sesuai lebih dari satu elemen, maka dia hanya akan mengambil elemen yang pertama ditemukan.
 */
const number2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const find = number2.find(x => x > 5);
// console.log(find);

// 10. toString()
/**
 * Method toString() berfungsi untuk menkonversi sebuah tipe data menjadi string. 
 */
let nomor = 78;
// let konversi = nomor.toString();
// console.log(typeof konversi);