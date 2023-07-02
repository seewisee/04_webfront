function accessId() {
    const div1 = document.getElementById("div1");

    // 접근한 요소의 배경 색 얻어 오기
    const bgColor = div1.style.backgroundColor;

    // *** 자바스크립트는 문자열 비교 시에도 비교 연산자를 사용한다!! ***
    if (bgColor == "red") {
        // div1의 배경 색을 yellow로 변경
        div1.style.backgroundColor = "yellow";
    } else {
        // div1의 배경 색을 red로 변경
        div1.style.backgroundColor = "red";
    }
}

// 클래스명으로 접근하기
function accessClass() {
    // 요소를 여러 개 접근하는 경우 [배열] 형태로 반환됨
    const arr = document.getElementsByClassName("div2");
    arr[0].style.backgroundColor = "lightgray";
    arr[0].innerHTML = "첫번째 요소";
    arr[1].style.backgroundColor = "pink";
    arr[1].innerHTML = "두번째 요소";
    arr[2].style.backgroundColor = "skyblue";
    arr[2].innerHTML = "세번째 요소";
}

// 태그명으로 접근하기
function accessTagName() {
    // 문서 내 모든 li 태그 접근(배열 반환)
    const arr = document.getElementsByTagName("li");

    // 반복문(Java랑 비슷)
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i].innerText;
        arr[i].style.backgroundColor = "RGB(" + 10 * num + ", " + 30 * num + ", " + 50 * num + ")"
    }
}

// input 태그의 값(value) 얻어오기/변경하기
function inputTest() {
    // input 요소 접근하기
    const input = document.getElementById("input-test");

    // ** innerText/innerHTML은
    // 요소의 내용(시작 태그, 종료 태그 사이에 작성된 내용)을
    // 얻어 오거나, 변경할 때만 사용 가능.

    // ** input은 [value]를 이용해서 값을 얻어 오거나, 변경할 수 있음.
    console.log(input.value);
    input.value = "";

    // input에 초점 맞추기 -> focus()
    input.focus();
}

function accessName() {
    const hobbyList = document.getElementsByName("hobby");

    let str = "";
    let count = 0;

    for (let i = 0; i < hobbyList.length; i++) {
        // * radio/checkbox 전용 속성 *
        // .checked : 해당 요소가 체크되어 있으면 true, 아니면 false 반환
        if (hobbyList[i].checked) {
            if (str != "") str += ", "
            str += hobbyList[i].value;
            count++
        }
    }

    document.getElementById("name-div").innerHTML = str + "<br>선택된 개수: " + count;
}

// CSS 선택자로 접근하기
function accessCSS() {
    // querySelector(): 요소 1개 선택 시 사용
    //                  (여러 요소가 선택되면 첫번째 요소만 선택)
    document.querySelector("#css-div").style.border = "3px solid red";

    // 여러 요소 선택(첫 번째 요소 선택 확인)
    document.querySelector("#css-div > div").style.fontsize = "30px";

    // querySelectorAll(): 모든 요소 선택 시 사용
    const arr = document.querySelectorAll("#css-div > div");
    for(let i = 0; i < arr.length; i++) {
        arr[i].style.backgroundColor = "gray";
    }
}

function readValue() {
    const bg = document.getElementById("chatting-bg");
    const input = document.querySelector("#chatting-input");

    if (input.value.trim().length > 0) {
        // 문자열.trim(): 문자열 양 끝 공백을 모두 제거
        // e.g. "       k      h       ".trim() -> "k      h"
        bg.innerHTML += "<p><span>" + input.value + "</span></p>";

        // 요소.scrollTop: 요소 내부 현재 스크롤 위치 반환
        // 요소.scrollTop = 위치: 스크롤을 특정 위치로 이동
        bg.scrollTop = bg.scrollHeight;
    }
    input.value = "";
    input.focus();
}

function inputEnter(event) {
    //console.log(event.key); // 현재 눌러진 키를 반환
    if(event.key == "Enter") {
        readValue();
    }
}