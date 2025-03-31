const passElem = document.getElementById("passElem");

const symbols = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm~!@#$%^&*()_)+=-1234567890";
let pass = "";

function genPass () {
   pass = "";
   for (let i = 0; i < 16; i++) {
      pass += symbols[Math.floor(Math.random()*symbols.length)];
   }
   passElem.innerHTML = pass;
}
genPass();

document.addEventListener("mousedown", (event) => {
   if (!event.target.closest("#passElem")) {
      genPass();
   }
});

passElem.addEventListener("mousedown", () => {
   navigator.clipboard.writeText(pass);
})
