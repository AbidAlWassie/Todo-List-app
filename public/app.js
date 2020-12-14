function callFunction(callout) {
  callout();
}

var output1 = function () {
  console.log("hi");
}

var output2 = function () {
  console.log("howdy");
}

callFunction(output1);
callFunction(output2);