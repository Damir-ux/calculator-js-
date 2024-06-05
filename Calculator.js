function calculate(input) {
    const romanToArabic = {
        'I': 1, 'II': 2, 'III': 3, 'IV': 4, 'V': 5, 'VI': 6,
        'VII': 7, 'VIII': 8, 'IX': 9, 'X': 10
    };
    
    const arabicToRoman = [
        '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X',
        'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX'
    ];
    
    function isRoman(n) {
        return romanToArabic.hasOwnProperty(n);
    }
    
    function toRoman(num) {
        if (num < 1) return '';
        return arabicToRoman[num];
    }
    
    function toArabic(num) {
        return romanToArabic[num];
    }
    
    const operators = ['+', '-', '*', '/'];
    let operator;
    for (let op of operators) {
        if (input.includes(op)) {
            operator = op;
            break;
        }
    }
    
    if (!operator) {
        throw new Error("Ошибка");
    }
    
    const [left, right] = input.split(operator).map(str => str.trim());
    
    let a, b;
    let isLeftRoman = isRoman(left);
    let isRightRoman = isRoman(right);
    
    if (isLeftRoman && isRightRoman) {
        a = toArabic(left);
        b = toArabic(right);
    } else if (!isLeftRoman && !isRightRoman) {
        a = parseInt(left);
        b = parseInt(right);
    } else {
        throw new Error("Мимо");
    }
    
    if (isNaN(a) || isNaN(b) || a < 1 || a > 10 || b < 1 || b > 10) {
        throw new Error("Ошибка");
    }
    
    let result;
    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = Math.floor(a / b);
            break;
        default:
            throw new Error("Ошибка");
    }
    
    if (isLeftRoman && isRightRoman) {
        return toRoman(result);
    } else {
        return result.toString();
    }
}


console.log(calculate('2 + 2'));
console.log(calculate('VI / III'));
console.log(calculate('VII / III'));
console.log(calculate('I + II'));
console.log(calculate('I - II'));
console.log(calculate('I + 1'));
console.log(calculate('I'));
console.log(calculate('1 + 1 + 1'));
