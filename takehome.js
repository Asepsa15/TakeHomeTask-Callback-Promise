// fungsi untuk menjumlahkan 2 bilangan
function add(a, b, callback) {
  callback(a + b);
}

// fungsi untuk mengurangi 2 bilangan
function subtract(a, b, callback) {
  callback(a - b);
}

// fungsi untuk mengalikan 2 bilangan
function multiply(a, b, callback) {
  callback(a * b);
}

// fungsi untuk membagi 2 bilangan
function divide(a, b, callback) {
  callback(a / b);
}

// fungsi untuk mempangkatkan bilangan
function power(a, b, callback) {
  callback(Math.pow(a, b));
}
// Callback
divide(375, 125, function (result1) {
  power(3, 2, function (result2) {
    multiply(result1, result2, function (result3) {
      subtract(result3, 750, function (result4) {
        multiply(96, 10, function (result5) {
          divide(result5 * 84, 12, function (result6) {
            add(result4, result6, function (result) {
              console.log("Hasil callback Soal A : ", result);
            });
          });
        });
      });
    });
  });
});
// promise untuk menjumlahkan 2 bilangan
function addPromise(a, b) {
  return new Promise((resolve) => {
    add(a, b, resolve);
  });
}

// promise untuk mengurangi 2 bilangan
function subtractPromise(a, b) {
  return new Promise((resolve) => {
    subtract(a, b, resolve);
  });
}

// promise untuk mengalikan 2 bilangan
function multiplyPromise(a, b) {
  return new Promise((resolve) => {
    multiply(a, b, resolve);
  });
}

// promise untuk membagi 2 bilangan
function dividePromise(a, b) {
  return new Promise((resolve) => {
    divide(a, b, resolve);
  });
}

// promise untuk mempangkatkan bilangan
function powerPromise(a, b) {
  return new Promise((resolve) => {
    power(a, b, resolve);
  });
}
// promise
dividePromise(375, 125)
  .then((result1) => {
    return powerPromise(3, 2).then((result2) => {
      return multiplyPromise(result1, result2);
    });
  })
  .then((result3) => {
    return subtractPromise(result3, 750);
  })
  .then((result4) => {
    return multiplyPromise(96, 10).then((result5) => {
      return dividePromise(result5 * 84, 12).then((result6) => {
        return addPromise(result4, result6);
      });
    });
  })
  .then((finalResult) => {
    console.log(`Hasil promise Soal A :`, finalResult);
  })
  .catch((error) => {
    console.log(error);
  });

// menggunakan promise dan async/await
async function calculateA() {
  const result1 = await dividePromise(375, 125);
  const result2 = await powerPromise(3, 2);
  const result3 = await multiplyPromise(96, 10);
  const result4 = await multiplyPromise(result3, 84);
  const result5 = await dividePromise(result4, 12);
  const result6 = await multiplyPromise(result1, result2);
  const result7 = await subtractPromise(result6, 750);
  const result8 = await addPromise(result7, result5);
  return result8;
}

calculateA().then((result) => console.log(`a. : ${result}`));

async function calculateB() {
  const result1 = await dividePromise(625, 5);
  const result2 = await dividePromise(84, 12);
  const result3 = await dividePromise(96, 12);
  const result4 = await multiplyPromise(result2, result3);
  const result5 = await subtractPromise(500, result1);
  const result6 = await addPromise(result5, result4);
  return result6;
}

calculateB().then((result) => console.log(`b. : ${result}`));

async function calculateC() {
  const result1 = await dividePromise(750, 2);
  const result2 = await dividePromise(125, 5);
  const result3 = await dividePromise(96, 12);
  const result4 = await multiplyPromise(result2, result3);
  const result5 = await multiplyPromise(375, 84);
  const result6 = await addPromise(result1, result4);
  const result7 = await addPromise(result6, result5);
  return result7;
}

calculateC().then((result) => console.log(`c. : ${result}`));

async function calculateD() {
  const result1 = await dividePromise(750, 125);
  const result2 = await multiplyPromise(96, 10);
  const result3 = await dividePromise(500, 250);
  const result4 = await multiplyPromise(result2, result3);
  const result5 = await subtractPromise(1000, result1);
  const result6 = await subtractPromise(result5, 12);
  const result7 = await addPromise(result6, result4);
  return result7;
}

calculateD().then((result) => console.log(`d. : ${result}`));

