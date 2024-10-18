let list = [];
let input;
let btAdd;
let productCount
let productDataTable;

function Initialize() {
    input = document.getElementById("input-product-name");
    btAdd = document.getElementById("add-sp");
    productCount = document.getElementById("product-count");
    productDataTable = document.getElementById("product-list")
    btAdd.addEventListener("click", Add);
}

function Add() {
    ResetEdit();
    let name = input.value;
    list.push(name);
    let i = list.length - 1;
    let s = `
    <tr class="product-data" id="row-${i}">
        <td class="product-name-td" id="product-name${i}">${name}</td>
        <td class="td-edit"><button type="button" class="button-edit" onclick="ButtonClick_Edit(${i})">Edit</button></td>
        <td class="td-delete"><button type="button" class="button-delete" onclick="ButtonClick_Delete(${i})">Delete</button></td>
    </tr>`;

    productDataTable.innerHTML += s;
    productCount.innerHTML = `${i+1} product${i>0? "s":""}`;
}

let currentEle = null;
let currentPd = null;
function ResetEdit() {
    if (currentEle !== null) {
        currentEle.innerHTML = currentPd;
        currentEle = null;
        currentPd = null;
    }
}
function ButtonClick_Edit(id) {
    if (currentEle === document.getElementById(`product-name${id}`)) {
        currentEle.innerHTML = document.getElementById(`input-edit`).value;
        currentEle = null;
        currentPd = null;
        return;
    }
    if (currentEle !== null) {
        currentEle.innerHTML = currentPd;
    }
    currentEle = document.getElementById(`product-name${id}`);
    currentPd = currentEle.innerHTML;
    currentEle.innerHTML = `<label><input type="text" id="input-edit" value="${currentPd}"></label>`;
}

function ButtonClick_Delete(id) {
    document.getElementById(`row-${id}`).remove();
}