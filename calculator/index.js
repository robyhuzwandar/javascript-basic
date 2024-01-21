const result = document.getElementById("result");

function display(value) {
  result.value += value;
}

function calculate() {
  result.value = eval(result.value);
}

function clearResult() {
  result.value = "";
}
