


document.getElementById("btnclick").addEventListener("click", Pesquisar);


function Pesquisar() {
    console.log("Entrou Pesquisar");

    var Filtrar, Tabela, tr, td, th, i;
    Filtrar = document.getElementById("Busca");
    Filtrar = Filtrar.value.toUpperCase();
    Tabela = document.getElementById("tabela");
    tr = Tabela.getElementsByTagName("tr");
    th = Tabela.getElementsByTagName("th");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");

        
        for (j = 0; j < td.length; j++) {

       
        if (td[j]) {
            if (td[j].innerHTML.toUpperCase().indexOf(Filtrar) > -1) {
                tr[i].style.display = "";
                break
            } else {
                tr[i].style.display = "none";
            }
            }
        }
    }
}