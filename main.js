var canvas=new fabric.Canvas('myCanvas');
width_of_piece=30;
height_of_piece=30;
player_x=10;
player_y=10;
var player_object="";
var piece_image_object="";
function player_update(){
	fabric.Image.fromURL("player1.png", function(Img){
	player_object = Img;

	player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	player_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(player_object);
	});
}
function new_image(get_image){
	fabric.Image.fromURL(get_image, function(Img){
	piece_image_object = Img;

	piece_image_object.scaleToWidth(width_of_piece);
	piece_image_object.scaleToHeight(height_of_piece);
	piece_image_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(piece_image_object);
	});
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
	keyPressed=e.keyCode;
	console.log(keyPressed);
	if(e.shiftKey==true && keyPressed=='80'){
		width_of_piece=width_of_piece+10;
		height_of_piece=height_of_piece+10;
		document.getElementById("current_width").innerHTML=width_of_piece;
		document.getElementById("current_height").innerHTML=height_of_piece;
	}
	if(e.shiftKey==true && keyPressed=='77'){
		width_of_piece=width_of_piece-10;
		height_of_piece=height_of_piece-10;
		document.getElementById("current_width").innerHTML=width_of_piece;
        document.getElementById("current_height").innerHTML=height_of_piece;
    }
if(keyPressed=='70'){
    new_image('ironman_face.png');
    console.log("f");
}
if(keyPressed=='66'){
    new_image('ironman_body.png');
    console.log("b");
}
if(keyPressed=='76'){
    new_image('ironman_legs.png');
    console.log("l");
}
if(keyPressed=='82'){
    new_image('ironman_right_hand.png');
    console.log("r");
}
if(keyPressed=='72'){
    new_image('ironman_left_hand.png');
    console.log("h");
}
if(keyPressed=='38'){
    up();
    console.log("up");
}
if(keyPressed=='40'){
    down();
    console.log("down");
}
if(keyPressed=='37'){
    left();
    console.log("left");
}if(keyPressed=='39'){
    right();
    console.log("right");
}
}
function up(){
	if (player_y>=0){
		player_y=player_y-height_of_piece;
		console.log("height of piece=" + height_of_piece);
		console.log("When up arrow key is pressed, X="+player_x+", Y="+player_y);
		canvas.remove(player_object);
		player_update();
	}
}
function down(){
	if (player_y<=500){
		player_y=player_y+height_of_piece;
		console.log("height of piece=" + height_of_piece);
		console.log("When down arrow key is pressed, X="+player_x+", Y="+player_y);
		canvas.remove(player_object);
		player_update();
	}
}
function left(){
	if (player_x>0){
		player_x=player_x-width_of_piece;
		console.log("width of piece=" + width_of_piece);
		console.log("When left arrow key is pressed, X="+player_x+", Y="+player_y);
		canvas.remove(player_object);
		player_update();
	}
}
function right(){
	if (player_x<=850){
		player_x=player_x+width_of_piece;
		console.log("width of piece=" + width_of_piece);
		console.log("When right arrow key is pressed, X="+player_x+", Y="+player_y);
		canvas.remove(player_object);
		player_update();
	}
}