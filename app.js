const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //관습 : string만 포함된 변수는 대문자로 표기함. string 저장하고 싶을 때 사용
const USERNAME_KEY = "username";

function onLoginSubmit(event){ 
	event.preventDefault(); 					
	loginForm.classList.add(HIDDEN_CLASSNAME);	
	const username = loginInput.value;
	localStorage.setItem(USERNAME_KEY,username);//localStorage저장
	paintGreetings(username);
}

function paintGreetings(username){
	greeting.innerText = `Hello ${username}`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit",onLoginSubmit);
}else{
	paintGreetings(savedUsername)
}