async function calculateE() {
  const result1 = await powerPromise(36, 2);
  const result2 = await dividePromise(result1, 72);
  const result3 = await multiplyPromise(125, 10);
  const result4 = await multiplyPromise(24, 3);
  const result5 = await subtractPromise(result3, result4);
  const result6 = await addPromise(result2, result5);
  return result6;
}

calculateE().then((result) => console.log(`e. : ${result}`));

async function calculateF() {
  const result1 = await dividePromise(500, 100);
  const result2 = await multiplyPromise(result1, 20);
  const result3 = await dividePromise(125, 5);
  const result4 = await multiplyPromise(84, 2);
  const result5 = await subtractPromise(result2, result3);
  const result6 = await subtractPromise(result5, result4);
  return result6;
}

calculateF().then((result) => console.log(`f. : ${result}`));

async function calculateG() {
  const result1 = await multiplyPromise(375, 2);
  const result2 = await dividePromise(750, 25);
  const result3 = await dividePromise(1000, 500);
  const result4 = await subtractPromise(result1, result2);
  const result5 = await addPromise(result4, result3);
  return result5;
}

calculateG().then((result) => console.log(`g. : ${result}:`));

async function calculateH() {
  const result1 = await powerPromise(96, 2);
  const result2 = await multiplyPromise(12, 12);
  const result3 = await multiplyPromise(result2, 2);
  const result4 = await subtractPromise(result3, 84);
  const result5 = await addPromise(result4, result1);
  return result5;
}

calculateH().then((result) => console.log(`h. : ${result}:`));

async function calculateI() {
  const result1 = await dividePromise(750, 25);
  const result2 = await dividePromise(375, 125);
  const result3 = await dividePromise(72, 12);
  const result4 = await multiplyPromise(result1, result2);
  const result5 = await multiplyPromise(result4, result3);
  const result6 = await multiplyPromise(84, 12);
  const result7 = await addPromise(result5, result6);
  return result7;
}

calculateI().then((result) => console.log(`i. : ${result}:`));

async function calculateJ() {
  const result1 = await powerPromise(12, 2);
  const result2 = await dividePromise(96, result1);
  const result3 = await dividePromise(625, 5);
  const result4 = await multiplyPromise(375, 84);
  const result5 = await subtractPromise(result2 + result3, result4);
  return result5;
}

calculateJ().then((result) => console.log(`j. : ${result}:`));

async function calculateK() {
  const result1 = await dividePromise(250, 25);
  const result2 = await multiplyPromise(result1, 10);
  const result3 = await powerPromise(36, 2);
  const result4 = await dividePromise(result3, 72);
  const result5 = await multiplyPromise(125, 10);
  const result6 = await subtractPromise(result2 + result4, result5);
  return result6;
}

calculateK().then((result) => console.log(`k. : ${result}:`));

async function calculateL() {
  const result1 = await dividePromise(375, 125);
  const result2 = await multiplyPromise(result1, 100);
  const result3 = await dividePromise(500, 250);
  const result4 = await multiplyPromise(result3, 50);
  const result5 = await multiplyPromise(96, 10);
  const result6 = await subtractPromise(result2 + result4, result5);
  return result6;
}

calculateL().then((result) => console.log(`l. : ${result}:`));

async function calculateM() {
  const result1 = await dividePromise(750, 25);
  const result2 = await dividePromise(375, 125);
  const result3 = await powerPromise(96, 2);
  const result4 = await powerPromise(12, 2);
  const result5 = await dividePromise(result3, result4);
  const result6 = await subtractPromise(result1 - result2, result5);
  return result6;
}

calculateM().then((result) => console.log(`m. : ${result}:`));

async function calculateN() {
  const result1 = await dividePromise(1000, 500);
  const result2 = await dividePromise(375, 125);
  const result3 = await dividePromise(72, 12);
  const result4 = await multiplyPromise(result1, result2);
  const result5 = await multiplyPromise(result4, result3);
  const result6 = await multiplyPromise(84, 12);
  const result7 = await subtractPromise(result5, result6);
  return result7;
}

calculateN().then((result) => console.log(`n. : ${result}:`));

async function calculateO() {
  const result1 = await dividePromise(96, 12 ** 2);
  const result2 = await dividePromise(500, 250);
  const result3 = await dividePromise(375, 125);
  const result4 = await multiplyPromise(result2, result3);
  const result5 = await subtractPromise(result1, result4);
  const result6 = await multiplyPromise(84, 2);
  const result7 = await addPromise(result5, result6);
  return result7;
}

calculateO().then((result) => console.log(`o. : ${result}:`));
