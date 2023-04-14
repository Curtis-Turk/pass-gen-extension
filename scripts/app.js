const numbers = [...Array(10).keys()];
const specialChars = "!@#$%^&*<>?-_".split("");
const lettersLower = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
const lettersUpper = lettersLower.map((letter) => letter.toUpperCase());
