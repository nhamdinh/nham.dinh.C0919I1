function tong() {
    let arg1 = +document.getElementById("calculator-arg_1").value;
    let arg2 = +document.getElementById("calculator-arg_2").value;
    let calculateResult = arg1 + arg2;
    document.getElementById("calculated").value = calculateResult;

}
function hieu() {
    let arg1 = +document.getElementById("calculator-arg_1").value;
    let arg2 = +document.getElementById("calculator-arg_2").value;
    let calculateResult = arg1 - arg2;
    document.getElementById("calculated").value = calculateResult;

}
function tich() {
    let arg1 = +document.getElementById("calculator-arg_1").value;
    let arg2 = +document.getElementById("calculator-arg_2").value;
    let calculateResult = arg1 * arg2;
    document.getElementById("calculated").value = calculateResult;

}
function thuong() {
    let arg1 = +document.getElementById("calculator-arg_1").value;
    let arg2 = +document.getElementById("calculator-arg_2").value;
    let calculateResult = arg1 / arg2;
    document.getElementById("calculated").value = calculateResult;

}
function reuseCalculatedValue() {
    let calculatedValue = document.getElementById("calculated").value;
    document.getElementById("calculator-arg_1").value = calculatedValue;
    document.getElementById("calculator-arg_2").value = "";
    document.getElementById("calculated").value = "";
    document.getElementById("calculator-arg_2").focus();
}

