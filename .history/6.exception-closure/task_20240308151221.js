
function parseCount(value) {
	let num = Number.parseFloat(value)
	if (isNaN(num)){
	  throw new Error('Невалидное значение');
	}
	return num;
  } 
  
  function validateCount(value) {
	try {
	  return parseCount(value)
	} catch (error) {
	  return error;
	}
  }


class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
		
		if (a + b < c || a + c < b || b + c < a) {
			throw new Error('Треугольник с таким отклонением не существует');
		}
		  }
		}
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch {
		return {
			get perimeter() {
			return 'Ошибка! Треугольник не существует';
			},
	
			get area() {
			  return 'Ошибка! Треугольник не существует';
			}	
		}
	}