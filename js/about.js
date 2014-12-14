
function scaleContentToSize() {
	var elements = document.querySelectorAll('#aboutus-widget section'), i;
	var canvas = document.getElementById('aboutus-widget');

	var canvasHeight = canvas.offsetHeight - canvas.childNodes[1].offsetHeight;

	var hidingNames = false;
	var hidingTowns = false;
	var hidingTables = false;

	for (i in elements) {
		var picHeight;
		var nameHeight;
		var townHeight;
		var tableHeight;
		var currentHeight = 0;

		var childNodes = elements[i].childNodes;
		if (childNodes == undefined)
			continue;

		for (j = 0, k = childNodes.length; j < k; j++) {
			elements[i].style.backgroundColor = '#f7f7f7';
			if ( childNodes[j].tagName == "IMG") {
				picHeight = childNodes[j].scrollHeight;
				currentHeight = currentHeight + picHeight;
			}
			if ( childNodes[j].tagName == "H2") {
				nameHeight = childNodes[j].scrollHeight + 60;
				if (currentHeight + nameHeight < canvasHeight) {
					currentHeight = currentHeight + nameHeight;
					childNodes[j].style.opacity = '1.0';
					//console.log("showing name");
				} else {
					childNodes[j].style.opacity = '0.0';
					hidingNames = true;
					//console.log("hiding name");
				}
			}
			if ( childNodes[j].tagName == "H3") {
				townHeight = childNodes[j].scrollHeight + 10;
				if (currentHeight + townHeight < canvasHeight) {
					currentHeight = currentHeight + townHeight;
					childNodes[j].style.opacity = '1.0';
					//console.log("showing town");
				} else {
					childNodes[j].style.opacity = '0.0';
					//console.log("hiding town");
					hidingTowns = true;
				}
			}
			if ( childNodes[j].tagName == "TABLE") {
				tableHeight = childNodes[j].scrollHeight + 20;
				if (currentHeight + tableHeight < canvasHeight) {
					currentHeight = currentHeight + tableHeight;
					childNodes[j].style.opacity = '1.0';
					//console.log("showing table");
				} else {
					childNodes[j].style.opacity = '0.0';
					hidingTables = true;
					//console.log("hiding table");
				}
			}
		}
	}

	for (i in elements) {
		var childNodes = elements[i].childNodes;
		if (childNodes == undefined)
			continue;

		for (j = 0, k = childNodes.length; j < k; j++) {
			if ( hidingNames && childNodes[j].tagName == "H2") {
				childNodes[j].style.opacity = '0.0';
				elements[i].style.backgroundColor = 'transparent';
				console.log('set background color off');
			}
			if ( hidingTowns && childNodes[j].tagName == "H3") {
				childNodes[j].style.opacity = '0.0';
			}
			if ( hidingTables && childNodes[j].tagName == "TABLE") {
				childNodes[j].style.opacity = '0.0';
			}
		}
	}
}

window.onload = scaleContentToSize;
window.onresize = scaleContentToSize;