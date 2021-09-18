var canvas, backgroundImage;

var questions;

var question, contestant, quiz;
var bg;

function preload() {
  bg = loadImage("img.jpg");
}


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.start();
}


function draw(){
  background(bg);

}
