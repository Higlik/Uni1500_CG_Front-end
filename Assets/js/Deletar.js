


document.getElementById("btnDeleta").addEventListener("click", deleteRow);


function deleteRow(elemento) {

    var linha = elemento.closest('tr'); //var 'elemento' é igual ao elemento que gerou o evento ; todo elemento tem o método closet que pega o parente mais próximo 
    // (no caso o botão delete) que retorna a variavel linha (parente próximo), que é o elemento que queremos remover 
    
    linha.remove();

       //var table = document.getElementById('tabela');
       // var rowCount = table.rows.length;
       
       //     var row = table.deleteRow(rowCount - 1);
          
     
            alert('Sua linha foi excluida!');
       
    
    }


