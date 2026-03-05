function shout() {
    alert("Hai, Selamat datang di Sistem Sederhana");
}

function goHome() {
    document.getElementById("homePage").classList.remove("hidden");
    document.getElementById("menuPage").classList.add("hidden");
    document.getElementById("calculatorPage").classList.add("hidden");
    document.getElementById("garisHidupPage").classList.add("hidden");
}

function showMenu() {
    alert("Input jumlah pesanan agar dihitung otomatis oleh sistem");

    document.getElementById("homePage").classList.add("hidden");
    document.getElementById("menuPage").classList.remove("hidden");
    document.getElementById("calculatorPage").classList.add("hidden");
    document.getElementById("garisHidupPage").classList.add("hidden");
}

function showCalculator() {

    alert("inputan pertama dan kedua harus lebih dari 0");

    document.getElementById("homePage").classList.add("hidden");
    document.getElementById("menuPage").classList.add("hidden");
    document.getElementById("calculatorPage").classList.remove("hidden");
    document.getElementById("garisHidupPage").classList.add("hidden");
}

function showGarisHidup(){

    document.getElementById("homePage").classList.add("hidden");
    document.getElementById("menuPage").classList.add("hidden");
    document.getElementById("calculatorPage").classList.add("hidden");
    document.getElementById("garisHidupPage").classList.remove("hidden");
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


function hitungGaris(){

    let tgl = document.getElementById("tgl").value;
    let bln = document.getElementById("bulan").value;
    let thn = document.getElementById("tahun").value;


    let gabung = tgl + bln + thn;
    let angka = gabung.split("");

    let hasil1 = 0;

    for(let i=0;i<angka.length;i++){
        hasil1 += parseInt(angka[i]);
    }

    let hasil2 = hasil1.toString().split("").reduce((a,b)=>parseInt(a)+parseInt(b));

    let hasilAkhir = hasil2;

    document.getElementById("outTgl").value = tgl;
    document.getElementById("outBulan").value = bln;
    document.getElementById("outTahun").value = thn;

    document.getElementById("hasil1").value = hasil1;
    document.getElementById("hasil2").value = hasil2;
    document.getElementById("hasilAkhir").value = hasilAkhir;

    let judul = "Tanggal Lahir Anda Berada Pada Garis Hidup " + hasilAkhir;
    let arti = "";

    if(hasilAkhir == 1){
        arti = "Garis hidup 1 menunjukkan pribadi yang mandiri, berjiwa pemimpin, dan penuh inisiatif.";
    }

    else if(hasilAkhir == 2){
        arti = "Garis hidup 2 menggambarkan pribadi yang peka, penuh empati, dan mampu bekerja sama.";
    }

    else if(hasilAkhir == 3){
        arti = `
      Bagi mereka yang jumlah angka hari lahirnya 3, ekspresi, sosialisasi, dan kreativitas
sebagai pelajaran yang harus ditempuh dalam hidupnya.

Entertainer kelas dunia, orang-orang yang berkilau dan optimistik termasuk di dalamnya.
Orang-orang dengan garis hidup 3 yang telah mengasah bakatnya mempunyai bakat kreatif
yang istimewa.

Misi yang harus dicapai dalam hidup adalah kesuksesan dalam berekspresi dan berbagi
kebahagiaan kepada orang lain.
        `;
    }

    else if(hasilAkhir == 4){
        arti = "Garis hidup 4 menunjukkan pribadi yang disiplin, pekerja keras, dan memiliki fondasi hidup kuat.";
    }

    else if(hasilAkhir == 5){
        arti = "Garis hidup 5 menggambarkan pribadi yang menyukai kebebasan, perubahan, dan petualangan.";
    }

    else if(hasilAkhir == 6){
        arti = "Garis hidup 6 mencerminkan pribadi yang bertanggung jawab dan peduli terhadap keluarga.";
    }

    else if(hasilAkhir == 7){
        arti = "Garis hidup 7 menggambarkan pribadi yang suka berpikir mendalam dan mencari pengetahuan.";
    }

    else if(hasilAkhir == 8){
        arti = "Garis hidup 8 berkaitan dengan ambisi, kepemimpinan, dan potensi kesuksesan materi.";
    }

    else if(hasilAkhir == 9){
        arti = "Garis hidup 9 menunjukkan pribadi yang penuh empati, kemanusiaan, dan idealisme.";
    }

    document.getElementById("judulGaris").innerHTML = judul;
    document.getElementById("artiGaris").innerHTML = arti;
}


function resetGaris(){

    document.getElementById("outTgl").value="";
    document.getElementById("outBulan").value="";
    document.getElementById("outTahun").value="";
    document.getElementById("hasil1").value="";
    document.getElementById("hasil2").value="";
    document.getElementById("hasilAkhir").value="";

    document.getElementById("judulGaris").innerHTML="";
    document.getElementById("artiGaris").innerHTML="";
}