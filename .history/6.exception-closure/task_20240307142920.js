function parseCount(value) {
	let num = Number.parseFloat(value)
	if (isNaN(num)) {
		throw new Errof('Недопустимое значение')
	}
	return num;
}