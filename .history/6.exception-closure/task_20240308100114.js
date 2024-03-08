// Задача 1.

function parseCount(value) {
	let num = Number.parseFloat(value)  			//парсинг
	if (isNaN(num)) {								//проверка на значение
		throw new Error('Недопустимое значение')	
	}
	return num;
}

function validateCount(value) {
	try {
		return parseCount;
	} catch (err) {
	return err;	
}
}