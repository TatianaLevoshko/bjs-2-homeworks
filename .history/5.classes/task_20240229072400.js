class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
		this.fix = function() {
			this.state *= 1.5;
		};
	}
	set state(newState) {
		if (newState < 0) {
			this._state = 0;
			debugger
		} else if (newState > 100) {
			this._state = 100;
		} else {
			this._state = newState;
		}
	}
	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		// this.state = 100;
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		// this.state = 100;
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		// this.state = 100;
		this.type = "detective";
	}
}

//проверка задачи 1

/*
const sherlock = new PrintEditionItem(
  "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
  2019,
  1008
 );

 console.log(sherlock.releaseDate); //2019
 console.log(sherlock.state); //100
 sherlock.fix();
 console.log(sherlock.state); //100

const picknick = new FantasticBook(
	"Аркадий и Борис Стругацкие",
	"Пикник на обочине",
	1972,
	168
);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15
*/

//Задача2

class Library {
	constructor(name, books) {
		this.name = name;
		this.books = [];

		this.addBook = function(book) {
			if (book.state > 30) {
				this.books.push(book);
			}
		}

		this.findBookBy = function(type, value) {
			const findResult = this.books.find((item) => item[type] === value);
			return findResult || null;
		}

		this.giveBookByName = function(bookName) {
			const book = this.findBookBy("name", bookName);
			if (!book) return null;
			this.books = this.books.filter((item) => item.name !== bookName);
			return book;
		}
	}
}

//проверка задачи 2

/*
const library = new Library("Библиотека имени Ленина");

library.addBook(
 new DetectiveBook(
   "Артур Конан Дойл",
   "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
   2019,
   1008
 )
);
library.addBook(
 new FantasticBook(
   "Аркадий и Борис Стругацкие",
   "Пикник на обочине",
   1972,
   168
 )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3
*/

//Задача3

class Student {
	constructor(name, gender, age) {
		this.name = name;
		this.gender = gender;
		this.age = age;
		this.marks = {};

		this.addMark = function(value, subject) {
			if (value >= 2 && value <= 5) {
        if (!this.marks[subject]) {
          this.marks[subject] = [];
        }
        this.marks[subject].push(value);
      } else {
        return;
      }
		}

		this.getAverageBySubject = function(subject) {
			if (!this.marks[subject]) {
				return 0;
			} else {
				return this.marks[subject].reduce((acc, item, index, arr) => {
					acc += item;
					if (index === arr.length - 1) {
						return acc / arr.length;
					}
					return acc;
				}, 0);
			}
		}

		this.getAverage = function() {
			let keys = Object.keys(this.marks);
			let sum = 0;
			for (let i = 0; i < keys.length; i++) {
				sum += this.getAverageBySubject(keys[i]);
			}
			return sum / keys.length || 0;
		}

	}
}


//проверка задачи 3
/*
const student = new Student("Олег Никифоров");
student.addMark(5, "химия");
student.addMark(5, "химия");
student.addMark(5, "физика");
student.addMark(4, "физика");
student.addMark(6, "физика"); // Оценка не добавится, так как больше 5
student.getAverageBySubject("физика"); // Средний балл по предмету физика 4.5
student.getAverageBySubject("биология"); // Вернёт 0, так как по такому предмету нет никаких оценок.
student.getAverage(); // Средний балл по всем предметам 4.75
*/