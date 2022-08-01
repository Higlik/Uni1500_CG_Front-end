


document.getElementById("btnDuplica").addEventListener("click", addRows);

function addRows() { 

	const node = document.getElementById("coluna");
	const clone = node.cloneNode(true);
	document.body.appendChild(clone);


	
	
}

