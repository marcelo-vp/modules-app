import { Subject, Observer, extend } from './design-patterns/Observer';

// References to DOM elements
var controlCheckbox = document.getElementById( 'mainCheckbox' ),
    addBtn = document.getElementById( 'addNewObserver' ),
    container = document.getElementById( 'observersContainer' );

// Concrete Subject

// Extend the controlling checkbox with the Subject class
extend( controlCheckbox, new Subject() );

// Clicking the checkbox will trigger notifications to its observers
controlCheckbox.onclick = function() {
    controlCheckbox.notify( controlCheckbox.checked );
};

addBtn.onclick = addNewObserver;

// Concrete Observer
function addNewObserver() {

    // Create a new checkbox to be added
    var checkbox = document.createElement( 'input' );
    checkbox.type = 'checkbox';

    // Extend the checkbox with the Observer class
    extend( checkbox, new Observer() );

    // Override with custom update behaviour
    checkbox.update = function( value ) {
        this.checked = value;
    }

    // Add the new observer to out list of observers
    controlCheckbox.addObserver( checkbox );

    // Append the item to the container
    container.appendChild( checkbox );

}
