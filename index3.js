let num1 = 4
let num2 = 2

function calculator(inputNumber1, inputNumber2) {
    let Plus = inputNumber1 + inputNumber2
        console.log("hasil plus =" + Plus);
    let min = inputNumber1 - inputNumber2
        console.log("hasil min =" + min); 
    let multiplication = inputNumber1 * inputNumber2
        console.log("hasil multiplication =" + multiplication);
    let distribution = inputNumber1 / inputNumber2
        console.log("hasil distribution =" + distribution);
}
calculator(num1,num2)

console.log("======Cara 2======");
function calculatorSecond(aritmatika) {
    let input1 = 4
    let input2 = "b"
    if (typeof input1 !== 'number' || typeof input2 !== 'number') {
        console.log("Input harus berupa angka.");
        return;
    }
    if (aritmatika === "+") {
        let resultplus = input1 + input2
        console.log("hasil plus adalah plus =" + resultplus);
    } else if (aritmatika === "-"){
        let resultmin = input1 - input2
        console.log("hasil min adalah min =" + resultmin);      
    } else if (aritmatika === "*"){
        let resultMultiplication = input1 * input2
        console.log("hasil kali adalah min =" + resultMultiplication);
    } else if (aritmatika === "/"){
    let resultDistribution = input1 * input2
    console.log("hasil bagi adalah min =" + resultMultiplication);
    }

}calculatorSecond("-")

console.log("======N0 2======");

const celToFah = function(getCel) {
    let fahrenheit = (getCel * 9/5) + 32;
    return fahrenheit;
};

let celTemp = 30;
let fahTemp = celToFah(celTemp);
console.log(fahTemp);