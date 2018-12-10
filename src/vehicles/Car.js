function Car(brand, model) {
    this.brand = brand;
    this.model = model;
    this.currentGear = 1;
    this.changeGear = {
        up: this.gearUp.bind(this),
        down: this.gearDown.bind(this)
    };
    this.showCurrentGear = function() {
        return this.brand + ' ' + this.model + ' is on gear ' + this.currentGear;
    }
    this.startEngine = function() {
        return this.brand + ' ' + this.model + ' has started!';
    }
    this.inDanger = function() {
        return selfDestroy.call(this);
    }
}
function selfDestroy() {
    return 'The car ' + this.brand + ' ' + this.model + ' will be destroyed!';
}

Car.prototype.gearUp = function() {
    this.currentGear += 1;
}
Car.prototype.gearDown = function() {
    this.currentGear -= 1;
}

module.exports = Car;
