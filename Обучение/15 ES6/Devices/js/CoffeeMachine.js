class CoffeeMachine {
    constructor(power, capacity) {
        this.__power = power;
        this.__capacity = capacity;
        this.__waterAmount = 0;
    }

    run() {
        this.__timerId = setTimeout(() => {
            this.__timerId = 0;
            this.__onReady();
        }, this.__getBoilTime());
    };

    stop() {
        clearInterval(this.__timerId);
    }

    addWater(amount) {
        this.waterAmount = this.waterAmount + amount;
    }

    isRunning() {
        return !!this.__timerId;
    }

    set onReady(newOnReady) {
        this.__onReady = newOnReady;
    }

    set waterAmount(amount) {
        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (amount > this.__capacity) {
            throw new Error(`Нельзя залить воды больше, чем ${this.__capacity}`);
        }

        this.__waterAmount = amount;
    };

    get waterAmount() {
        return this.__waterAmount;
    };

    get power() {
        return this.__power;
    }

    __getBoilTime() {
        const WATER_HEAT_CAPACITY = 4200;
        return this.waterAmount * WATER_HEAT_CAPACITY * 80 / this.__power;
    }

    __onReady() {
        alert( 'Кофе готов!' );
    }
}