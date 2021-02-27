const form = document.querySelector(".js-form"),
    input = document.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LOCALSTORAGE = "currentUser",
    SHOWING_ON = "showing",
    LOADED_ON = "preety";

    function saveName(text){
        localStorage.setItem(USER_LOCALSTORAGE, text);
        /* 로컬스토리지에 저장하는 방법 
            setItem(storageKey , value );
        */
    }

    function handleSubmit(event){
        event.preventDefault();
        /* 요소의 기본적인 event막는 첫 번째 방법 preventDefault() 메소드 호출*/

        const currentValue =  input.value;
        paintGreeting(currentValue);
        saveName(currentValue);
    }

    function askForName(){
        form.classList.add(SHOWING_ON);
        form.addEventListener("submit", handleSubmit);
    }

    function paintGreeting(text){
        form.classList.remove(SHOWING_ON);
        greeting.classList.add(SHOWING_ON, LOADED_ON);
        greeting.innerText = `Hello ${text}`;
    }

    function loadName(){
        const currentUser = localStorage.getItem(USER_LOCALSTORAGE);
        if(currentUser === null){
            askForName();    
        }else{
            paintGreeting(currentUser);
        }
    }

    /* today keyword : local storage 
        saving simple data in brower strage.
        작은 자바스크립트 정보들을 로컬 스토리지에 넣어서 편하게 관리할 수 있다.
    */
function init(){
    loadName();
}
init();