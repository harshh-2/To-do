let a=document.getElementById("input");
let c=document.getElementById("box");
let d=document.getElementById("form");
d.addEventListener("submit",(e)=>{
    e.preventDefault();
    let b=document.getElementById("input").value;
    let div=document.createElement("div");
    div.style.margin="12px";
    div.textContent=b;
    div.style.border="2px solid black";
    div.style.borderRadius="5px";
    div.classList.add("task");
    div.style.height="70px";
    c.appendChild(div);
    a.value="";
});