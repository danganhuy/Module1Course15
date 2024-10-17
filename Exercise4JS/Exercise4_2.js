function CircleArea(r) {
    return r*r*Math.PI;
}
function CirclePerimeter(r) {
    return 2*r*Math.PI;
}
function StartCalCircleAreaPerimeter() {
    let r = document.getElementById("input1").value;
    document.getElementById("result").innerHTML =
        `Circle area = ${CircleArea(r).toFixed(2)}; 
        Circle perimeter = ${CirclePerimeter(r).toFixed(2)}`;
}
function DisplayInputFieldCircleAreaPerimeter() {
    document.getElementById("inputPanel").innerHTML =
        `<input type="number" id="input1" placeholder="Radius">
    <button type="button" id="button">Submit</button>`;
    document.getElementById("button").addEventListener("click",StartCalCircleAreaPerimeter);
}