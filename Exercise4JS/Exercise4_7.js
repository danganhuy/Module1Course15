function Swap(holder) {
    let temp = holder.a;
    holder.a = holder.b;
    holder.b = temp;
}
function StartSwap() {
    let holder = {a:document.getElementById("input1").value,
    b:document.getElementById("input2").value};
    Swap(holder);
    document.getElementById("input1").value = holder.a;
    document.getElementById("input2").value = holder.b;
}
function DisplaySwap() {
    document.getElementById("inputPanel").innerHTML =
        `<input type="number" id="input1" placeholder="a">
        <input type="number" id="input2" placeholder="b">
    <br><button type="button" id="button">Swap</button>`;
    document.getElementById("button").addEventListener("click",StartSwap);
}