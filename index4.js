console.log("====ARRAW FUNCTION=====");
let calculator = (aritmatika) => {
    let input1 = 4
    let input2 = 2
    if (typeof input1 !== 'number' || typeof input2 !== 'number' ) {
        console.log("Input harus berupa angka.");
    } 
    if (aritmatika === "+") {
        let resultplus = input1 + input2
        console.log("hasil plus adalah =" + resultplus);
    } else if (aritmatika === "-"){
        let resultmin = input1 - input2
        console.log("hasil min adalah =" + resultmin);      
    } else if (aritmatika === "*"){
        let resultMultiplication = input1 * input2
        console.log("hasil kali adalah  =" + resultMultiplication);
    } else if (aritmatika === "/"){
        let resultDistribution = input1 / input2
        console.log("hasil bagi adalah  =" + resultDistribution);
    }
} 
calculator("/")

console.log("====ARRAW FUNCTION CELCIUS TO FAHRENHEIT=====");

const celToFah = (getCel) => (getCel * 9/5) + 32;
let celTemp = 30;
let fahTemp = celToFah(celTemp);
console.log(fahTemp);

console.log("====CURRYING CELCIUS TO FAHRENHEIT=====");
function celCurrying(cel) {
    return function (input1) {
        return function (input2){
            return function (input3){
                return  (cel* input1/input2) + input3; {  
                } 
            }
        }
        
    }
}
let fahrenheitTemp = (celCurrying(30)(9)(5)(32));
console.log(fahrenheitTemp);
