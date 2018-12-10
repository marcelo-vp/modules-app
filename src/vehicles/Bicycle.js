const dangers = {
    knockOver: function() {
        return `The bicycle ${this.brand} ${this.model} will be knocked over!`;
    }
};

class Bicycle {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
        this.currentGear = 1;
        this.changeGear = {
            up: this.gearUp.bind(this),
            down: this.gearDown.bind(this)
        };
    }
    showCurrentGear() {
        return `Riding on gear ${this.currentGear}!`;
    }
    startPedaling() {
        return `${this.brand} ${this.model} is moving!`; 
    }
    inDanger() {
        return dangers.knockOver.call(this);
    }
    gearUp() {
        this.currentGear += 1;
    }
    gearDown() {
        this.currentGear -= 1;
    }
}

export default Bicycle;
