

function duplicateRows(elemento) { 


	var linha = elemento.closest('tr');
	const tbody = document.getElementById('tbodyListagem');

	
	const clone = linha.cloneNode(true);
	tbody.appendChild(clone);


}

