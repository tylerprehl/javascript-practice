/* eslint no-console: ["error", { allow: ["log", "warn", "error"] }] */

const server = {
  people: [
    {
      name: 'Odin',
      age: 20,
    },
    {
      name: 'Thor',
      age: 35,
    },
    {
      name: 'Freyja',
      age: 29,
    },
  ],

  getPeople() {
    return new Promise((resolve, reject) => {
      // Simulating a delayed network call to the server
      setTimeout(() => {
        resolve(this.people);
      }, 2000);
    });
  },
};

function getPersonsInfoOne(name) {
  return server
    .getPeople()
    .then((people) => people.find((person) => person.name === name));
}

async function getPersonsInfoTwo(name) {
  const people = await server.getPeople();
  const person = people.find((personTwo) => personTwo.name === name);
  return person;
}

console.log(getPersonsInfoOne('Odin'));
console.log(getPersonsInfoTwo('Thor'));

/* Giphy practice v1.0 */
const image1 = document.querySelector('img.giphy1');

fetch(
  'https://api.giphy.com/v1/gifs/translate?api_key=9dEA2oS2L8QanUkHSvmgkmcu8c2clo4k&s=ryan%20reynolds',
  { mode: 'cors' },
)
  .then((response) => response.json())
  .then((response) => {
    image1.src = response.data.images.original.url;
  });


  
/* Giphy practice v2.0 (using async/await) */
async function getGiphy(searchValue) {
  const giphyResponse = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=9dEA2oS2L8QanUkHSvmgkmcu8c2clo4k&s=${searchValue}`,
    { mode: 'cors' },
  );
  const giphyJson = await giphyResponse.json();
  console.log(giphyJson);
  const giphyUrl = giphyJson.data.images.original.url;
  return giphyUrl;
}

async function addGiphyToPage() {
  const image2 = document.querySelector('img.giphy2');
  image2.src = await getGiphy('andy%20samberg');
}

addGiphyToPage();
