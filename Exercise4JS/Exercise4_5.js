function FindMin(a,b,c) {
    if (a <= b && a <= c) {
        return a;
    }
    if (b <= a && b <= c) {
        return b;
    }
    if (c <= a && c <= b) {
        return c;
    }
}
function StartCalFindMin() {
    let a = document.getElementById("input1").value;
    let b = document.getElementById("input2").value;
    let c = document.getElementById("input3").value;
    let min = FindMin(+a,+b,+c);
    document.getElementById("result").innerHTML =
        `Min = ${min}`;
}
function DisplayInputFindMin() {
    document.getElementById("inputPanel").innerHTML =
        `<input type="text" id="input1" placeholder="a">
    <br><input type="text" id="input2" placeholder="b">
    <br><input type="text" id="input3" placeholder="c">
    <br><button type="button" id="button">Submit</button>`;
    document.getElementById("button").addEventListener("click",StartCalFindMin);
}