function myFunction(){
    let a = document.getElementById("input").value;
    let hasil

    if (a > 0) {
        hasil = a + " adalah bilangan positif";
    } else if (a < 0) {
        hasil = a + " adalah bilangan negatif";
    } else {
        hasil = a + " adalah bilangan nol";
    }
    document.getElementById("hasil").innerHTML = hasil;
}
