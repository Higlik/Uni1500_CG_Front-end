
document.getElementById("btnCriar").addEventListener("click", addRows);

function addRows() {
	var table = document.getElementById('tabela');
	var rowCount = table.rows.length;
	var cellCount = table.rows[0].cells.length;
	var row = table.insertRow(rowCount);
	for (var i = 0; i <= cellCount; i++) {
		var cell = 'cell' + i;
		cell = row.insertCell(i);
		var copycel = document.getElementById('col' + i).innerHTML;
		cell.innerHTML = copycel;
		if (i == 3) {
			var radioinput = document.getElementById('col3').getElementsByTagName('input');
			for (var j = 0; j <= radioinput.length; j++) {
				if (radioinput[j].type == 'radio') {
					var rownum = rowCount;
					radioinput[j].name = 'gender[' + rownum + ']';
				}
			}
		}
	}
}