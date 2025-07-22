const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]<>/-=";

const allChars = upperCase + lowerCase + number + symbol;

function createPass() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordBox.value = password;
}

// function copyPass() {
//   passwordBox.Select();
//   // document.execCommand("copy");
//   // navigator.clipboard.writeText(passwordBox.value);
// }
function copyPass() {
  // Select the text field
  passwordBox.select();
  passwordBox.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard
    .writeText(passwordBox.value)
    .then(() => {
      alert("Copied the text: " + passwordBox.value);
    })
    .catch((err) => {
      console.error("Could not copy text: ", err);
    });
}
