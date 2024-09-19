var buttons=document.querySelectorAll("button")
var result=document.getElementById("result")


for(i=0;i<buttons.length;i++){
    buttons[i].onclick=function(){
        var input=this.innerText;
        updateDisplay(input)
    }
}