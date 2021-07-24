let addTitle = document.getElementById('exampleFormControlInput1');
let addTxt = document.getElementById('exampleFormControlTextarea1');
let addMe= document.getElementById('exampleFormControlSelect1')

let myObj = {
    title: addTitle.value,
    query: addMe.value,
    text: addTxt.value
}

document.getElementById('myself').addEventListener('click', function (e) {
    addTxt.value = "";
    addTitle.value = "";
    addMe.value = "";
    confirm("Confirm form Submission!!");


})