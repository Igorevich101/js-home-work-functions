let findsSmallestNumber = function (num1, num2) {
  if (num1 !== num1 || typeof num1 !== 'number') {
    return null;
  }
  if (num2 !== num2 || typeof num2 !== 'number') {
    return null;
  }
  if (num1>=num2) {
  return num2
  } else {
  return num1
  }
}

let youAdult = 'You are an adult!';
let youNotAdult = 'You are not an adult!';

let areYouOfAge = function (age) {
  if (age !== age || typeof age !== 'number') {
    return null;
  }
  if (age>=18) {
    return youAdult;
  } else {
    return youNotAdult;
  }
}

let calculator = function (num1, num2 , matSign) {
  if (num1 !== num1 || typeof num1 !== 'number') {
    return null;
  }
  if (num2 !== num2 || typeof num2 !== 'number') {
    return null;
  }
  if (matSign ==='+') {
    let result = num1 + num2;

    return result;
  }
  if (matSign ==='-') {
    let result = num1 - num2;

    return result;
  }
  if (matSign ==='*') {
    let result = num1 * num2;

    return result;
  }
  if (matSign ==='/') {
    let result = num1 / num2;

    return result;
  }
}

let calcVerSwitch = function (num1, num2 , matSign) {
  if (num1 !== num1 || typeof num1 !== 'number') {
    return null;
  }
  if (num2 !== num2 || typeof num2 !== 'number') {
    return null;
  }
  switch (matSign) {
    case '+': {
      let result = num1 + num2;
      break
    }
    case '-': {
      let result = num1 - num2;
      break
    }
    case '*': {
      let result = num1 * num2;
      break
    }
    case '/': {
      let result = num1 / num2;
      break
    }
    default: {
      console.log('null')
    }
  }
  return result;
}