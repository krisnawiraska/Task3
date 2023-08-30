console.log("=====no 1======");
function manipulateName(inputName) {
        console.log("1. Nama =" + " " + inputName);
    let nameLength = inputName.length;
        console.log("2. Panjang Nama =" + " " + nameLength);
    let nameUpper = inputName.toUpperCase();
        console.log("3. Uppercase =" + " " + nameUpper);
    let namelow = inputName.toLowerCase();
        console.log("4. Lowercase =" + " " + namelow);
    let firstName = inputName[0];
         console.log("5. Nama Pertama =" + " " + firstName);
    let nameSlice = inputName.slice(9, 15);
        console.log("6. Potongan Nama Panggilan =" + " " + nameSlice);
    let love = "Love JavaScript";
        console.log("7. gabungan = " + " " + firstName + " " + love);
}
  manipulateName("I Nyoman Krisna Satryaputra Wiraska");


function manipulateType(inputAge, inputHeight) {
    let changeTipeAge = parseInt(inputAge)
        console.log(changeTipeAge);
    let changeTipeHeight = parseFloat(inputHeight)
        console.log(changeTipeHeight);
}
manipulateType("22", "175")


let akuSukaBasket = true
function typeCheck(inputType) {
    console.log(typeof(akuSukaBasket));   
}
typeCheck(akuSukaBasket)


let num1 = 10
let num2 = 5
function inputPlusMin(input1, input2) {
    let result1 = input1+input2
    let result2 = input1-input2
    console.log("1. Hasil Penjumlan =" + " " + result1);
    console.log("2. Hasil Pengurangan =" + " " + result2);  
}
inputPlusMin (num1, num2)


let num3 = 6
let num4 = 2
function inputKaliBagi(input3, input4) {
    let result3 = input3*input4
    let result4 = input3/input4
    console.log("1. Hasil Penjumlan =" + " " + result3);
    console.log("2. Hasil Pengurangan =" + " " + result4);  
}
inputKaliBagi (num3, num4)



let base = 3
let exponent = 4
function inputPangkat(inputBase, inputExponent) {
    let result5 = Math.pow (inputBase, inputExponent)
    return result5
}
console.log(inputPangkat (base,exponent));


let avgArray = [5, 8, 12, 4, 6];
function averageArray(inputArray) {
    let sum = 0
    for (let i = 0; i < inputArray.length; i++) {
    sum += inputArray[i];
    }  
    let totalAvg = sum / inputArray.length;
    console.log(totalAvg)
}
averageArray(avgArray)


function oddOrEven(number) {
    if (number % 2 === 0) {
      console.log(number + " = genap");
    } else {
      console.log(number + " = ganjil");
    }
}
oddOrEven(10);
 

function generateRandom(min, max) {
    let resultRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(resultRandom);
}
generateRandom(1, 5);

console.log("========no 2========");

function celToFah(getCel) {
    let fahrenheit = (getCel * 9/5) + 32;
    return fahrenheit;
}
let celTemp = 30
let fahTemp = celToFah(celTemp)
console.log(fahTemp);

console.log("=====no 3======");
function calculatePower(base, exponent) {
    let result = Math.pow(base, exponent);
    return result;
}
console.log(calculatePower(2,3));

console.log("=====no 4======");

function checkVokal(inputhuruf) {
    if (inputhuruf = ["a","i","u","e","o"]) {
        console.log("ini adalah huruf vokal");
    } else {
        console.log("ini bukan huruf vokal");
    } 
}
checkVokal("b")



