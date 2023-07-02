// alert 확인
function fnAlert() {
    window.alert("alert 버튼 클릭됨");

    // window는 브라우저 자체를 나타내는 객체
    // -> JS 코드는 브라우저(window) 내부에서 실행되는 코드이다보니
    //    window를 생략할 수 있다.
}

// document.write 확인
function documentWrite() {
    // document.write("안녕하세요");
    // document.write("<b>안녕하세요</b><br><br><h2>반가워요</h2>");
    // 출력할 문구에 html 태그가 있을 경우 해석해서 시각적인 요소로 보여짐

    let a = "<table border='1'>";
    a += "<tr>";
    a += "<td>1</td>";
    a += "<td>2</td>";
    a += "</tr></table>";

    document.write(a);
}

// innerText 읽어오기
function getInnerText() {
    // HTML 문서 내에서 아이디가 "text1"인 요소를 얻어 와
    // test1 변수에 대입
    const test1 = document.getElementById("test1");

    // test1 변수에 대입된 요소에서 내용을 얻어 와 console에 출력
    console.log(test1.innerText);
}

// innerText로 변경하기
function setInnerText() {
    // id가 "test1"인 요소를 얻어 와
    // test1 변수에 대입
    const test1 = document.getElementById("test1");

    // test1 변수에 대입된 요소에 새로운 내용을 작성
    test1.innerText = "innerText로 변경된 <br> 내용입니다.";
}

// innerHTML로 읽어오기
function getInnerHTML1() {
    // id가 test2인 요소를 얻어 와
    // test2 변수에 대입

    // test2 요소 내부에 내용(태그 + 속성 + 내용)을 읽어서 콘솔에 출력
    const test2 = document.getElementById("test2");
    console.log(test2.innerHTML);
}

// innerHTML로 변경하기
function setInnerHTML1() {
    const test2 = document.getElementById("test2");
    test2.innerHTML = "<b>innerHTML로 변경된 내용</b> <br>반갑습니다."
}

// innerHTML 응용
function add() {
    // 1) 아이디가 area1인 요소 얻어오기
    const area1 = document.getElementById("area1");

    // 2) area1 내부 내용(태그, 속성, 내용 포함)을 모두 읽어 오기
    //const content = area1.innerHTML;

    // 3) area1에 이전 내용 + 새로운 요소(div.box2) 추가
    //area1.innerHTML += "<div class='box2'></div>";

    // 2번 + 3번
    area1.innerHTML += "<div class='box2'></div>";
}

function fnConfirm() {
    if (confirm("launching nuclear")) {
        document.getElementById("confirmBtn").style.backgroundColor = "red";
    } else {
        document.getElementById("confirmBtn").style.backgroundColor = "lime";
    }
}

// prompt 확인하기
function fnPrompt1() {
    var name = prompt("당신의 이름은 무엇입니까?");
    var age = prompt("당신의 나이는 몇 살입니까?")

    console.log(name);
    console.log(age);

    const divE1 = document.getElementById("area2");
    divE1.innerHTML += "<b>앗, 당신이 바로 " + age + "살 " + name + "님이시군요..!!</b>";
}

function fnPrompt2() {
    const pE1 = document.getElementById("area3")
    const input = prompt("이름을 입력해 주세요.");

    if (input == null) {
        pE1.innerText = "이름을 입력해 주세요."
    } else {
        pE1.innerText = input + " 님 환영합니다."
    }
}

// 선택한input요소.value 확인하기
function fnInput() {
    const input1 = document.getElementById("userId"); // 아이디 input 요소
    const input2 = document.getElementById("userPwd"); // 비밀번호 input 요소

    //console.dir(input1);

    let id = input1.value;
    const pwd = input2.value;

    console.log(id);
    console.log(pwd);

    document.getElementById("area4").value = id + ", " + pwd;

    input1.value = null;
    input2.value = null;
}