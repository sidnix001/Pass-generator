const outputPass = document.getElementById("outputPass");
const overlay = document.getElementById("overlay")

const letters = "qwertyuiopasdfghjklzxcvbnm";
const specialChars = "!@#$%^&*()_)+=-"
let password = "";
const passLength = 15;

function generatePass () {
   password = ""
   for (let i = 0; i < passLength; i++) {
      let randomNumberOne = Math.floor(Math.random()*10);
      let randomNumberTwo = Math.floor(Math.random()*10);
   
      if (randomNumberOne == randomNumberTwo) {
         password += letters[Math.floor(Math.random()*letters.length)].toUpperCase();   
      } else if (randomNumberOne % 2 == 0) {
         password += String(Math.floor(Math.random()*9))
      } else if (randomNumberOne % 3 == 0) {
         password += specialChars[Math.floor(Math.random()*specialChars.length)]
      } else {
         password += letters[Math.floor(Math.random()*letters.length)];
      }
   }
   
   outputPass.innerHTML = password;
}
generatePass()

overlay.addEventListener("click", generatePass);

outputPass.addEventListener("click", () => {
   navigator.clipboard.writeText((password))
})
