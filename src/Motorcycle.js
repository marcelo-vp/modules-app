import Bicycle from './Bicycle';

const knockOver = Symbol('knockOver');

class Motorcycle extends Bicycle {
    constructor(brand, model) {
        super(brand, model);
    }
    showCurrentGear() {
        return `Driving on gear ${this.currentGear} and speeding up!`;
    }
    pressHorn() {
        return `Makes annoying horn sound!!`;
    }
    gearUp() {
        super.gearUp();
        return this.showCurrentGear();
    }
    [knockOver]() {
        return `The motorcycle ${this.brand} ${this.model} will be knocked over!`;
    }
    inDanger() {
        return this[knockOver]();
    }
}

export default Motorcycle;
