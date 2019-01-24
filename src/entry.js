import { basicSingleton, SingletonTester } from './design-patterns/Singleton';

var singletonOne = basicSingleton.getInstance();
var singletonTwo = basicSingleton.getInstance();
var privateNumberOne = singletonOne.getPrivateNumber();
var privateNumberTwo = singletonTwo.getPrivateNumber();

console.log( privateNumberOne === privateNumberTwo );
// Returns true, because both 'singletonOne' and
// 'singletonTwo' hold the same Singleton instance

var singletonTestOne = SingletonTester.getInstance({
    pointX: 4,
    pointY: 25
});
var singletonTestTwo = SingletonTester.getInstance();

console.log( singletonTestOne.name );
console.log( singletonTestOne.name === singletonTestTwo.name );
console.log( singletonTestOne.pointX );
console.log( singletonTestOne.pointX === singletonTestTwo.pointX );
console.log( singletonTestOne.pointY );
console.log( singletonTestOne.pointY === singletonTestTwo.pointY );