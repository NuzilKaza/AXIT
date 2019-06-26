class CoffeeMachine {
    constructor(power) {
        this.power = power;
        this.waterAmount = 0;
    }

    run() {
        this.timerId = setTimeout(this.__onReady, this.__getBoilTime());
    };

    stop() {
        clearInterval(this.timerId);
    }

    __getBoilTime() {
        const WATER_HEAT_CAPACITY = 4200;
        return this.waterAmount * WATER_HEAT_CAPACITY * 80 / this.power;
    }

    __onReady() {
        alert( 'Кофе готов!' );
    }
}