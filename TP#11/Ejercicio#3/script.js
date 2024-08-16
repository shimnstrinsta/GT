
const div = document.querySelector("#magia");
const img = document.querySelector("img");


div.addEventListener("mouseover", function (){    
    img.setAttribute("hidden","true");
    console.dir(img.hidden);
});

div.addEventListener("mouseout", function (){    
    img.removeAttribute("hidden");
    console.dir(img.hidden);
});
