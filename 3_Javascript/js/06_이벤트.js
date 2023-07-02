// 인라인 이벤트 모델 확인하기
function test1(button) {
    button.style.backgroundColor = "red";
    button.style.color = "white";
}

// 고전 이벤트 모델 확인하기

// ** 주의사항 **
// 고전/표준 이벤트 모델은 렌더링된 HTML 요소에
// 이벤트 관련된 동작을 부여하는 코드

// -> 렌더링되지 않은 요소에는 이벤트 관련 동작을 추가할 수 없다!!
//      (문제 원인: HTML 코드 해석 순서(위 -> 아래))

// --> 해결 방법:
console.log(document.getElementById("test2-1"));

document.getElementById("test2-1").onclick = function() {
    // 익명 함수(이벤트 핸들러에 많이 사용함)
    alert("고전 이벤트 모델로 출력된 대화 상자");
}

// 이벤트 제거
document.getElementById("test2-2").onclick = function() {
    // test2-1 이벤트 제거
    document.getElementById("test2-1").onclick = null;
    alert("test2-1 이벤트를 제거하였습니다.");
}

// 고전 이벤트 모델 단점
// -> 한 요소에 동일한 이벤트 리스너(onclick)에 대한
//    다수의 이벤트 핸들러(배경색 변경, 폰트 변경)를 작성할 수 없다.
//    (마지막으로 해석된 이벤트 핸들러만 적용)
document.getElementById("test2-3").onclick = function(event) {
    // 버튼 색 바꾸기
    // 방법 1) 요소를 문서에서 찾아서 선택
    //document.getElementById("test2-3").style.backgroundColor = "red";

    // 방법 2) 매개변수 e 또는 event 활용하기
    // -> 이벤트 핸들라에 e 또는 event를 작성하는 경우
    //    해당 이벤트와 관련된 모든 정보가 담긴 이벤트 객체가 반환된다.
    //console.log(event);

    // event-target: 이벤트가 발생한 요소
    //event.target.style.backgroundColor = "red";

    // 방법 3) this 활용하기 -> 이벤트가 발생한 요소(event.target과 동일)
    //console.log(this);
    this.style.backgroundColor = "red";
}

/* document.getElementById("test2-3").onclick = function() {
    document.getElementById("test2-3").style.fontSize = "30px";
} */

// 표준 이벤트 모델
document.getElementById("test3").addEventListener("click", function() {
    // this: 이벤트가 발생한 요소
    console.log(this.clientWidth); // 현재 요소의 너비(테두리 제외)
    // this.style.width = "300px"; // 현재 요소 너비 변경
    this.style.width = this.clientWidth + 20 + "px";
})

// test3에 이미 click 이벤트에 대한 동작이 존재하는데
// 중복해서 적용
/* document.getElementById("test3").addEventListener("click", function() {
    this.style.height = this.clientHeight + 20 + "px";
})

document.getElementById("changeBtn1").addEventListener("click", function() {
    document.getElementById("div1").style.backgroundColor = document.getElementById("input1").value;
}) */

// input1의 값이 변경되었을 때 입력된 값으로 배경 색 변경
document.getElementById("input1").addEventListener("change", function() {
    // change 이벤트
    // - text 관련 input 태그는
    // 입력된 값이 변할 때는 change라고 하지 않고

    // 입력이 완료된 후 포커스를 잃거나, 엔터를 입력하는 경우
    // 입력된 값이 이전과 다를 경우 change 이벤트가 발생한 것으로 인식한다.

    console.log("change 이벤트 발생!");
    document.getElementById("div1").style.backgroundColor = this.value;
    this.value = "";
})

// a태그 기본 이벤트 제거
document.getElementById("moveNaver").addEventListener("click", function(e){
    // 매개변수 e 또는 event = 이벤트 발생 객체
    //                      (이벤트와 관련된 정보가 담겨 있는 객체)

    e.preventDefault(); // HTML 요소가 가지고 있는 기본 이벤트를 막음(제거)
    // prevent: 막다, 방지하다, 예방하다
    // Default: 기본 / 기본값
})

// form 태그 기본 이벤트 제거
// 방법 1. submit 버튼을 사용 안 하는 방법
document.getElementById("testBtn1").addEventListener("click", function() {

    // #in1에 입력 값 얻어오기
    const in1 = document.getElementById("in1").value;

    // #in1에 작성된 값이 "제출"일 경우 testForm1을 submit
    if (in1 == "제출") {
        // ** form 태그에 name 속성이 있을 경우 직접 선택 가능
        // document.form 태그의 name 속성 값

        // ** form요소.submit(): form 요소 제출 함수
        document.testForm1.submit();
    }
})

// 방법 2. onsubmit을 이용해서 form 태그 제출되는 것을 막는 방법
function checkIn2() {
    if (document.getElementById("in2").value == "제출") {
        return true;
    }
    return false;
}