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

let copyAlert = document.getElementById("copy-alert")
passElem.addEventListener("mousedown", () => {
   navigator.clipboard.writeText(pass);
   copyAlert.style.opacity = "1"
   setTimeout(() => {
      copyAlert.style.opacity = "0"
   }, 900);
})
