const numbers = [...Array(10).keys()];
const specialChars = "!@#$%^&*<>?-_".split("");
const lettersLower = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
const lettersUpper = lettersLower.map((letter) => letter.toUpperCase());

const passwordLength = document.querySelector("input[type=range]");

const checkboxes = document.querySelectorAll("input[type=checkbox]");

const generatedPasswordInput = document.querySelector("input[type=text]");

const generatePassword = (length) => {
  generatedPasswordInput.value = "";
  document.getElementById("charLengthSpan").textContent = length;
  const includeDigits = document.getElementById("includeDigits").checked;
  const includeSpecialChar = document.getElementById(
    "includeSpecialCharacters"
  ).checked;
  const includeUpperCase = document.getElementById("includeUpperCase").checked;

  let possPassChars = [...lettersLower];

  if (includeDigits) possPassChars = [...possPassChars, ...numbers];
  if (includeSpecialChar) possPassChars = [...possPassChars, ...specialChars];
  if (includeUpperCase) possPassChars = [...possPassChars, ...lettersUpper];

  for (let i = 0; i < length; i++) {
    generatedPasswordInput.value +=
      possPassChars[Math.floor(Math.random() * possPassChars.length)];
  }
};

passwordLength.addEventListener("change", (e) => {
  generatePassword(e.target.value);
});

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("change", (e) => {
    generatePassword(passwordLength.value);
  })
);
