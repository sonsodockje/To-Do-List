const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const timeElement = document.getElementById("time");
const list = document.getElementById("list");
const input = document.getElementById("input");
const de = document.querySelector(".de");

let LIST,id;

// 스토리지에서 얻기
let data = localStorage.getItem("TODO");

////////////////////////////여기 불러오는게 안됨//////////////////////////

if (data) {
  LIST = JSON.parse(data);
  id = LIST.length;
  loadList(LIST);
} else {
  LIST = [];
  id = 0;
}

// 유저 인터페이스에서 아이템 로드하기
function loadList(array) {
  array.forEach(function(item){
    addToDo(item.name, item.id, item.done, item.tra)
  });
}

// 클래스 명을 똭
const CHECK = "fa-circle-check";
const UNCHECK = "fa-circle";
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
                    <i class="fa-regular ${DONE} co" job="complete" id="${id}"></i>
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
        name: toDo,
        id: id,
        done: false,
        trash: false,
      });

      // 스토리지에 저장
      localStorage.setItem("TODO", JSON.stringify(LIST));
      id++;
    }
    input.value = "";
  }
});

// 할일 완료
function completeToDo(element) {
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECK);
  element.parentNode.querySelector(".txet").classList.toggle(LINE_THROUGH);

  LIST[element.id].done = LIST[element.id].done ? false : true;
}

// 할일 삭제
function removeToDo(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);
  LIST[element.id].trash = true;
}

// 타켓
list.addEventListener("click", function (event) {
  const element = event.target;
  console.log(element);
  const elementJob = element.getAttribute("job");
  console.log();

  if (elementJob == "complete") {
    completeToDo(element);
  } else if (elementJob == "delete") {
    removeToDo(element);
  }

  // 스토리지에 저장
  localStorage.setItem("TODO", JSON.stringifY(LIST));
});
