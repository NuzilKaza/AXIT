let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => {
    return a * b;
});
powerCalc.addMethod("/", (a, b) => {
    return a / b;
});
powerCalc.addMethod("**", (a, b) => {
    return Math.pow(a, b);
});

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8