"use strict";

//Task 1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    
    fix() {
        this.state *= 1.5;
    }

    set state(state) {
        if (state < 0) {
            this._state = 0;
        }
        else if (state > 100) {
            this._state = 100;
        }
        else
            this._state = state;
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state) {
        super(name, releaseDate,pagesCount, state);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(name, releaseDate,pagesCount, state);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate,pagesCount, state);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate,pagesCount, state);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate,pagesCount, state);
        this.type = "detective";
    }
}

//Task 2

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (let i = 0; i < this.books.length ; i++) {
            if (this.books[i][type] == value) {
                return this.books[i];
            }
        }
        return null;
    }

    giveBookByName(bookName) {
        let ourBook = this.findBookBy("name", bookName);
        if (ourBook == null) {
            return null;
        }
        this.books.splice(this.books.indexOf(ourBook), 1); 
        return ourBook;
    }
}

//Task 3

class StudentLog {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) {

        if (typeof this.marks[subject] === "undefined") {
            this.marks[subject] = [];
        }

        if (grade < 1 || grade > 5 || isNaN(grade)) {
            console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
            return this.marks[subject].length;
        }
        else 
            this.marks[subject].push(grade);
            return this.marks[subject].length;
    }

    getAverageBySubject(subject) {
        let subjectSum = 0;

        if (this.marks[subject].length == 0) {
            return 0;
        }

        for (let i = 0; i < this.marks[subject].length; i++){
            subjectSum += this.marks[subject][i];      
        }
        return subjectSum / this.marks[subject].length;
    }

    getTotalAverage() {

        let sum = 0;
        let length = 0;
        if (Object.keys(this.marks).length === 0) {
            return 0;
        } 
        else {
            for (let key in this.marks) {
                length += this.marks[key].length;
                for (let i = 0; i < this.marks[key].length; i++) {
                    sum += this.marks[key][i];
                 } 
            }
            return sum / length;
        }
    }
}