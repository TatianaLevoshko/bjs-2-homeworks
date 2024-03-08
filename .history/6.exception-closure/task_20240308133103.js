// Задача 1. Форматирование чисел

function parseCount(value) {
	let num = Number.parseFloat(value)  			//парсинг
	if (isNaN(num)) {								//проверка на значение
		throw new Error('Недопустимое значение')	//выброс ошибки
	}
	return num;										//возврат результата
}

function validateCount(value) {
	try {
		return parseCount;
	} catch (err) {
	return err;	
}
}

// Задача 2. Треугольник

class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
		
		if (a + b <= c || a + c <= b || b + c <= a) {
		// Если сумма двух сторон меньше или равна третьей стороне, накой треугольник не существует
			throw new Error('Треугольник с таким отклонением не существует')
			// Выброс ошибки
		}
		get perimeter() {
			return ...				// должен вернуть периметр треугольника
		}
		get area() {
			return ...				// должен вернуть площадь треугольника
		}
	}
}

function 