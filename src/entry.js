var Car = require('./vehicles/Car');
import Bicycle from './vehicles/Bicycle';

var gol = new Car('VW', 'Gol');
const iguana = new Bicycle('Giant', 'Iguana');

/**
 *  Car example
 */
console.log( gol.startEngine() );
console.log( gol.showCurrentGear() );
gol.changeGear.up();
console.log( gol.showCurrentGear() );
gol.changeGear.down();
console.log( gol.showCurrentGear() );
console.log( gol.inDanger() );

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
