function multiply(a, b) {
  return a * b;
}

test("multiply 4 and 7 to get 28", () => {
  expect(multiply(4, 7)).toBe(28);
});

test("multiply 4 and 5 to get 20", () => {
  expect(multiply(4, 5)).toBe(20);
});

function calculateTotalPrice(price, discountCode) {
  if (price < 0 || typeof price !== "number" || Number.isNaN(price)) {
    return 0;
  }

  if (discountCode === "SAVE10") {
    return price * 0.9;
  }
  if (discountCode === "HALFOFF") {
    return price * 0.5;
  }
  return price;
}

test("calculate total price with SAVE10 discount", () => {
  expect(calculateTotalPrice(100, "SAVE10")).toBe(90);
});

test("calculate total price with HALFOFF discount", () => {
  expect(calculateTotalPrice(100, "HALFOFF")).toBe(50);
});

test("calculate total price with no discount", () => {
  expect(calculateTotalPrice(100, "INVALIDCODE")).toBe(100);
});

test("calculate total price with negative price", () => {
  expect(calculateTotalPrice(-50, "SAVE10")).toBe(0);
});

function userAccount(balance, deposit, withdraw) {
  const accbalance = balance || 0;
  if (deposit < 0 || typeof deposit !== "number" || Number.isNaN(deposit)) {
    return 0;
  }
  if (withdraw < 0 || typeof withdraw !== "number" || Number.isNaN(withdraw)) {
    return 0;
  }
  if (withdraw > accbalance + deposit) {
    return "insufficient funds";
  }
  return accbalance + deposit - withdraw;
}
test("user account after deposit", () => {
  expect(userAccount(100, 50, 0)).toBe(150);
});

test("user account after withdraw", () => {
  expect(userAccount(100, 0, 30)).toBe(70);
});

test("user account with insufficient funds", () => {
  expect(userAccount(100, 0, 150)).toBe("insufficient funds");
});

test("user account with negative deposit", () => {
  expect(userAccount(100, -50, 0)).toBe(0);
});

function capitalize(string) {
  if (typeof string !== "string") {
    return "";
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

test("capitalize first letter of a string", () => {
  expect(capitalize("hello")).toBe("Hello");
});

function t(string) {
  if (typeof string !== "string") {
    return "";
  }
  return string.split(" ").reverse().join(" ");
}

test("reverse the order of words in a string", () => {
  expect(t("hello world")).toBe("world hello");
});

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    return a / b;
  },
};

calculator.add(2, 3);
calculator.subtract(5, 2);
calculator.multiply(4, 3);
calculator.divide(10, 2);

test("calculator add method", () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test("calculator subtract method", () => {
  expect(calculator.subtract(5, 2)).toBe(3);
});

test("calculator multiply method", () => {
  expect(calculator.multiply(4, 3)).toBe(12);
});

test("calculator divide method", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

function shiftChar(char, shift) {
  const isUpper = char <= "Z" && char >= "A";
  const startCode = isUpper ? 65 : 97;
  const endcode = isUpper ? 90 : 122;

  let code = char.charCodeAt(0) + shift;
  while (code > endcode) {
    code = code - endcode + startCode - 1;
  }
  return String.fromCharCode(code);
}
function cipher(text, shift) {
  if (typeof text !== "string" || typeof shift !== "number") {
    return "";
  }
  let resultArray = [];
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (!/[a-zA-Z]/.test(char)) {
      resultArray.push(char);
      continue;
    }
    resultArray.push(shiftChar(char, shift));
  }
  return resultArray.join("");
}

test("cipher with shift of 3", () => {
  expect(cipher("abc", 3)).toBe("def");
});
test("cipher with a punctuation", () => {
  expect(cipher("abc!", 3)).toBe("def!");
});
test("cipher with a space", () => {
  expect(cipher("abc def", 3)).toBe("def ghi");
});
test("cipher with an uppercase letter", () => {
  expect(cipher("Abc", 3)).toBe("Def");
});
test("cipher with an uppercase word", () => {
  expect(cipher("ABC", 3)).toBe("DEF");
});
test("cipher with a wrap around", () => {
  expect(cipher("xyz", 3)).toBe("abc");
});

const object = returnObject([1, 5, 2, 7, 9, 5, 3, 4, 6, 8]);

function arrayAverage(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return 0;
  }
  const sum = array.reduce((prev, curr) => prev + curr, 0);
  return sum / array.length;
}

function arrayMin(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return 0;
  }
  const min = Math.min(...array);
  return min;
}

function arrayMax(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return 0;
  }
  const max = Math.max(...array);
  return max;
}

function arrayLength(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return 0;
  }
  const length = array.length;
  return length;
}

function returnObject(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return {};
  }
  return {
    average: arrayAverage(array),
    min: arrayMin(array),
    max: arrayMax(array),
    length: arrayLength(array),
  };
}

test("return object with average, min, max, and length", () => {
  expect(returnObject([1, 5, 2, 7, 9, 5, 3, 4, 6, 8])).toEqual({
    average: 5,
    min: 1,
    max: 9,
    length: 10,
  });
});
