function IfPositive(x) {
    return parseInt(x) > 0;
}
function StartIfPositive() {
    let x = document.getElementById("input1").value;
    document.getElementById("result").innerHTML =
        IfPositive(x)? `Positive` : `Not Positive`;
}
function DisplayIfPositive() {
    document.getElementById("inputPanel").innerHTML =
        `<input type="number" id="input1" placeholder="Enter a number">
    <br><button type="button" id="button">Submit</button>`;
    document.getElementById("button").addEventListener("click",StartIfPositive);
}