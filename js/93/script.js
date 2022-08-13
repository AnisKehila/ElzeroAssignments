// let myElement = document.getElementById('elzero');
// console.log(myElement);

// let myElement1 = document.getElementsByClassName('element');
// console.log(myElement1);

// let myElement2 = document.getElementsByName('js');
// console.log(myElement2);

// let myElement3 = document.getElementsByTagName('div');
// console.log(myElement3);

// let myElement4 = document.querySelector('#elzero');
// console.log(myElement4);

// let myElement5 = document.querySelector('.element');
// console.log(myElement5);

// let myElement6 = document.querySelector("div");
// console.log(myElement6);

// let myElement7 = document.querySelector('[name="js"]');
// console.log(myElement7);

// let myElement8 = document.querySelectorAll('#elzero');
// console.log(myElement8);

// let myElement9 = document.querySelectorAll('.element');
// console.log(myElement9);

// let myElement10 = document.querySelectorAll('div');
// console.log(myElement10);

// let myElement11 = document.querySelectorAll('[name="js"]');
// console.log(myElement11);


// let myImgs = document.images;
// console.log(myImgs);
// for(let i = 0 ; i<myImgs.length ; i++) {
//     myImgs[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
//     myImgs[i].alt = "Elzero Logo";
// }
//-----------------------------------------------------
// let usdValue = document.getElementsByName('dollar')[0];
// let result = document.getElementsByClassName('result')[0];
// usdValue.oninput = function () {
//     result.innerHTML = `{${usdValue.value}} USD Dollar = {${usdValue.value*180}} DZD`;
// }
//------------------------------------------------------
// let  firstElement = document.getElementsByClassName('one')[0];
// let secondElement = document.getElementsByClassName('two')[0];
// let divs = document.querySelectorAll('div');

// let firstElementTitle = secondElement.title;
// let secondElementTitle = firstElement.title;
// console.log(firstElementTitle + '  ' + secondElementTitle);

// let firstElementText = secondElement.innerHTML;
// let secondElementText = firstElement.innerHTML + ' ' + divs.length;
// console.log(firstElementText + '  ' + secondElementText);

// firstElement.title = firstElementTitle;
// secondElement.title = secondElementTitle;

// firstElement.innerHTML = firstElementText;
// secondElement.innerHTML = secondElementText;
//-----------------------------------------------------------------------------
// let myImgs = document.images;
// for (let i = 0 ; i < myImgs.length ; i++) {
//     if(myImgs[i].alt) {
//         myImgs[i].alt = 'Old';
//     } else {
//         myImgs[i].alt = 'Elzero New"';
//     }
// }
var form = document.forms[0];
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);



let sbmt = document.getElementsByName('create')[0];
sbmt.onclick = function () {
    let rmvEle = document.querySelectorAll('.box');
    rmvEle.forEach(function (e) {
        e.remove();
    });
    let eleNum = document.getElementsByName('elements')[0].value;
    let eleTxt = document.getElementsByName('texts')[0].value;
    let eleType = document.getElementsByName('type')[0].value;

    for(let i=0 ; i<eleNum ; i++) {
        let tag = document.createElement(eleType);
        let text = document.createTextNode(eleTxt);
        tag.appendChild(text);
        tag.className = 'box';
        tag.title = 'Element';
        let element = document.getElementsByClassName('results')[0];
        element.appendChild(tag);
    }
}
