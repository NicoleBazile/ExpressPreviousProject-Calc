document.getElementById("add").onclick=addNumber
function addNumber(){
  var x = parseFloat(document.getElementById("num1").value);
  var y = parseFloat(document.getElementById("num2").value);
  var total = x + y

  let historyTotal = document.getElementById("firstNum").value +
  document.getElementById("add").value+
  document.getElementById("numTwo").value + "=" + total;

  document.getElementById("result").innerHTML= total
  document.getElementById("history").innerHTML= historyTotal;
}

document.getElementById("subtract").onclick=subtractNumber
function subtractNumber(){
  var x = parseFloat(document.getElementById("num1").value);
  var y = parseFloat(document.getElementById("num2").value);
  var total = x - y

  let historyTotal = document.getElementById("firstNum").value +
  document.getElementById("subtract").value+
  document.getElementById("numTwo").value + "=" + total;

  document.getElementById('result').innerHTML= total
  document.getElementById("history").innerHTML= historyTotal;
}

document.getElementById("multiply").onclick=multiplyNumber
function multiplyNumber(){
  var x = parseFloat(document.getElementById("num1").value);
  var y = parseFloat(document.getElementById("num2").value);
  var total = x * y

  let historyTotal = document.getElementById("firstNum").value +
  document.getElementById("multiply").value+
  document.getElementById("numTwo").value + "=" + total;

  document.getElementById("result").innerHTML= total
  document.getElementById("history").innerHTML= historyTotal;
}

document.getElementById("divide").onclick=divideNumber
function divideNumber(){
  var x = parseFloat(document.getElementById("num1").value);
  var y = parseFloat(document.getElementById("num2").value);
  var total = x / y

  let historyTotal = document.getElementById("firstNum").value +
  document.getElementById("divide").value+
  document.getElementById("numTwo").value + "=" + total;

  document.getElementById("result").innerHTML= total
  document.getElementById("history").innerHTML= historyTotal;
}
