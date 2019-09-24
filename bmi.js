function tong() {
    let cannang = +document.getElementById("calculator-cn").value;
    let chieucao = +document.getElementById("calculator-cc").value;
    let bmi = cannang / chieucao / chieucao;
    if (bmi < 18)
        document.write("Underweight");
    else if (bmi < 25.0)
        document.write("Normal");
    else if (bmi < 30.0)
        document.write("Overweight");
    else
        document.write("Obese");

}