const sum = function (a, b) {
  return a + b;
};
const avgerage = function (a, b) {
  return (a + b) / 2;
};

const findFactorial = function (n) {
  let num = 1;
  if (n == 0 || n == 1) {
    return num;
  } else {
    for (let i = n; i >= 1; i--) {
      num = num * i;
    }
    return num;
  }
};
const round = function (number) {
  return Math.round(number);
};
const toThePowerOf = function (base, exponent) {
  return Math.pow(base, exponent);
};

const randomNumber = function () {
  return Math.random();
};

const oneOrZero = function () {
  return Math.round(Math.random());
};
const randomRange = function (max) {
  return Math.round(Math.random() * max);
};

const includeOf = function (string, character) {
  return string.includes(character);
};
