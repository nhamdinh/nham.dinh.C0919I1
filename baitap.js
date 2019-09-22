function tong() {
    let vatly = +document.getElementById("Vat Ly_1").value;
    let hoahoc = +document.getElementById("Hoa hoc_1").value;
    let sinhhoc = +document.getElementById("Sinh hoc_1").value;
    let tong3monResult = vatly + hoahoc + sinhhoc;
    document.getElementById("tong 3 mon").value = tong3monResult;

}
function tb() {
    let vatly = +document.getElementById("Vat Ly_1").value;
    let hoahoc = +document.getElementById("Hoa hoc_1").value;
    let sinhhoc = +document.getElementById("Sinh hoc_1").value;
    let diemtbResult = (vatly + hoahoc + sinhhoc)/3;
    document.getElementById("diem trung binh").value = diemtbResult;
}

