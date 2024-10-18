function FindCharacter(arr, cha) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === cha) {
            count ++;
        }
    }
    return count;
}
function StartFindCharacter() {
    let str = document.getElementById('input1').value;
    let arr = str.split('');
    let cha = document.getElementById('input2').value;
    document.getElementById("result").innerHTML = `Appear frequency: ${FindCharacter(arr, cha)}`;
}
function DisplayFindCharacter() {
    document.getElementById("inputPanel").innerHTML =
        `<input type="text" id="input1" placeholder="array of character">
        <input type="text" id="input2" placeholder="character" maxlength="1">
    <br><button type="button" id="button">Check</button>`;
    document.getElementById("button").addEventListener("click",StartFindCharacter);
}