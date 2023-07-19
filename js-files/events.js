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