function IsNumber(x) {
    if (isNaN(parseInt(x)))
        return false;
    return true;
}
function StartIsNumber() {
    let x = document.getElementById("input1").value;
    document.getElementById("result").innerHTML =
        `${IsNumber(x)}`;
}
function DisplayInputIsNumber() {
    document.getElementById("inputPanel").innerHTML =
        `<input type="text" id="input1" placeholder="Number??" maxlength="1">
    <button type="button" id="button">Submit</button>`;
    document.getElementById("button").addEventListener("click",StartIsNumber);
}