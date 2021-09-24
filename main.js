var last_postion_x,last_postion_y;

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var color = "red";
var width_line = 1;

var width_screen = screen.width;

var new_width = screen.width  - 70;
var new_height = screen.width - 300;

if (width_screen < 992) {
    
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;

    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchdown", my_touchdown);

function my_touchdown(e) {

    last_postion_x = e.touches[0].clientX - canvas.offsetLeft;
    last_postion_y = e.touches[0].clientY - canvas.offsetTop;

    color = document.getElementById("Color_input").value;
    width_line = document.getElementById("Width_line_input").value;

}

canvas.addEventListener("touchmove",my_touchmove);

function my_touchmove(e) {
    
    var current_position_x = e.touches[0].clientX - canvas.offsetLeft;
    var current_position_y = e.touches[0].clientY - canvas.offsetTop;

    console.log("last_postion_x"+ last_postion_x + "last_position_y" + last_postion_y);
    console.log("current_position_x"+ current_position_x + "current_position_y" + current_position_y);

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_line;
    ctx.moveTo(last_postion_x,last_postion_y);
    ctx.lineTo(current_position_x,current_position_y);
    ctx.stroke();

    last_postion_x = current_position_x;
    last_postion_y = current_position_y;

}

function ClearArea() {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}

