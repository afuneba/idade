function ageCheck() {
    let currentYear = 2022;
    var birthYear = Number(document.getElementById("year").value);
    var yearChecked = currentYear - birthYear;

    if (yearChecked > 18) {                                          
        alert('Tudo bem!');
        window.location.href = "https://socialclub.rockstargames.com/";
    }
    else {
        alert('VOCÊ NÃO TEM 18 ANOS! Para Entrar No Nosso Site');
    }

}