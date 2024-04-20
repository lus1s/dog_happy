<?php
session_start();
require_once 'conexao.php';

$origem = $_GET["origem"];

if ($origem == "1") {

    $nome_dono = $_GET["dono_pet"];
    $telefone = $_GET["telefone_dono"];
    $cpf = $_GET["cpf_dono"];
    $password = $_GET["senha_dono"];
    $email = $_GET["email_dono"];

    $_SESSION['dados'] = array($nome_dono, $telefone, $cpf, $password, $email);

    header('Location: formulario_pet.html');
    exit();
} elseif ($origem == "2") {

    $nome = $_GET["nome_pet"];
    $identificacao = $_GET["identificacao"];
    $especie = $_GET["especie"];
    $raca = $_GET["raca"];

    $_SESSION['dados'][] = $identificacao;
    $_SESSION['dados'][] = $nome;
    $_SESSION['dados'][] = $especie;
    $_SESSION['dados'][] = $raca;

    header('Location: servico_oferecido.html');
    exit();
} elseif ($origem == "3") {

    $servico = $_GET["servico"];

    $_SESSION['dados'][] = $servico;

    list($dono, $telefone, $CPF, $senha, $email, $id, $nome_pet, $especie_pet, $raca_pet, $servico_of) = $_SESSION['dados'];

    $sql = "INSERT INTO tb_pet (dono_pet, telefone_dono, cpf_dono, senha_dono, email_dono, identificacao_pet, 
            nome_pet, especie_pet, raca_pet, servico_oferecido) VALUES ('$dono', '$telefone', '$CPF', '$senha',
            '$email', '$id', '$nome_pet', '$especie_pet', '$raca_pet', '$servico_of')";

    mysqli_query($conexao, $sql);
    
    unset($_SESSION['dados']);
    header('Location: index.php');
    exit();
}
