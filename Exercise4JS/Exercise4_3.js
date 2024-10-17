function Factorial(x) {
    if (x === 1)
        return 1;
    return x*Factorial(x-1);
}
function StartCalFactorial() {
    let x = document.getElementById("input1").value;
    document.getElementById("result").innerHTML =
        `Factorial of ${x} = ${Factorial(x)}`;
}
function DisplayInputFieldFactorial() {
    document.getElementById("inputPanel").innerHTML =
        `<input type="number" id="input1" placeholder="Factorial">
    <button type="button" id="button">Submit</button>`;
    document.getElementById("button").addEventListener("click",StartCalFactorial);
}