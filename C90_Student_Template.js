var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");
var car1Width = 120;
var car1Height = 70;
var car1Image = new Image();
var car1X = 10;
var car1Y = 10;

var car2Width = 120;
var car2Height = 70;
var car2Image = new Image();
var car2X = 10;
var car2Y = 100;

var backgroundImage = new Image();
backgroundImage.src = "racing.jpg";

car1Image.src = "car1.png";
car1Image.onload = function() {
  uploadcar1();
};

car2Image.src = "car2.png";
car2Image.onload = function() {
  uploadcar2();
};

function uploadBackground() {
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
  ctx.drawImage(car1Image, car1X, car1Y, car1Width, car1Height);
}

function uploadcar2() {
  ctx.drawImage(car2Image, car2X, car2Y, car2Width, car2Height);
}

function add() {
  uploadBackground();
  uploadcar1();
  uploadcar2();
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
  var keyPressed = e.keyCode;
  console.log(keyPressed);
  if (keyPressed == '38') {
    car1_up();
    console.log("seta para cima");
  }
  if (keyPressed == '40') {
    car1_down();
    console.log("seta para baixo");
  }
  if (keyPressed == '37') {
    car1_left();
    console.log("seta para a esquerda");
  }
  if (keyPressed == '39') {
    car1_right();
    console.log("seta para a direita");
  }
  if (keyPressed == '87') {
    car2_up();
    console.log("tecla W");
  }
  if (keyPressed == '83') {
    car2_down();
    console.log("tecla S");
  }
  if (keyPressed == '65') {
    car2_left();
    console.log("tecla A");
  }
  if (keyPressed == '68') {
    car2_right();
    console.log("tecla D");
  }
}

function car1_up() {
  if (car1Y >= 10) {
    car1Y -= 10;
    console.log("Car1 posição Y = " + car1Y);
    add();
  }
}

function car1_down() {
  if (car1Y <= 500) {
    car1Y += 10;
    console.log("Car1 posição Y = " + car1Y);
    add();
  }
}

function car1_left() {
  if (car1X >= 10) {
    car1X -= 10;
    console.log("Car1 posição X = " + car1X);
    add();
  }
}

function car1_right() {
  if (car1X <= 670) {
    car1X += 10;
    console.log("Car1 posição X = " + car1X);
    add();
  }
}

function car2_up() {
  if (car2Y >= 10) {
    car2Y -= 10;
    console.log("Car2 posição Y = " + car2Y);
    add();
  }
}

