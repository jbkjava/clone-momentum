const clockContainer = document.querySelector(".js-clock"),
 clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date(); // create Date object\\

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    

    clockTitle.innerText = `${hours <10 ? `0${hours}`:hours}:${minutes <10 ? `0${minutes}` : minutes }:${seconds < 10 ? `0${seconds}`:seconds }`;
}

/* today function keyWord : setInterval.
    what's setInterval?
    setInterval mean infinity loop function with every times.
    rule: setInterval (function, milliseconds timer);

    ternary operator (삼항연산자)
    what's ternary operator ?
     ternary operator is mini if.
    rule : question ? tureValue : falseValue;
            each value can have function. in javascript function also value type.
*/

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();