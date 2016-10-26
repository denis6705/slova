(function() {
	var MX = 6;
	var MY = 6;
	
	var box = [
		[' ',' ',' ',' ',' ',' '],
		[' ',' ',' ',' ',' ',' '],
		[' ',' ',' ',' ',' ',' '],
		['ï','î','ä','ê','î','ï'],
		[' ',' ',' ',' ',' ',' '],
		[' ',' ',' ',' ',' ',' ']
	];
	var buttons = [[],[],[],[],[],[]];
	var crow, ccell;
	table = document.createElement('table');
	for(var i = 0; i < MX; i++) {
		crow = table.insertRow(i);
		for(var j = 0; j < MY; j++) {
			ccell = crow.insertCell(j);
			ccell.innerHTML = "<button id='"+ i.toString() + "_" + j.toString() + "'></button>";
		}
	}
	document.body.appendChild(table);
	
})();