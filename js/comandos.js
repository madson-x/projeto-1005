var dbMetas = localStorage.getItem("dbMetas"); //Carregar os dados da localStorage
var opcao = "A"; //"A"=Incluir; "E"=Editar
dbMetas = JSON.parse(dbMetas); // Coverter o objeto
if (dbMetas === null) // Se não existe, criamos um array vazio.
    dbMetas = [];

function Aviso(t) {
    switch (t) {
        case 1: //
            $(".msg-alerta").append(
                "<div class='alert alert-success' role='alert'>Meta adicionada com êxito.</div>"
            );
            break;
        case 2: //
            $(".msg-alerta").append(
                "<div class='alert alert-danger' role='alert'>Meta excluída.</div>"
            );
            break;
        default:
    }
}


function Incluir() {
    // Selecionamos os dados dos inputs do formulario.
    var dados = JSON.stringify({
        Titulo: $("#titulo").val(),
        Descricao: $("#descricao").val(),
        Data_Inicio: $("#dateIni").val(),
        Data_Termino: $("#dateFin").val(),
    });
    dbMetas.push(dados); // Armazenar os dados no array definido globalmente.
    localStorage.setItem("dbMetas", JSON.stringify(dbMetas)); //armazena no localstorage a atividade.
    ListarMetas(); // Chama a função de carregar o formulário na home.
    return Aviso(1); // Informa o usuário o resultado da inclusão.
}

function ListarMetas() {
    $("#tabelaLista").html(
        "<thead>" +
        "<tr>" +
        "<th> ID </th>" +
        "<th> Titulo </th>" +
        "<th> Descricao </th>" +
        "<th> Data de Início </th>" +
        "<th> Data de Término </th>" +
        "<th> </th>" +
        "<th>  </th>" +
        "</tr>" +
        "</thead>" +
        "<tbody>" +
        "</tbody>"
    );

    for (var i in dbMetas) {
        var d = JSON.parse(dbMetas[i]);
        $("#tabelaLista").append(
            "<tr>" +
            "<td>" + i + "</td>" +
            "<td>" + d.Titulo + "</td>" +
            "<td>" + d.Descricao + "</td>" +
            "<td>" + d.Data_Inicio + "</td>" +
            "<td>" + d.Data_Termino + "</td>" +
            "<td> <a id='" + i + "' class='btnEditar' href='#'> <span class='glyphicon glyphicon-pencil'> </span>  </a> </td>" +
            "<td> <a id='" + i + "' class='btnEliminar' href='#'> <span class='glyphicon glyphicon-trash'> </span> </a> </td>" +
            "</tr>"
        );
    }

}


if (dbMetas.length !== 0) {
    ListarMetas();
} else {
    $("#tabelaLista").append("<h2> Não existem metas. </h2>");
}

function contMetas() {
    var metas = dbMetas;
    nmetas = metas.length;

    $("#totMetas").append(
        "<a>Contador de metas" + "<br>" + "<span class='badge'>" + nmetas + "</span></a> Metas"
    );
    return nmetas;
}

function Eliminar(e) {  // Captura a posição no formulario a atividade a ser excluída.
    dbMetas.splice(e, 1); 
    localStorage.setItem("dbMetas", JSON.stringify(dbMetas)); //Exclui a atividade na local Storage.
    return Aviso(2); //Retorna o aviso da atividade excluída;
}

function Editar() {
    dbMetas[indice_selecionado] = JSON.stringify({ //Captura o indice selecionado da atividade a ser editada.
        Titulo: $("#titulo").val(),         //Carrega os cados no formulário para a edição.
        Descricao: $("#descricao").val(),   // ""
        Data_Inicio: $("#dateIni").val(),   // ""
        Data_Termino: $("#dateFin").val(),  // ""
    });
    localStorage.setItem("dbMetas", JSON.stringify(dbMetas)); // Após atualizado é inserido os dados na mesma posição já armazenada.
    opcao = "A";
    return true;
}

$(".btnEliminar").bind("click", function () {
    alert("Deseja realmente excluir?");
    indice_selecionado = $(this).attr("id"); // "this" contém o elemento selecionado no contexto atual
    console.log(indice_selecionado);
    console.log(this);
    Eliminar(indice_selecionado); // Remoção do elemento que foi acionado o comando excluir
    ListarMetas();
});

$(".btnEditar").bind("click", function () {
    alert("Editar Meta?");    
    $(".modo").html("<span class='glyphicon glyphicon-pencil'> </span> Edição");
    opcao = "E";
    indice_selecionado = $(this).attr("id");
    console.log(indice_selecionado);
    console.log(this);
    // Enviando ao formulario os dados a serem editados
    var vacaItem = JSON.parse(dbMetas[indice_selecionado]);
    $("#titulo").val(vacaItem.Titulo);
    $("#descricao").val(vacaItem.Descricao);
    $("#dateIni").val(vacaItem.Data_Inicio);
    $("#dateFin").val(vacaItem.Data_Termino);
    $("#titulo").focus();
});


contMetas();
// Aguardando o evento de envio do formulário!
$("#formAtv").bind("submit", function () {
    debugger;
    if (opcao == "A")
        return Incluir();
    else {
        return Editar();
    }
});
