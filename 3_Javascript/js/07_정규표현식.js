// 정규 표현식 객체 생성 + 확인하기
document.getElementById("check1").addEventListener("click", function() {
    // 정규 표현식 객체 생성
    const regExp1 = new RegExp("script");
                    // "script"와 일치하는 문자열이 있는 지 검사하는 정규 표현식
    const regExp2 = /java/;
                    // "java"와 일치하는 문자열이 있는 지 검사하는 정규 표현식

    // 확인하기
    const str1 = "저희는 지금 javascript를 공부하고 있습니다.";
    const str2 = "servlet/jsp(java server page)도 조만간 합니다.";
    const str3 = "java, java, java";

    console.log("regExp1.test(str1): " + regExp1.test(str1));
    console.log(regExp1.exec(str1));
    console.log("regExp2.test(str2): " + regExp2.test(str2));
    console.log(regExp1.exec(str2));
    console.log("regExp1.test(str2): " + regExp1.test(str2));
    console.log(regExp1.exec(str2));

    // 일치하는 게 없는 경우
    console.log("regExp1.test(str2): " + regExp1.test(str2));
    console.log(regExp1.exec(str2));

    // 일치하는 게 여러 개 있을 경우
    console.log("regExp2.test(str3): " + regExp2.test(str2));
    console.log(regExp2.exec(str3));
})

document.getElementById("btn1").addEventListener("click", function() {
    const div1 = document.getElementById("div1");

    div1.innerHTML = "" // 내용 모두 삭제

    // a(일반 문자열): 문자열 내에 a라는 문자열이 존재하는지 검색
    const regExp1 = /a/;
    div1.innerHTML += "/a/, apple: " + regExp1.test("apple") + "<hr>"; // true
    div1.innerHTML += "/a/, price: " + regExp1.test("price") + "<hr>"; // false

    // [abcd]: 문자열 내에 a, b, c, d 중 하나라도 일치하는 문자가 있는지 검색
    const regExp2 = /[abcd]/;
    div1.innerHTML += "/[abcd]/, apple: " + regExp2.test("apple") + "<hr>"; // true
    div1.innerHTML += "/[abcd]/, sub: " + regExp2.test("sub") + "<hr>"; // true
    div1.innerHTML += "/[abcd]/, qwert: " + regExp2.test("qwert") + "<hr>"; // false

    // ^(캐럿): 문자열의 시작을 의미
    const regExp3 = /^group/; // 문자열의 시작이 "group"인지 확인
    div1.innerHTML += "/^group/, group100: " + regExp3.test("group100") + "<hr>"; // true
    div1.innerHTML += "/^group/, 100group: " + regExp3.test("100group") + "<hr>"; // false

    // $(달러): 문자열의 끝을 의미
    const regExp4 = /group$/; // 문자열의 끝이 "group"인지 확인
    div1.innerHTML += "/group$/, group100: " + regExp4.test("group100") + "<hr>"; // false
    div1.innerHTML += "/group$/, 100group: " + regExp4.test("100group") + "<hr>"; // false
})

document.getElementById("inputName").addEventListener("keyup", function() {
    result = document.getElementById("inputNameResult");
    result.style.fontWeight = "bold";
    if (/^[가-힣]{2,5}$/.test(this.value)) {
        result.innerText = "유효한 이름 형식입니다.";
        this.style.backgroundColor = "lime";
    } else if (this.value == "") {
        result.innerText = null;
        this.style.backgroundColor = null;
    } else {
        result.innerText = "이름 형식이 유효하지 않습니다.";
        this.style.backgroundColor = "red";
    }
})

document.getElementById("inputPno").addEventListener("keyup", function() {
    result = document.getElementById("inputPnoResult");
    if (/^\d{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])-[1-4]\d{6}$/.test(this.value)) {
    // 업그레이드

    // (): 포획 괄호, 괄호 내부에 대응되는 부분을 찾아서 기억함
    // | : 또는
    // 월
        result.innerText = "유효한 주민등록번호입니다.";
        this.classList.add("confirm"); // confirm 클래스 추가
        this.classList.remove("error");
        result.style.fontWeight = "bold";
        
    } else if (this.value == "") {
        result.innerText = "주민등록번호를 작성해 주세요.";
        result.style.fontWeight = null;
    } else {
        result.innerText = "주민등록번호가 유효하지 않습니다.";
        this.classList.add("error");
        this.classList.remove("confirm");
        result.style.fontWeight = "bold";
    }

    // 요소.classList: 요소가 가지고 잇는 클래스를 배열로 반환
    // 요소.classList.remove("클래스명"): 요소의 특정 클래스 제거
    // 요소.classList.add("클래스명"): 요소에 특정 클래스 추가
    // 요소.classList.toggle("클래스명"): 클래스가 있으면 제거 없으면 추가
})