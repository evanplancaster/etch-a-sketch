function initializeGrid(element, size){
  $(".square").remove();
  var gridWidth = $(element).width();
  var squareWidth = 1/size*100;

  var square = "<div class='square'></div>";
  for(i=0; i<size*size; i++){
    $(element).append(square);
  }
  $(".square").css({"width": squareWidth + "%", "height": squareWidth + "%"})

  draw();
}


function draw(){
  $(".square").on("mouseenter", function(){
    $(this).css({"background-color": "black"});
  });
}

$(document).ready(function(){
  var numSquares = 16;
  initializeGrid($(".container"), numSquares);

  $(".clear").on("click", function(){
    $(".square").css({"background-color": "white"});
  });

  $(".resize").on("click", function(){
    numSquares = prompt("How wide?");
    initializeGrid($(".container"), numSquares);
  });
});
