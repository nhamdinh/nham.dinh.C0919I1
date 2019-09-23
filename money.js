function converted() {
    let sotien = +document.getElementById("amount").value;
    let so1 = +document.getElementById("from").value;
    let so2 = +document.getElementById("to").value;

    let calculateResult =  so1 / so2 * sotien;

    document.getElementById("calculated").value = calculateResult;
}
