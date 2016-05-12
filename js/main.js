window.onload = function(){
  //get the canvas object
  var numTextFields = 3; //constant, used for drawing text on the images
  var images = ["./images/ray2.jpg","images/ray3.jpg","images/ray4.jpg","images/ray5.jpg","images/ray6.jpg"];
  var canvas = document.getElementById("mainCanvas");
  var context = canvas.getContext("2d");
  //set options for font
  context.font = "80px Droid Sans, sans-serif";
  context.fillStyle = "white";
  context.textBaseline="top";


  //get the texfield obejcts
  var input1 = document.getElementById("textInput1");
  var input2 = document.getElementById("textInput2");
  var input3 = document.getElementById("textInput3");
  //get the select element for the background images
  var bgSelect = document.getElementById("bgSelect");
  //get the button to generate the images from the canvas
  var generateButton = document.getElementById("generateButton");

//TODO: add selection for images
  var bg = new Image(800,517);
  bg.src = images[0];
  bg.onload = function(){
    context.drawImage(bg,0,0);
  };

  var reload =  function(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(bg,0,0);
    //TODO: do this with loops
    context.fillText(input1.value, 20,cHeight-120);
    context.fillText(input2.value, 20,cHeight-40);
    context.fillText(input3.value, 20,cHeight+50);
  };

  //selectbox onchange event
  bgSelect.onchange = function(){
    var index = bgSelect.value-1;
    bg.src = images[index];
    bg.onload = function(){
    reload();
  }
  };

  var cHeight = canvas.height/2; //we will use this to draw text
  //check for changes in the text fields
  input1.onkeyup = reload;
  //check for changes in the text fields
  input2.onkeyup = reload;

  //check for changes in the text fields
  input3.onkeyup =reload;

  generateButton.onclick = function(){
    //open a new tab, display the image
     var w =window.open();
     w.document.write("<img src='"+canvas.toDataURL()+"'/>");
  };

};
