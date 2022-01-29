var canvas=new fabric.Canvas("myCanvas");

var bowlX=10;
var bowlY=10;
var holeX=500;
var holeY=400;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img) { hole_obj = Img;
	 hole_obj.scaleToWidth(50); 
	 hole_obj.scaleToHeight(50);
	  hole_obj.set({ top:holeY, left:holeX });
	   canvas.add(hole_obj);
	 }); 
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img) { ball_obj = Img;
		ball_obj.scaleToWidth(50); 
		ball_obj.scaleToHeight(50);
		 ball_obj.set({ top:bowlY, left:bowlX });
		  canvas.add(ball_obj);
		}); 
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if(bowlX==holeX && bowlY==holeY){
    canvas.remove(ball_obj);
    document.getElementById("hd3").innerHTML="You have hit the goal!";
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(bowlY >=5) { 
		bowlY = bowlY- 20; 
		console.log("block image height = " + block_image_height); 
		console.log();
		 canvas.remove(ball_obj); 
		 new_image(); }
	}

	function down()
	{
		if(bowlY <=400) { 
			bowlY = bowlY+ 20; 
			console.log("block image height = " + block_image_height); 
			console.log();
			 canvas.remove(ball_obj); 
			 new_image(); }
	}

	function left()
	{
		if(bowlX >5)
		{
			bowlX = bowlX- 20; 
			console.log("block image height = " + block_image_height); 
			console.log();
			 canvas.remove(ball_obj); 
			 new_image(); }
		}
	}

	function right()
	{
		if(bowlX <=900)
		{
			bowlX= bowlX+ 20; 
			console.log("block image height = " + block_image_height); 
			console.log();
			 canvas.remove(ball_obj); 
			 new_image(); }
		}
	
	


