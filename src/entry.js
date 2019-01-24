import { Subject, Observer, extend } from './design-patterns/Observer';

// References to DOM elements
var controlCheckbox = document.getElementById( 'mainCheckbox' ),
    addBtn = document.getElementById( 'addNewObserver' ),
    container = document.getElementById( 'observersContainer' );

container.style.marginTop = '20px';

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

    // Create a wrapper of the observer's content
    var observer = document.createElement( 'div' );
    observer.style.display = 'inline-block';
    observer.style.textAlign = 'center';
    observer.style.margin = '0 5px';

    // Create a container to hold the observer index
    var index = document.createElement( 'div' );
    
    // Create a checkbox to be updated by the subject
    var checkbox = document.createElement( 'input' );
    checkbox.type = 'checkbox';
    checkbox.style.display = 'block';

    // Extend the checkbox with the Observer class
    extend( checkbox, new Observer() );

    // Override with custom update behaviour
    checkbox.update = function( value ) {
        this.checked = value;
    }

    // Add the new observer to our list of observers
    controlCheckbox.addObserver( checkbox );
    index.innerHTML = controlCheckbox.observers.indexOf( checkbox, 0 );

    // Append the content to the observer's wrapper
    observer.appendChild( index );
    observer.appendChild( checkbox );

    // Append the item to the container
    container.appendChild( observer );

}
