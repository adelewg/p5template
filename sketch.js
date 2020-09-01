let colorPicker;
var previousMouseX;
var previousMouseY;
var thickness;
var transparency;
let c;



function setup()
{
	createCanvas(800, 650);
    
    
    background(100);
    //new p5.Color;
    
    
    colorPicker = createColorPicker('#ed225d');
    sel = createSelect();
    sel.option(2);
    sel.option(10);
    sel.option(15);
    sel.option(20);
    sel.position(100, height + 50);
    
    alpha = createSelect();
    alpha.option(255);
    alpha.option(150);
    alpha.option(100);
    alpha.option(50);
    alpha.position(200, height + 50);
    
    
    colorPicker.position(0, height + 50);
    
    previousMouseX = -1;
	previousMouseY = -1;
    


    
}


function draw()
{
    
    c = colorPicker.color();
    transparency = alpha.value();
    //c._array[3] = transparency;
    c.setAlpha(transparency);
    fill(c);
    stroke(c);
    
    //fill(colorPicker.color());
    //stroke(colorPicker.color());
    thickness = sel.value();
    strokeWeight(thickness);
    
    
    
    
    //setAlpha(transparency);
   
    
    
    
    if(mouseIsPressed){
			//check if they previousX and Y are -1. set them to the current
			//mouse X and Y if they are.
			if (previousMouseX == -1){
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
			//if we already have values for previousX and Y we can draw a line from 
			//there to the current mouse location
			else{
				line(previousMouseX, previousMouseY, mouseX, mouseY);
                //ellipse(mouseX, mouseY, 10);
				previousMouseX = mouseX;
				previousMouseY = mouseY;
                loadPixels();
                
			}
		}
		//if the user has released the mouse we want to set the previousMouse values 
		//back to -1.
		//try and comment out these lines and see what happens!
		else{
			previousMouseX = -1;
			previousMouseY = -1;
		}
    
    
   
}


