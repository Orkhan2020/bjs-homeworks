//Task1

function parseCount(value) {
    if (isNaN(value)) {
        throw new Error("Невалидное значение");
    }
    return Number.parseInt(value, 10);
}

function validateCount(value) {
    try {
        return parseCount(value);
    }
    catch(err) {
        return err;
    }
}

//Task2

class Triangle {
    constructor(a, b, c) {
        if(a + b < c || a + c < b || b + c < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }

        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        let p = this.getPerimeter() / 2;
        return Number.parseFloat(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    }
    catch {
        return {
            getArea: () => "Ошибка! Треугольник не существует",
            getPerimeter: () => "Ошибка! Треугольник не существует"
        }
    }
}