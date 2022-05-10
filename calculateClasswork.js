var input1;
var input2;
var sign;

function calculate2() {
  var retval;
  input1 = parseFloat(document.getElementById("input1").value);
  input2 = parseFloat(document.getElementById("input2").value);
  sign = document.getElementById("sign").value;
  retval = docalculation(input1, input2, sign);
  document.getElementById("output").innerHTML = retval;
}

// function areaofc() {
//   document.getElementById("para").innerHTML =
//     "The area of circle with radius 20cm is: " + Math.PI * r * r;
// }

function docalculation(val1, val2, operator = "+") {
  var result = 0;
  // var operand = document.getElementById("sign").value;
  var operand = operator;
  switch (operand) {
    case "*":
      result = val1 * val2;
      break;
    case "-":
      result = val1 - val2;
      break;
    case "+":
      result = val1 + val2;
      break;
    case "/":
      result = val1 / val2;
      break;
    case "circumference":
      result = (val1 * val1) / (4 * Math.PI);
      break;
    case "radius":
      result = Math.PI * (val1 * val1);
      break;
    case "diameter":
      result = (1 / 4) * Math.PI * (val1 * val1);
      break;
    case "rectangle":
      result = val1 * val1;
      break;

    default:
      result = val1 + val2;
      break;
  }
  return result;
}

function selectedChange(oObject) {
  var selectedVal = oObject.options[oObject.selectedIndex].value;
  var item2 = document.getElementById("input2");
  item2.disabled = false;
  if (
    selectedVal == "+" ||
    selectedVal == "-" ||
    selectedVal == "*" ||
    selectedVal == "/" ||
    selectedVal == "rectangle"
  ) {
    item2.disabled = false;
  } else {
    item2.disabled = true;
  }
}
