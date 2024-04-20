function validacao() {

    let dono_pet = document.getElementById("dono_pet");
    let telefone_dono = document.getElementById("telefone_dono");
    let cpf_dono = document.getElementById("cpf_dono");
    let senha_dono = document.getElementById("senha_dono");
    let email_dono = document.getElementById("email_dono");
    let aviso = document.getElementById("error");


    if (dono_pet.value == "") {
        dono_pet.focus();
        aviso.innerHTML="Campo Dono do Pet está vazio!";        
        return false;
    }
    if (telefone_dono.value == "") {
        telefone_dono.focus();
        aviso.innerHTML="Campo Telefone do dono está vazio!";
        return false;
    }
    if (cpf_dono.value == "") {
        cpf_dono.focus();
        aviso.innerHTML="Campo CPF do dono está vazio!";
        return false;
    }
    if (senha_dono.value == "") {
        senha_dono.focus();
        aviso.innerHTML="Campo Senha está vazio!";
        return false;
    }
    if (email_dono.value == "") {
        email_dono.focus();
        aviso.innerHTML="Campo Email está vazio!";
        return false;
    }
    if (dono_pet.value.length > "30") {
        dono_pet.focus();
        aviso.innerHTML="Dono do pet tem muitas letras!";
        return false;
    }
    if (telefone_dono.value.length > "9") {
        telefone_dono.focus();
        aviso.innerHTML="Telefone do dono está com muitos números!";
        return false;
    }
    if (cpf_dono.value.length > "11") {
        cpf_dono.focus();
        aviso.innerHTML="CPF tem mais números do que deveria!";
        return false;
    }
    if (senha_dono.value.length > "20") {
        senha_dono.focus();
        aviso.innerHTML="Senha está com muitos caracteres!";
        return false;
    }
    if (email_dono.value.length > "50") {
        email_dono.focus();
        aviso.innerHTML="Email está com mais caracteres do que o limite!";
        return false;
    }
}

function validacao2() {
    let nome = document.getElementById("nome_pet");
    let identificacao = document.getElementById("identificacao");
    let especie = document.getElementById("especie");
    let raca = document.getElementById("raca");
    let aviso = document.getElementById("error");


    if (nome.value == "") {
        nome.focus();
        aviso.innerHTML = "Preencha o nome do pet!"
        return false;
    }
    if (identificacao.value == "") {
        identificacao.focus()
        aviso.innerHTML = "Preencha a identificação do pet!";
        return false;
    }
    if (especie.value == "") {
        especie.focus();
        aviso.innerHTML="Preencha a especie do pet!";
        return false;
    }
    if (raca.value == "") {
        raca.focus();
        aviso.innerHTML="Preencha a raça do pet!";
        return false;
    }

    if (nome.value.length > "20") {
        aviso.innerHTML="Nome do pet com muitos caracteres!";
        return false;
    }
    if (identificacao.value.length > "7") {
        identificacao.focus();
        aviso.innerHTML="Identificação do pet com muitas letras!";
        return false;
    }
    if (especie.value.length > "10") {
        especie.focus();
        aviso.innerHTML="Especie do Pet om muitos caracteres!";
        return false;
    }
    if (raca.value.length > "15") {
        raca.focus();
        aviso.innerHTML="Especie do animal com muitos caracteres!";
        return false;
    }
}

function validacao3() {
    let tosa = document.getElementById("tosa").checked;
    let banho = document.getElementById("banho").checked;
    let aparacao = document.getElementById("vacina").checked;
    let aviso = document.getElementById("error");
    
    if (tosa == false && banho == false && aparacao == false) {
        aviso.innerHTML = "Escolha o serviço à ser realizado!";
        return false;
    }
}