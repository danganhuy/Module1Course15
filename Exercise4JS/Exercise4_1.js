function PowerOfTwo(x) {
    return x * x;
}
function StartCalPowerOfTwo() {
    let x = document.getElementById("input1").value;
    document.getElementById("result").innerHTML = `x^2 = ${PowerOfTwo(x)}`
}
function DisplayInputFieldPowerOfTwo() {
    document.getElementById("inputPanel").innerHTML =
        `<input type="number" id="input1" placeholder="Power">
    <button type="button" id="button">Submit</button>`;
    document.getElementById("button").addEventListener("click",StartCalPowerOfTwo);
}