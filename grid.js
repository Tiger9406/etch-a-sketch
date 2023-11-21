const right=document.querySelector('#right-container');

const r_input=document.querySelector('#R');
const g_input=document.querySelector('#G');
const b_input=document.querySelector('#B');
const color_button=document.querySelector('#submit-RGB');

const eraser_button=document.querySelector('#erase');
const clear_button=document.querySelector('#clear');

const size_8=document.querySelector('#button_8');
const size_16=document.querySelector('#button_16');
const size_32=document.querySelector('#button_322');

size_8.addEventListener("click", function(){
    drawBox(8);
});

function drawBox(size){
    right.innerHTML="<p>hello</p>";
    console.log(size);
}