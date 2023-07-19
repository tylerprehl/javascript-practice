/* EXAMPLE */
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);


/* RED TEXT */
const red_text = document.createElement('p');
red_text.style.cssText = "color: red";
red_text.textContent = "Hey I'm red!"
container.appendChild(red_text);


/* BLUE HEADER */
const blue_header = document.createElement('h3');
blue_header.style.cssText = "color: blue; font-weight: bold";
blue_header.textContent = "I'm a blue h3!";
container.appendChild(blue_header);


/* DIV WITH ELEMENTS INSIDE */
const div_container = document.createElement('div');
div_container.style.cssText = "border: 3px black solid; background-color: pink";

const h1_element = document.createElement('h1');
h1_element.textContent = "I'm in a div!";
div_container.appendChild(h1_element);

const p_element = document.createElement('p');
p_element.textContent = "ME TOO!";
div_container.appendChild(p_element);

container.appendChild(div_container);