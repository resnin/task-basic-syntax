export function romanToInteger(str) {
    let result = 0;
    var values = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    var digits = Object.keys(values);

    for (var i = 0; i < str.length; ++i) {
        if (digits.indexOf(str[i]) < digits.indexOf(str[i + 1])) {
            result = result - values[str[i]];
        } else {
            result = result + values[str[i]];
        }
    }
    /*
   Напишите код, преобразующий число из римской записи в арабскую.
   На вход вы получите строку, ответом должно быть число.
    */
    return result;
}
