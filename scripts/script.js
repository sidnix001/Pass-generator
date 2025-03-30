let outputPass = document.getElementById("outputPass");
let overlay = document.getElementById("overlay")

let symbols = "qwertyuiopasdfghjklzxcvbnm~!@#$%^&*()_)+=-1234567890";
let pass = "";

function genPass () {
   for (let i = 0; i < 16; i++) {
      pass += symbols[Math.floor(Math.random()*symbols.length);
   }
   outputPass.innerHTML = pass;
}
genPass()
alert(pass)
overlay.addEventListener("mousedown", genPass);

outputPass.addEventListener("mousedown", () => {
   navigator.clipboard.writeText(pass)
})
