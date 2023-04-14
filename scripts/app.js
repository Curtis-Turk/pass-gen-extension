const numbers = [...Array(10).keys()];
const specialChars = "!@#$%^&*<>?-_".split("");
const lettersLower = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
const lettersUpper = lettersLower.map((letter) => letter.toUpperCase());

const passwordLength = document.querySelector("input[type=range]");

const checkboxes = document.querySelectorAll("input[type=checkbox]");

const generatePassword = (e) => {
  console.log(e);
};

passwordLength.addEventListener("change", (e) => {
  generatePassword(e);
});

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("change", (e) => {
    console.log("checkbox", e);
  })
);
