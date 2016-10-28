(function() {
	var MX = 6;
	var MY = 6;
	
	var box = [
		[' ',' ',' ',' ',' ',' '],
		[' ',' ',' ',' ',' ',' '],
		[' ',' ',' ',' ',' ',' '],
		['п','о','д','к','о','п'],
		[' ',' ',' ',' ',' ',' '],
		[' ',' ',' ',' ',' ',' ']
	];
	var buttons = [[],[],[],[],[],[]];
	var crow, ccell;
	table = document.createElement('table');
	for(let i = 0; i < MX; i++) {
		crow = table.insertRow(i);
		for(let j = 0; j < MY; j++) {
			ccell = crow.insertCell(j);
			ccell.innerHTML = "<button id='"+ i.toString() + "_" + j.toString() + "'></button>";
		}
	}
	document.body.appendChild(table);
	
})();