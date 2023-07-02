document.getElementById("add").addEventListener("click", function() {
    const row = document.createElement("div");
    row.classList.add("row");
    row.innerHTML = "<input type=\"number\" class=\"in\">";
    const span = document.createElement("span");
    span.classList.add("remove");
    span.innerHTML = "X";
    span.addEventListener("click", function() {
        // 요소.parentElement: 부모 요소
        // 요소.remove(): 요소 제거

        // 부모(.row) 제거
        span.parentElement.remove();
    })  
    row.append(span);
    document.getElementById("container").append(row);

    // input에 "type" 속성, "number" 속성 값 추가
    // - 요소.setAttribute("속성", "속성 값"): 요소에 속성/속성 값 추가
})

document.getElementById("calc").addEventListener("click", function() {
    const arr = document.getElementsByClassName("in");
    let sum = 0;
    for (let i of arr) sum += Number(i.value);
    alert("합계: " + sum)
})