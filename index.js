console.log("===String===");

let name = "I Nyoman Krisna Satryaputra Wiraska"
console.log("1. Nama =" + " " + name);
let nameLength = name.length
console.log("2. Panjang Nama =" + " " + nameLength);
let nameUpper = name.toUpperCase();
console.log("3. Uppercase ="+" "+ nameUpper);
let namelow =name.toLowerCase();
console.log("4. Lowercase =" + " "+ namelow);
let firstName = name[0]
console.log("5. Nama Pertama =" + " "+firstName);
let nameSlice = name.slice(9,15)
console.log("6. Potongan Nama Panggilan =" + " " + nameSlice);
let love = "Love Java Script"
console.log("7. gabungan = " + " " + firstName + " " + love);

console.log("===Mengubah Tipe Data===");

let myAge = "22"
let changeTipeAge = parseInt(myAge)
console.log("1. Before = " + typeof(myAge) + " & " + "After = " + typeof(changeTipeAge));
let myHeight = "175"
let changeTipeHeight = parseFloat(myHeight)
console.log("2. Before = " + typeof(myHeight) + " & " + "After = " + typeof(changeTipeHeight));

console.log("===Ngecek Tipe Data===");
let akuSukaBasket = true;
console.log("3. Tipe Data =" + " " +typeof(akuSukaBasket));

console.log("===Penjumlahan Dan Pengurangan===");
let num1 = 10
let num2 = 5
let result1 = num1+num2
let result2 = num1-num2
console.log("1. Hasil Penjumlan =" + " " + result1);
console.log("2. Hasil Pengurangan =" + " " + result2);

console.log("===Perkalian dan Pembagian===");
let num3 = 6
let num4 = 2
let result3 = num3*num4
let result4 = num3/num4
console.log("1. Hasil Perkalian =" + " " + result3);
console.log("2. Hasil Pembagian =" + " " + result4);

console.log("===Pangkat Bilangan===");
let base = 3
let exponent = 4
let result5 = Math.pow (base, exponent)
console.log("1. Hasil Pangkat=" + " " + result5);

console.log("===Rata-Rata Array===");
let avgArray = [5, 8, 12, 4, 6] 
let sum = 0
for (let i = 0; i < avgArray.length; i++) {
    sum += avgArray[i];
}
let totalAvg = sum / avgArray.length
console.log("1.Rata-rata array =" + " " + totalAvg);

console.log("===Bilangan Ganjil Atau Genap===");
let num5 = 10
if (num5 % 2 === 0) {
    console.log(num5 + "=" + " " + "genap");
}else {
    console.log(num5 + "=" + " " + "ganjil");
}
console.log("===RANDOM===");
let resultRandom = Math.floor(Math.random() * 5)+1;
console.log(resultRandom);











