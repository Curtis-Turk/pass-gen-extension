const numbers = [...Array(10).keys()];
const specialChars = "!@#$%^&*<>?-_".split("");
const lettersLower = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
const lettersUpper = lettersLower.map((letter) => letter.toUpperCase());

const passwordLength = document.querySelector("input[type=range]");

const checkboxes = document.querySelectorAll("input[type=checkbox]");

const generatePassword = (length) => {
  console.log(length);
  document.getElementById("charLengthSpan").textContent = length;
};

passwordLength.addEventListener("change", (e) => {
  generatePassword(e.target.value);
});

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("change", (e) => {
    console.log("checkbox", passwordLength.value);
  })
);
