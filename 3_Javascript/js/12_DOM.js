document.getElementById("btn1").addEventListener("click", function() {
    const nodeList = document.getElementById("test").childNodes;
    console.log(nodeList);

    // 노드 탐색
    // 1) 부모 노드 탐색: parentNode
    const li1 = document.getElementById("li1");
    console.log(li1.parentNode);

    li1.parentNode.style.backgroundColor = "blue";

    li1.parentNode.append("ABCD")

    // 2) 첫번째 자식 노드 탐색: firstChild
    console.log(document.getElementById("test").firstChild);

    // 3) 마지막 자식 노드 탐색: lastChild
    console.log(document.getElementById("test").lastChild);

    // 4) 중간에 존재하는 자식 노드 탐색: 부모요소.childNodes[인덱스]
    console.log(nodeList[11]);
    nodeList[11].append("1234");

    // 5) 이전 형제 노드 탐색: previousSibling
    //    다음 형제 노드 탐색: nextSibling

    console.log(nodeList[8].previousSibling);
    console.log(nodeList[8].nextSibling);

    // 노드 탐색을 위한 구문은 연달아서 사용 가능
    console.log(nodeList[8].previousSibling.previousSibling.previousSibling);
})

document.getElementById("btn2").addEventListener("click", function(){

    // #test의 모든 자식 요소를 반환
    const list = document.getElementById("test").children;
    console.log(list);

    // #test의 첫번째 자식 요소
    document.getElementById("test").firstElementChild.style.backgroundColor = "red";

    // #test의 마지막 자식 요소
    document.getElementById("test").lastElementChild.style.backgroundColor = "yellowgreen";

    // #test의 자식 중(list) 2번 인덱스 이전/다음 형제 요소
    list[2].previousElementSibling.addEventListener("click", function() {
        alert("2번 인덱스의 이전 형제 요소 클릭됨");
    })

    list[2].nextElementSibling.addEventListener("click", function() {
        alert("2번 인덱스의 다음 형제 요소 클릭됨");
    })

    console.log(prevEl(list[2]));
    console.log(prevEl(prevEl(list[2])));
    console.log(nextEl(list[2]));
})

// 이전 형제 요소 선택 함수
function prevEl(el) {
    return el.previousElementSibling;
}

function nextEl(el) {
    return el.nextElementSibling;
}

let i = 0;

// innerHTML 버튼 클릭 시
document.getElementById("btn3-1").addEventListener("click", function() {
    if (i < 10) {
        i++;
        document.getElementById("div3-1").innerHTML += "<div>" + i + "</div>";
    }
})

// createElement 버튼 클릭 시
document.getElementById("btn3-2").addEventListener("click", function() {
    const div = document.getElementById("div3-2"); // #div3-2 선택

    // createElement를 이용해서 div 요소 생성
    // document.createElement("태그명"): 해당 태그 요소를 생성하여 반환
    const child = document.createElement("div");
    if (i < 10) {
        i++
        child.innerText = i;
        div.append(child);
    }
})

document.getElementById("temp").addEventListener("click", function() {
    alert("temp");
})