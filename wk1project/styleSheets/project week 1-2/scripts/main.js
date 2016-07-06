var clear = "";
var text = [];
var input = document.getElementById("TextBox");
var li;
var length = 0;
var theList = document.getElementById("toDo");
function getText(tBox){
    if(input.value != ""){
        text.push(input.value);
        document.getElementById("TextBox").value = clear; 
        li = document.createElement("li");
        li.innerHTML = text[length];
        li.onclick = function() {this.parentNode.removeChild(this);};
        theList.appendChild(li);
        length++;
        
    }
    else{
        alert("please put something in the box");
    }
}
document.getElementById("superButton").onclick = function() {getText(input);};
input.onkeypress = function(e){
    if(e.keyCode == 13){
        getText(input);
    }
 }


 
 