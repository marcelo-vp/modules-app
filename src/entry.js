import { Basket } from './design-patterns/ModulePattern';

/**
 * Instance example
*/
Basket.addItem({
    item: 'bread',
    price: 0.5
});
Basket.addItem({
    item: 'butter',
    price: 0.3
});

console.log( Basket.getItemCount() );
console.log( Basket.getTotal() );
