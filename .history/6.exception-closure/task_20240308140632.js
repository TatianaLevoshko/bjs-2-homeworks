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
			return this.a + this.b + this.c;
			// должен вернуть периметр треугольника
		}
		get area() {
			const s = this.perimeter / 2;
			const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
			return area.toFixed(3);
			// должен вернуть площадь треугольника
		}
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c); //новый объект треугольника;
	} catch (error) {
		return {
			get perimeter() {
			return 'Ошибка! Треугольник не существует';
			},
	
			get area() {
			  return 'Ошибка! Треугольник не существует';
			}	
		}
	}