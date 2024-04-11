function validacao() {
    alert("vacca");
    const nomepet = document.getElementById("nomepet");
    const raca = document.getElementById('racapet');
    alert('oii');

    if (nomepet.value == "") {
        alert("Preencha o nome do seu pet");
        return false;
    }
    

    if (raca.value == "") {
        alert("Preencha o nome do seu pet");
        return false;
    }
    
}