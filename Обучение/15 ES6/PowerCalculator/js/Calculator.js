class Calculator {
    operations = {
        '+'(a, b) {
            return a + b;
        },

        '-'(a, b) {
            return a - b;
        }
    };

    calculate(expression) {
        let [a, operation, b] = expression.split(' ');
        return this.operations[operation](+a, +b);
    }

    addMethod(operation, func) {
        this.operations[operation] = func;
    }
}