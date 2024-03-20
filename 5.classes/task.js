class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100; //  Начальное значение состояния.
        this.type = null;
    }

    fix() {
        let newState = this.state * 1.5; // Состояние умножается на 1.5.
        if (newState > 100) {
            newState = 100; // Если новое состояние больше 100, оно устанавливается на 100.
        }
        this._state = newState; // Устанавливается новое значение состояния.
    }

    set state(newState) {
        // Сеттер для установки состояния, проверяющий его на допустимость.
        if (newState < 0) {
            this._state = 0; //  Если новое состояние меньше 0, устанавливается на 0.
        } else if (newState > 100) {
            this._state = 100; // Если новое состояние больше 100, устанавливается на 100.
        } else {
            this._state = newState; // В остальных случаях устанавливается переданное значение состояния.
        }
    }

    get state() {
        return this._state; // Геттер для получения значения состояния.
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine'; // Устанавливается тип журнала.
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author; // Устанавливается автор книги.
        this.type = 'book'; // Устанавливается тип книги.
        this.state = 100; // Устанавливается начальное значение состояния.
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author; // Устанавливается автор книги.
        this.type = 'novel'; // Устанавливается тип романа.
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author; // Устанавливается автор книги.
        this.type = 'fantastic'; // Устанавливается тип фантастики.
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author; // Устанавливается автор книги.
        this.type = 'detective'; // Устанавливается тип детектива.
    }
}

//Задача2

class Library {
    constructor(name) {
        this.name = name; // Устанавливается имя библиотеки.
        this.books = []; // Инициализируется пустой массив для хранения книг.
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book); // Книга добавляется в библиотеку, если ее состояние больше 30.
        }
    }

    findBookBy(type, value) {
        return this.books.find(book => book[type] === value) || null; // Поиск книги по указанному критерию.
    }

    giveBookByName(bookName) {
        const index = this.books.findIndex(book => book.name === bookName); // Поиск индекса книги по имени.
        if (index !== -1) {
            return this.books.splice(index, 1)[0]; // Если книга найдена, она удаляется из массива и возвращается.
        }
        return null; // Если книга не найдена, возвращается null.
    }
}


const picknick = new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
);


const library = new Library("Библиотека имени Ленина");

let sherlock = new DetectiveBook(
    "Артур Конан Дойл",
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
)
