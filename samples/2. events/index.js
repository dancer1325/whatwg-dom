
// 1. add event listeners
obj.addEventListener("load", imgFetched)

// ev   event
function imgFetched(ev) {
  // great success
}



// 2. Remove event listener -- via -- passing a AbortController.signal | addEventListener() & abort it
const controller = new AbortController();

// Get the signal from the controller
const signal = controller.signal;

// Add event listener with the signal
const button = document.querySelector('button');
button.addEventListener('click', (event) => {
  console.log('Button clicked!');
}, { signal }); // Pass the signal in the options object

// Example of multiple event listeners using the same controller
document.addEventListener('mousemove', (event) => {
  console.log('Mouse position:', event.clientX, event.clientY);
}, { signal });

// Later, when you want to remove all event listeners connected to this signal:
controller.abort();
// Both event listeners (click and mousemove) are NOW removed

