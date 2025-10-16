const body = document.querySelector("body");

document.querySelector(".containers").addEventListener("click", function(e){
    if(e.target.className === "container"){
        body.style.backgroundColor = e.target.style.backgroundColor;
    }
})