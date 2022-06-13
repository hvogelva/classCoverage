function applyLines() {
	let linesInput = document.getElementById('uncoveredLines').value;
	let linesArray = linesInput.split(',');
	let first = true;

	for (let i = 0; i < linesArray.length; i++) {
		let line = linesArray[i].trim();
		let totalLines = myCodeMirror.lineCount();

		if (line != '' && !isNaN(line) && line > 0 && line <= totalLines) {
			if (first) {
				document.getElementsByClassName("CodeMirror")[0].style.background = '#264c15';
			}

			myCodeMirror.addLineClass(Number(line) - 1, 'wrap', 'uncovered-line');
			first = false;
		}
	}
}

function clearLines() {
	document.getElementsByClassName("CodeMirror")[0].style.background = '';

	let totalLines = myCodeMirror.lineCount();

	for (let i = 1; i <= totalLines; i++) {
		myCodeMirror.removeLineClass(i - 1);
	}
}

function clearForm() {
	myCodeMirror.setValue('');
	document.getElementById('uncoveredLines').value = '';
	document.getElementsByClassName("CodeMirror")[0].style.background = '';
}