"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {

    if (typeof (percent) != "num" || percent <= 0 || Number.isNaN(percent)) {
        return "Процентная ставка введена некорректно";
    }
    if (typeof (contribution) != "num" || contribution < 0 || Number.isNaN(contribution)) {
        return "Первоначальный взнос введен некорректно";
    }
    if (typeof (amount) != "num" || amount < 0 || Number.isNaN(amount)) {
        return "Сумма кредита введена некорректно";
    }
    if (Number.isNaN(date)) {
        return "Введете дату корректно";
    }
    if (contribution >= amount) {
        return 0;
    }

    let S = amount - contribution;
    let P = (percent / 100) * 1 / 12;
    let N = 12 * (date.getFullYear() - new Date().getFullYear()) + (date.getMonth() + 1) - (new Date().getMonth() + 1);
    console.log(`Количество месяцев выплаты ипотеки ${N}`);
    // Платеж = S * ( P + P / ( (  ( 1 + P ) ^ n ) - 1 ) )
    let totalAmount = N * (S * (P + P / ((Math.pow((1 + P), N)) - 1)));
    console.log(`Сумма выплаты ипотеки составляет : ` + totalAmount.toFixed(2) + `руб. Осталось месяцев оплаты ${N}`);
    return parseFloat(totalAmount.toFixed(2));
}

function getGreeting(name) {
    if (name == null || name == undefined || name == "") {
        name = "Аноним";
    }
    console.log(`Привет, мир! Меня зовут ${name}`)
    return String(`Привет, мир! Меня зовут ${name}`)
}