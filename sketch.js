let operator,inputNum1, inputNum2; 
let greeting, greeting2, greeting3;
let num1, num2;

function setup() {
  
  createCanvas(400, 200);
  background(178,255,102);
  
  inputNum1 = createInput();
  inputNum1.position(5, 60);
  greeting = createElement('h5', 'Enter number 1:');
  greeting.position(5, 20);
  
  inputNum2 = createInput();
  inputNum2.position(200, 60);
  greeting2 = createElement('h5', 'Enter operator:');
  greeting2.position(120, 80);

  operator = createInput();
  operator.position(100, 120);
  greeting3 = createElement('h5', 'Enter number 2:');
  greeting3.position(200, 20);
  
  textAlign(CENTER);
  textSize(50);
}

function draw() {
  
  num1 = inputNum1.value();
  num2 = inputNum2.value();
  var opr = operator.value();
  
  switch (opr) {
      
    case '+':
      console.log("Adição do num1 & num2: ");
      console.log(int(num1) + int(num2));
      break;
      
    case '-':
      console.log("Subtração do num1 & num2: ");
      console.log(int(num1) - int(num2));
      break;
      
    case '*':
      console.log("Multiplicação do num1 & num2: ");
      console.log(int(num1) * int(num2));
      break;
      
    case '/':
      console.log("Divisão do num1 & num2: ");
      console.log(int(num1) / int(num2));  
      break;
    
    default:
      console.log("Por favor utilize um operador válido."); 
  }
}


