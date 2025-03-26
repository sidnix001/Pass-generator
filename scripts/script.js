const outputPass = document.getElementById("outputPass");
const overlay = document.getElementById("overlay")

const symbols = "qwertyuiopasdfghjklzxcvbnm~!@#$%^&*()_)+=-1234567890";
let pass = "";

function genPass () {
   for (let i = 0; i < 16; i++) {
      pass += symbols[Math.floor(Math.random()*symbols.length);
   }
   outputPass = pass;
}
genPass()
overlay.addEventListener("mousedown", genPass);

outputPass.addEventListener("mousedown", () => {
   navigator.clipboard.writeText(pass)
})
