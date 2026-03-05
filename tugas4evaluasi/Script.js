function shout() {
    alert("Hai, Selamat datang di Sistem Sederhana");
}

function goHome() {
    document.getElementById("homePage").classList.remove("hidden");
    document.getElementById("menuPage").classList.add("hidden");
    document.getElementById("calculatorPage").classList.add("hidden");
}

function showMenu() {
    alert("Input jumlah pesanan agar dihitung otomatis oleh sistem");
    document.getElementById("homePage").classList.add("hidden");
    document.getElementById("menuPage").classList.remove("hidden");
    document.getElementById("calculatorPage").classList.add("hidden");
}

function showCalculator() {

    alert("inputan pertama dan kedua harus lebih dari 0");

    document.getElementById("homePage").classList.add("hidden");
    document.getElementById("menuPage").classList.add("hidden");
    document.getElementById("calculatorPage").classList.remove("hidden");
}

function hitungTotal() {

    let bakso = document.getElementById("bakso");
    let soto  = document.getElementById("soto");
    let mie   = document.getElementById("mie");

    if (!bakso || !soto || !mie) return;

    let total =
        (Number(bakso.value) * 12000) +
        (Number(soto.value) * 10000) +
        (Number(mie.value) * 15000);

    let diskon = 0;

    if (total > 50000) {
        diskon = total * 0.10;
    }

    let bayar = total - diskon;

    document.getElementById("total").value = total;
    document.getElementById("diskon").value = diskon;
    document.getElementById("bayar").value = bayar;
}

function resetMenu() {
    document.getElementById("bakso").value = 0;
    document.getElementById("soto").value = 0;
    document.getElementById("mie").value = 0;
    document.getElementById("total").value = 0;
    document.getElementById("diskon").value = 0;
    document.getElementById("bayar").value = 0;
}



function hitungManual() {

    let a = document.getElementById("angka1").value;
    let b = document.getElementById("angka2").value;
    let op = document.getElementById("operator").value;

    if (a === "" || b === "" || a <= 0 || b <= 0) {
        alert("inputan pertama dan kedua harus lebih dari 0");
        return;
    }

    a = Number(a);
    b = Number(b);

    let hasil;

    switch (op) {
        case '+': hasil = a + b; break;
        case '-': hasil = a - b; break;
        case '*': hasil = a * b; break;
        case '/': hasil = a / b; break;
    }

    document.getElementById("hasil").value = hasil;
}

function resetCalc() {
    document.getElementById("angka1").value = "";
    document.getElementById("angka2").value = "";
    document.getElementById("hasil").value = "";
}
