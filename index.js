import funnyNames from "./funnynames.js" ;
// This is a simple JavaScript program that generates a random funny name e.

const randomFunnyName = () => {
  const randomIndex = Math.floor(Math.random() * funnyNames.length);
  return funnyNames[randomIndex];
};
var name = randomFunnyName();
console.log(name);
