function getSolutions(a, b, c) {

    let D = Math.pow(b, 2) - 4 * a * c;
    let roots = [];
    let X1 = 0;
    let X2 = 0;

    if (D < 0) {
        return { D: D, roots: [] }
    }
    if (D == 0) {
        X1 = -b / 2 * a;
        return { D: D, roots: [X1] }
    }
    if (D > 0) {
        X1 = (-b + Math.sqrt(D)) / 2 * a;
        X2 = (-b - Math.sqrt(D)) / 2 * a;
        return { D: D, roots: [X1, X2] }
    }
}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c)
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D < 0) {
        console.log("Уравнение не имеет вещественных корней");
    }
    if (result.D == 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    }
    if (result.D == 0) {
        console.log(`Уравнение имеет два корня, ${result.roots[0]} и ${result.roots[1]}`);
    }
}

function getAverageMark(marks) {

    let summ = 0;

    if (marks.length > 10) {
        marks.splice(10);
        console.log("Оценок больше десяти. Учитываются первые 10");
    }
    if (marks.length == 0) {
        return 0;
    } else {

        for (let i = 0; i < marks.length; i++) {
            summ += marks[i];
        }
    }
    return summ / marks.length
}


function getAverageScore(data) {

    const arrMarks = {};
    let summAllMarks = 0;
    for (let k in data) {
        arrMarks[k] = getAverageMark(data[k]);
        summAllMarks += arrMarks[k];    // Посчитали среднюю оценку по каждому предмету и создали массив из оценок
    }
    arrMarks.average = summAllMarks / Object.keys(data).length;  // создали новый ключ со средним значением в объект
    if (Object.keys(data).length == 0) {
        arrMarks.average = 0
    }
    return arrMarks
}

function getDecodedValue(secret) {
    return (secret == 1) ? 'Эмильо' : 'Родриго';
}

function getPersonData(secretData) {

    return { firstName: getDecodedValue(secretData.aaa), lastName: getDecodedValue(secretData.bbb) }

}