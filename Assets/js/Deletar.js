


document.getElementById("btnDeleta").addEventListener("click", deleteRow);


function deleteRow(elemento) {

    var linha = elemento.closest('tr'); //var 'elemento' � igual ao elemento que gerou o evento ; todo elemento tem o m�todo closet que pega o parente mais pr�ximo 
    // (no caso o bot�o delete) que retorna a variavel linha (parente pr�ximo), que � o elemento que queremos remover 
    
    linha.remove();

       //var table = document.getElementById('tabela');
       // var rowCount = table.rows.length;
       
       //     var row = table.deleteRow(rowCount - 1);
          
     
            alert('Sua linha foi excluida!');
       
    
    }


