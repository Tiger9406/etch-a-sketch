const right=document.querySelector('#right-container');

const r_input=document.querySelector('#R');
const g_input=document.querySelector('#G');
const b_input=document.querySelector('#B');
const color_button=document.querySelector('#submit-RGB');

const eraser_button=document.querySelector('#erase');
const clear_button=document.querySelector('#clear');

const size_8=document.querySelector('#button_8');
const size_16=document.querySelector('#button_16');
const size_32=document.querySelector('#button_32');

const curr_color=document.querySelector('#current-color');

eraser_button.addEventListener("click", function(){
    curr_color.style.backgroundColor="white";
});

clear_button.addEventListener("click", function(){
    // if(){

    // }
    // else{
        
    // }
    const childDivs=right.querySelectorAll(".block");
    childDivs.forEach(function(currentDiv){
        currentDiv.style.backgroundColor="white";
        console.log(currentDiv);
    })
});

//draw boxes
size_8.addEventListener("click", function(){
    drawBox(8);
});

size_16.addEventListener("click", function(){
    drawBox(16);
});

size_32.addEventListener("click", function(){
    drawBox(32);
});

function drawBox(size){
    const dim = right.offsetHeight/size+"px";
    const dimBox=size*size+1;
    right.innerHTML="";
    for(var i = 1; i < dimBox; i++){
        let block=document.createElement("div");
        block.style.width=dim;
        block.style.height=dim;
        block.className="block";
        block.style.backgroundColor="white";
        right.appendChild(block);
    }
}


//actual drawing
let isMouseDown = false;

right.addEventListener("mousedown", function() {
    isMouseDown = true;
});
document.addEventListener("mouseup", function() {
    isMouseDown = false;
});
right.addEventListener("mousemove", function(event) {
    if (isMouseDown) {
        const target = event.target;        
        target.style.backgroundColor = window.getComputedStyle(curr_color).backgroundColor;
    }
});
