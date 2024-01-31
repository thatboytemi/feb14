const button = document.getElementById("no");
button.addEventListener("mouseover", (event)=>{
    const randomX = Math.random()*window.innerWidth +"px";
    const randomY = Math.random()*window.innerHeight +"px";
    event.target.setAttribute("style", `position:absolute; top:${randomY}; right:${randomX}`);
});