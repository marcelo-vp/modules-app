var Car = require('./Car');
import Bicycle from './Bicycle';
import Motorcycle from './Motorcycle';

Car.prototype.gearDown = function() {
    this.currentGear -= 1;
}

var gol = new Car('VW', 'Gol');
const iguana = new Bicycle('Giant', 'Iguana');
const yamaha = new Motorcycle('Yamaha', 'Stryker');

/**
 *  Car example
 */
// console.log( gol.startEngine() );
// console.log( gol.showCurrentGear() );
// gol.changeGear.up();
// console.log( gol.showCurrentGear() );
// gol.changeGear.down();
// console.log( gol.showCurrentGear() );
// console.log( gol.inDanger() );
// console.log( gol.selfDestroy() );

/**
 * Bicycle example
 */
// console.log( iguana.startPedaling() );
// console.log( iguana.showCurrentGear() );
// iguana.changeGear.up();
// console.log( iguana.showCurrentGear() );
// iguana.changeGear.down();
// console.log( iguana.showCurrentGear() );
// console.log( iguana.inDanger() );

/**
 * Motorcycle example
 */
console.log( yamaha.startPedaling() );
console.log( yamaha.changeGear.up() );
console.log( yamaha.pressHorn() );
console.log( yamaha.inDanger() );
