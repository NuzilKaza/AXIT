class Fridge extends Machine {
    constructor(power) {
        super(power);
        this.__food = [];
    }

    addFood(item) {
        if (!this._enabled) {
            throw new Error('ошибка, холодильник выключен');
        } else if (this.power/100 < this.__food.length + arguments.length) {
            throw new Error('ошибка, слишком много еды');
        } else {
            for (let i = 0; i < arguments.length; i++) {
                this.__food.push(arguments[i]);
            }
        }
    }

    get food() {
        return this.__food.slice();
    }
}