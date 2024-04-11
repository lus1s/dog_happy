function validacao() {
    alert("vacca");
    const nomepet = document.getElementById("nomepet");
    const raça = document.getElementById('raçapet').value;
    alert('oii');

    if (nomepet.value == "") {
        alert("Preencha o nome do seu pet");
        return false;
    }
    
}