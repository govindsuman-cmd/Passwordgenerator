const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "~!@#$%^&*()_+/";

// selectors
const passBox = document.getElementById("pass-box");
const totalChar = document.getElementById("total-char");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("numbers");
const symbolInput = document.getElementById("symbols");
const button = document.getElementById("btn");

const getRandomData = (setData) => {
  return setData[Math.floor(Math.random() * setData.length)];
};
const generatePassword = (password = "") => {
  if (upperInput.checked) {
    password += getRandomData(upperSet);
  }
  if (lowerInput.checked) {
    password += getRandomData(lowerSet);
  }
  if (numberInput.checked) {
    password += getRandomData(numberSet);
  }
  if (symbolInput.checked) {
    password += getRandomData(symbolSet);
  }
  if (password.length < totalChar.value) {
    return generatePassword(password);
  }
  passBox.innerText = strTrim(password, totalChar.value);
};

button.addEventListener("click", function () {
  generatePassword();
});

const strTrim = (str, num) => {
  if (str.length > num) {
    let banzai = str.substring(0, num);
    return banzai;
  } else {
    return str;
  }
};
