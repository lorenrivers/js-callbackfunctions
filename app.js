console.log("Hello world!");

// function notifyUser() {
//   console.log("The function notifyUser was called!");
// }

// function myAwesomeFunction(notifyUserCallback) {
//   console.log("Running myAwesomeFunction... doing complex tasks...");
//   console.log("Complex task complete. I will notify the user");
//   notifyUserCallback();
// }

// myAwesomeFunction(notifyUser);

// ANONYMOUS FUNCTION
// function myAwesomeFunction(onCompleteCallback) {
//     console.log("Running myAwesomeFunction... doing complex tasks...");
//     console.log("Complex task complete. I will notify the user");
//     onCompleteCallback();
// }

// myAwesomeFunction(function () {
//     console.log("The function notifyUser function was called!");
//   })

// ADDING MORE THEN ONE ARGUMENT IN
// function myAwesomeFunction(onSuccessCallback, onFailureCallback) {
//   console.log("Running myAwesomeFunction... doing complex tasks...");
//   console.log("Complex task complete. I will notify the user");

//   const success = Math.random() > 0.5;
//   if (success) {
//     onSuccessCallback({
//       message: "This is the message of success",
//     });
//   } else {
//     onFailureCallback();
//   }
// }

// myAwesomeFunction(
//   (data) => {
//     console.log("It was successful: ", data.message);
//   },
//   () => {
//     console.log("It failed :(");
//   }
// );

// CALCULATOR CALLBACK FUNCTION
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function subtract(a, b) {
  return a - b;
}

function myCalculatorFunction(a, b, operatorCallback) {
  console.log("Doing a calculation using the numbers ", a, b);
  console.log("We might have code that saves the result to a log or database.");

  return operatorCallback(a, b);
}

const addResult = myCalculatorFunction(10, 5, add);
console.log(addResult);

const multiplyResult = myCalculatorFunction(10, 5, multiply);
console.log(multiplyResult);

const divideResult = myCalculatorFunction(10, 5, divide);
console.log(divideResult);

const subtractResult = myCalculatorFunction(10, 5, subtract);
console.log(subtractResult);

const finalResult = myCalculatorFunction(addResult, divideResult, add);
console.log(finalResult);
