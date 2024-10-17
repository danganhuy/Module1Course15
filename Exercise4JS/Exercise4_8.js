function Reverse(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(+arr[i]);
    }
    return newArr;
}
function StartReverse() {
    let str = document.getElementById('input1').value;
    let arr = str.split(',');
    document.getElementById("result").innerHTML = `Reversed array: ${Reverse(arr)}`;
}
function DisplayReverse() {
    document.getElementById("inputPanel").innerHTML =
        `<input type="text" id="input1" placeholder="array">
    <br><button type="button" id="button">Reverse</button>`;
    document.getElementById("button").addEventListener("click",StartReverse);
}