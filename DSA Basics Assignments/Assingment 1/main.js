console.clear();


// Q 1 --------------------------------------------------------------------

let arr1 = [4,5,6,8,4,6,9,1,0,40,65];
let sum = 12;

function getPairs(arr1, sum) {
  let pair = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = i + 1; j < arr1.length; j++) {
      if (arr1[i] + arr1[j] == sum) {
        pair.push(`(${arr1[i]},${arr1[j]})`);
      }
    }
  }
  console.log("Ans 1  =>", "These are Pairs/Pair of given Sum", sum, pair);
  return pair;
}
console.log(getPairs(arr1, sum));
//-------------------------------------------------------------------------------

// Q2----------------------------------------------------------------------------

function reverseArray(arr) {
  let org = [...arr];
  console.log(
    "Ans 2 => ",
    "This is the reverse form of given array without creating a new array",
    arr.reverse(),
    "The original array is",
    org
  );
  return arr;
}
console.log(`method 1 Ans 2 => ${reverseArray(arr1)}`);
//method 2
var reverseArray1 = function (arr) {
  for (var i = 0; i < arr.length / 2; i++) {
    var temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
};
console.log(`Method 2 Ans 2 => ${reverseArray1([5, 4, 3, 2, 1])}`);

//-------------------------------------------------------------------------------

// Q3----------------------------------------------------------------------------
let str1 = "ABCD";
let str2 = "bcda";
function checkRotation(str1, str2) {
  if (str1.length != str2.length) {
    return console.log("Strings are not rotation of each other");
  }
  let arr1 = str1.toLowerCase().split("").sort();
  let arr2 = str2.toLowerCase().split("").sort();
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] == arr2[i]) {
      return console.log(
        `Ans 3 => Strings '${str1}' and '${str2}' are Rotation of each other!👍`
      );
    } else {
      return console.log("Ans 3 =>  Strings are not rotation of each other");
    }
  }
}
checkRotation(str1, str2);

//------------------------------------------------------------------------------

// Q4----------------------------------------------------------------------------

let str3 = "hellohi";
function getFirstNonRepeatedChar(s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s.charAt(i)) == s.lastIndexOf(s.charAt(i))) {
      return console.log(
        `Ans 4 => This is the first non repeated letter of string : '${s.charAt(
          i
        )}' from '${s}' `
      );
    }
  }
}
getFirstNonRepeatedChar(str3);

//-------------------------------------------------------------------------------

// Q5----------------------------------------------------------------------------

function towerOfHanoi(n, from, to, aux) {
  if (n === 1) {
    console.log(`Move disk 1 from rod ${from} to rod ${to}`);
    return;
  }
  towerOfHanoi(n - 1, from, aux, to);
  console.log(`Move disk ${n} from rod ${from} to rod ${to}`);
  towerOfHanoi(n - 1, aux, to, from);
}

let n = 2; // Number of disks
console.log("Ans 5 =>");
towerOfHanoi(n, "A", "B", "C"); // A, B and C are names of rods

//-------------------------------------------------------------------------------

// Q6----------------------------------------------------------------------------
function convertToPrefix(expression) {
  var stack = [];
  for (var i = 0; i < expression.length; i++) {
    var character = expression[i];
    if (
      character === "+" ||
      character === "-" ||
      character === "*" ||
      character === "/"
    ) {
      var operand1 = stack.pop();
      var operand2 = stack.pop();
      var result = character + operand2 + operand1;
      stack.push(result);
    } else {
      stack.push(character);
    }
  }
  return stack.pop();
}
//console.log(convertToPrefix('ab+cde+*'));  // *+ab+cde
console.log(`Ans 6 => ${convertToPrefix("AB/")} converted To Prefix`);

// Q7--------------------------------------------------------------------------

function convertToInfix(expression) {
  var stack = [];
  for (var i = expression.length - 1; i >= 0; i--) {
    var item = expression[i];
    if (!isOperator(item)) {
      stack.push(item);
    } else {
      var op1 = stack.pop();
      var op2 = stack.pop();
      stack.push(op1 + item + op2);
    }
  }
  return stack.pop();
}
function isOperator(e) {
  switch (e) {
    case "+":
    case "-":
    case "/":
    case "*":
      return true;
    default:
      return false;
  }
}
console.log(`Ans 7 => ${convertToInfix("/BC")} converted To Infix`);

// Q8--------------------------------------------------------------------------
function checkBrackets(str) {
  var open = 0,
    close = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] == "(") {
      open++;
    } else if (str[i] == ")") {
      close++;
    }
  }
  if (open == close) {
    return "Balanced";
  } else {
    return "Not Balanced";
  }
}

console.log(`Ans 8 => ${checkBrackets("(x + y)")}`);
console.log(`Ans 8 => ${checkBrackets("(x + y))")}`);

// Q9--------------------------------------------------------------------------

//method 1
let stack3 = [1, 2, 3, 4];
function reverseStack(stack) {
  return stack.reverse();
}

console.log(`Ans 9 => ${reverseStack(stack3)}`);

// method 2
let data = [];
let currentSize = data.length;
function push(newVal) {
  data[currentSize] = newVal;
  currentSize += 1;
}
function pop() {
  lastRemovedItem = data[currentSize - 1];
  if (data.length > 0) {
    currentSize -= 1;
    data.length = currentSize;
  } else {
    return "Empty!";
  }
  return lastRemovedItem;
}

function reverseString(item) {
  for (let i = 0; i < item.length; i++) {
    push(item[i]);
  }
  for (let i = 0; i < item.length; i++) {
    item[i] = pop();
  }
  return item;
}

let str = "Rameshwar";
stk = str.split("");
console.log(`Ans 9 =>[${reverseString(stk)} |=> - ${typeof stk}`);

//-----------------------------------------------------------------------------

// Q10-------------------------------------------------------------------------
function smallest(arr) {
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    stack.push(arr[i]);
  }
  let min = stack.pop();
  while (stack.length > 0) {
    let current = stack.pop();
    if (current < min) {
      min = current;
    }
  }
  return min;
}

console.log(`Ans 10 => ${smallest([5, 4, 3, 2, 1, -1])}`);
//-----------------------------------------------------------------------------
