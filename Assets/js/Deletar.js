


document.getElementById("btnDeleta").addEventListener("click", deleteRow);


function deleteRow() {

        var table = document.getElementById('tabela');
        var rowCount = table.rows.length;
       
            var row = table.deleteRow(rowCount - 1);
            rowCount--;
     
            alert('Sua linha foi excluida!');
       
    
    }


