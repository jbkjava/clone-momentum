const title = document.querySelector(".title");
const originText = title.innerHTML;
    console.log("origin"+originText);
function handleClick(){
    //let currentTitle = title.classList;
    //currentTitle.toggle("btn");
    
    title.classList.toggle("btn");
    
    if(title.classList.contains("btn")){
       title.innerHTML = "캬루이지롱";
    }else{
        title.innerHTML = originText;
    }
}

title.addEventListener("click", handleClick);