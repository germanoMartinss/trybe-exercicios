if (true) {
  // Início do escopo do if.
  var userAge = "32";
  console.log(userAge);
  // Fim do escopo do if.
}
console.log(userAge);

//------------------------------------

var userName = "Germano";
console.log(userName);

var userName = "Magrinho";
console.log(userName);

//--------------------------------------

const favoriteLanguega = "JavaScript";
favoriteLanguega = "Python";

console.log(favoriteLanguega);
// TypeError: Assignment to constant variable.

//-----------------------------------------

let favoriteTechnology = "Machine learning";
favoriteTechnology = "Facial recognition";

console.log(favoriteTechnology);
// Facial recognition.

//--------------------------------------

let patientId = 50;
let isEnrolled = true;
let patientEmail = "elizandra@email.com";

console.log(typeof patientId); //number

//----------------------------------------

const myName = "Germano";
const birthCity = "São Paulo";
const birthYear = 1991;

console.log(myName);
console.log(birthCity);
console.log(birthYear);
