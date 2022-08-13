// let addClasses = document.querySelector('.classes-to-add');
// let removeClasses = document.querySelector('.classes-to-remove');
// let res = document.querySelector('.classes-list').children[1];
// let eleToAddClasses = document.querySelector('.current');

// function showClassis() {
//     eleToAddClasses.classList.forEach(element => {
//         ele = document.createElement('span');
//         let txt = document.createTextNode(element);
//         ele.appendChild(txt);
//         res.appendChild(ele);
//     });
// }
// function sortSpans() {
//     let Spans = document.querySelectorAll('span');
//     let spansArr= [];
//     Spans.forEach(e => {
//         spansArr.push(e.innerHTML);
//     });
//     let newShit = spansArr.sort();
//     for(let i = 0 ;i<Spans.length ; i++) {
//         Spans[i].innerHTML = newShit[i];
//     }
// }
// addClasses.addEventListener('blur',function () {
//     if(addClasses.value !== '') {
//         let spanDel = document.querySelectorAll('span');
//         spanDel.forEach(element => {
//             element.remove();
//         });
//         let addClassesValue = addClasses.value.toLowerCase();
//         addClasses.value = '';
//         addClassesValue = addClassesValue.split(' ');
//         addClassesValue.forEach(element => {
//             if(element !== '') {
//                 eleToAddClasses.classList.add(element);
//                 showClassis();
//             }
//         });
//         if(document.querySelector('.empty')) {
//             document.querySelector('.empty').remove();
//         }
//     }
//     sortSpans();
// });


// removeClasses.addEventListener('blur',function () {
//     if(removeClasses.value !== '') {
//         let spanDel = document.querySelectorAll('span');
//         let rmClassesValue = removeClasses.value.toLowerCase();
//         rmClassesValue = rmClassesValue.split(' ');
//         rmClassesValue.forEach(element => {
//             eleToAddClasses.classList.remove(element);
//             for(let i = 0 ; i<spanDel.length ; i++) {
//                 if(spanDel[i].innerHTML === element) {
//                     spanDel[i].remove();
//                 }
//             }
//         });
//     }
//     if(eleToAddClasses.classList.length === 0) {
//         ele = document.createElement('p');
//         let txt = document.createTextNode('Class list is empty!');
//         ele.appendChild(txt);
//         res.appendChild(ele);
//         ele.className = 'empty';
//     }
//     removeClasses.value = '';
// });

// showClassis();
// sortSpans();



// divEle = document.querySelector('.our-element');
// divEle.nextElementSibling.remove();
// ele = document.createElement('div');
// eleTxt = document.createTextNode('Start');
// ele.appendChild(eleTxt);
// ele.className = 'start';
// ele.title = 'start Element';
// ele.setAttribute('data-value' , 'Start');
// document.body.insertBefore(ele , divEle);

// nEle = document.createElement('div');
// eleTxt = document.createTextNode('End');
// nEle.appendChild(eleTxt);
// nEle.className = 'End';
// nEle.title = 'end Element';
// nEle.setAttribute('data-value' , 'End');
// document.body.insertBefore(nEle , divEle.nextElementSibling) ;


// console.log(document.querySelector('span').nextSibling.nextSibling.nextSibling);

for(let i = 0 ; i<document.body.children.length ; i++) {
    let myEle = document.body.children[i];
    myEle.onclick = (e => {
        console.log(`This is a ${myEle.tagName}`);
    })
}

