const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const timeElement = document.getElementById("time");
const list = document.getElementById("list");
const input = document.getElementById("input");
const de = document.querySelector(".de");

let LIST=[], id=0;

// 클래스 명을 똭
const CHECK = "fa-regular fa-circle-check";
const UNCHECK = "fa-regular fa-circle";
const LINE_THROUGH = "lineThrough";

const dayOption = { weekday: "long", month: "short", day: "numeric" };
const timeOption = { hour: "2-digit", minute: "2-digit", second: "2-digit" };

// 시계
setInterval(function () {
  const today = new Date();
  dateElement.innerHTML = today.toLocaleDateString("ko-KR", dayOption);
  timeElement.innerHTML = today.toLocaleTimeString("en-US", timeOption);
}, 1000);

// 투두 함수 추가
function addToDo(toDo, id, done, trash) {

  if (trash) {
    return;
  }

  const DONE = done ? CHECK : UNCHECK;
  const LINE = done ? LINE_THROUGH : "";

  const item = `<li class="item">
                    <i class="fa ${DONE} co" job="complete" id="${id}"></i>
                    <p class="text ${LINE}">${toDo}</p>
                    <i class="fa fa-solid fa-trash-can de" job="delete" id="${id}"></i>
                </li>
                `;

  const position = "beforeend";
  list.insertAdjacentHTML(position, item);
}

// 엔터키 이벤트 추가
input.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    const toDo = input.value;

    // 인풋이 비었다
    if (toDo) {
      addToDo(toDo);

      LIST.push({
        name : toDo,
        id:id, 
        done:false,
        trash:false
    })

    id++;
    }
    input.value =""

  }
});



