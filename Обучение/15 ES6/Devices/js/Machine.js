class Machine {
    constructor(power) {
       this.__power = power;
       this._enabled = false;
    }

    enable() {
        this._enabled = true;
    }

    disable() {
        this._enabled = false;
    }

    get power() {
        return this.__power;
    }
}