const getTemp = () => {
  let temp = document.getElementById("byte").value;
  temp = parseFloat(temp);
  if (isNaN(temp)) {
    console.log("Not a valid input");
    return Number.NEGATIVE_INFINITY;
  }
  return temp;
};

const printOutput = (result) => {
  let resultText = `${result}`;
  document.getElementById("result").value = resultText;
};


const convertToGB = () => {
  let temp = getTemp();
  if (temp === Number.NEGATIVE_INFINITY) {
    return;
  }
  let result = +(temp*9.3132257461548e-10).toFixed(20);
  printOutput(result);
};
