function validacao() {
    let servico = getElementById("servico");

        const dono_pet = document.getElementById("dono_pet");
        const telefone_dono = document.getElementById("telefone_dono");
        const cpf_dono = document.getElementById("cpf_dono");
        const senha_dono = document.getElementById("senha_dono");
        const email_dono = document.getElementById("email_dono");
    
        if (dono_pet.value == "") {
            alert("Erro: O campo Nome está em branco!");
            return false;
        }
        if (telefone_dono.value == "") {
            alert("Erro: O campo Email está em branco!");
            return false;
        }
        if (cpf_dono.value == "") {
            alert("Erro: O campo Senha está em branco!");
            return false;
        }
        if (senha_dono.value == "") {
            alert("Erro: O campo Cidade está em branco!");
            return false;
        }
        if (email_dono.value == "") {
            alert("Erro: Escolha ao menos um item!");
            return false;
        }
        if (dono_pet.value.legth > "30") {
            alert("muitos caracteres!");
            return false;
        }
        if (telefone_dono.value.legth > "9") {
            alert("muitos caracteres!");
            return false;
        }
        if (cpf_dono.value.legth > "11") {
            alert("muitos caracteres!");
            return false;
        }
        if (senha_dono.value.legth > "20") {
            alert("muitos caracteres!");
            return false;
        }
        if (email_dono.value.legth > "50") {
            alert("muitos caracteres!");
            return false;
        }
    }