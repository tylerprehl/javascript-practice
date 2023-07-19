/* SPECIFY FXN ATTRIBUTES ON HTML ELEMENTS */
// see onclick button in index.html for this lol


/* SET 'on[eventType]' PROPERTIES ON DOM NODES IN JAVASCRIPT */
const btn2 = document.querySelector('#btn2-onClickInJS');
btn2.onclick = () => alert("Clicked button 2");


/* ADD EVENT LISTENERS TO DOM NODES IN JAVASCRIPT */
const btn3 = document.querySelector('#btn3-eventListener');
btn3.addEventListener('click', () => {
  alert("Clicked button 3");
});


/* USE NAMED FUNCTION */
const btn4 = document.querySelector('#btn4-random');

function alertFunction(e) {
    alert("YAY! YOU DID IT!");
}

// Method 2
// btn.onclick = alertFunction;

// Method 3
// btn.addEventListener('click', alertFunction);


/* ACCESS INFO ABOUT THE EVENT */
btn4.addEventListener('click', function (e) {
    // console.log(e); // logs ALL e properties
    // console.log(e.target); // logs just the DOM node clicked
    e.target.style.background = 'blue'; // turns background of button blue
});