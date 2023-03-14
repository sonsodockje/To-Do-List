const clear = document.querySelector('.clear')
const dateElement = document.getElementById("date");
const timeElement = document.getElementById("time");
const list = document.getElementById('list');
const input = document.getElementById('input')

// 클래스 명을 똭
const CHECK = "fa-check-circle"
const UNCHECK = "fa-circle"
const LINE_THROUGH = "lineThrough"

const dayOption = {weekday:"long", month:"short", day:"numeric"}
const timeOption = { hour:"2-digit", minute:"2-digit", second:"2-digit"}

// 시계
setInterval(function() {
    const today = new Date();
    dateElement.innerHTML = today.toLocaleDateString("ko-KR", dayOption);
    timeElement.innerHTML = today.toLocaleTimeString("en-US", timeOption);
 }, 1000);
 

// 투두 함수 추가
function addToDo(toDo){
    const item = `<li class="item">
                    <i class="fa fa-regular fa-circle co" job="complete" id="0"></i>
                    <p class="text">${toDo}</p>
                    <i class="fa fa-solid fa-trash-can de" job="delete"></i>
                </li>
                `;
    const position ="beforeend"
    list.insertAdjacentHTML(position,item)

}

// 엔터키 이벤트 추가