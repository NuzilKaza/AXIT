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

    filterFood(filterFunction) {
        return this.__food.filter(filterFunction);
    }

    removeFood(neededItem) {
        for (let i = 0; i < this.__food.length; i++) {
            if (this.__food[i] === (neededItem)) {
                this.__food.splice(i, 1);
            }
        }
    }

    disable() {
        if (this.__food.length === 0) {
            super.disable();
        } else {
            throw new Error('ошибка, в холодильнике есть еда');
        }
    }

    get food() {
        return this.__food.slice();
    }
}