let body = document.body;
let header = document.createElement('header');
header.className = 'header';
let logo = document.createElement('span');
logo.className = 'logo';
let logoTxt = document.createTextNode('Elzero');
logo.appendChild(logoTxt)
header.appendChild(logo);

let aEle = document.createElement('a');
aEle.setAttribute('href' , '#');
aEle.className = 'links';
let list = document.createElement('ul');
let listHome = document.createElement('li');
listHome.className = 'list';
let homeTxt = document.createTextNode('Home');
aEle.appendChild(homeTxt);
listHome.appendChild(aEle);
list.appendChild(listHome);

let aEle1 = document.createElement('a');
aEle1.setAttribute('href' , '#');
aEle1.className = 'links';
let listAbout = document.createElement('li');
let AboutTxt = document.createTextNode('About');
listAbout.className = 'list';
aEle1.appendChild(AboutTxt);
listAbout.appendChild(aEle1);
list.appendChild(listAbout);

let aEle2 = document.createElement('a');
aEle2.setAttribute('href' , '#');
aEle2.className = 'links';
let listService = document.createElement('li');
let ServiceTxt = document.createTextNode('Service');
listService.className = 'list';
aEle2.appendChild(ServiceTxt);
listService.appendChild(aEle2);
list.appendChild(listService);

let aEle3 = document.createElement('a');
aEle3.setAttribute('href' , '#');
aEle3.className = 'links';
let listContact = document.createElement('li');
let ContactTxt = document.createTextNode('Contact');
listContact.className = 'list';
aEle3.appendChild(ContactTxt);
listContact.appendChild(aEle3);
list.appendChild(listContact);



header.appendChild(list);
body.style  = `
    font-family: sans-serif;
    background-color: #ececec;
    display : flex;
    flex-direction : column;
    font-size : 1.2vw;
    `;
header.style = `
    display : flex;
    justify-content : space-between;
    align-items: center;
    padding: 1vh;
    font-size : 2.4vh;
    background-color: #fff;

`;
logo.style = `  
    color : #27a56e;
    font-weight: 600;
    font-size: 4.5vh;

`;
list.style = `
    display: flex;
    list-style: none;
`;
for(let i=0 ; i<list.children.length ; i++) {
    list.children[i].children[0].style = `
        text-decoration : none;
        margin : 1.6vw;
        color : #938182;
        `;
}

body.appendChild(header);

let container = document.createElement('div');
for ( let i = 0 ; i < 15 ; i++) {
    let numContainer = document.createElement('div');
    let txtNode = document.createTextNode(i);
    let prdctSpan = document.createElement('span');
    let txtSpan = document.createTextNode('Product');
    prdctSpan.appendChild(txtSpan);
    prdctSpan.style = `
        color : rgb(147, 129, 130);
        font-size : 0.8vw;
        margin-top : 0.8vh;
    `;
    numContainer.appendChild(txtNode);
    numContainer.appendChild(prdctSpan);
    numContainer.style = `
    display: flex;
    flex-direction: column;
    background-color: white;
    text-align: center;
    border-radius: 8px;
    padding : 2.6vh 12vw;
    margin : 1vw;
    font-size : 2.2vw;
    font-weight : 550;
    `;
    container.appendChild(numContainer);
}
container.style = `
    margin : 4vh ;
    display: grid;  grid-template-columns: auto auto auto;
    justify-content : space-around;

`;


body.appendChild(container);



let footer = document.createElement('footer');
footer.className = 'footer';
let footerTxt = document.createTextNode('Copyrights 2022 Anis Kehila');
footer.appendChild(footerTxt);
footer.style = `
    width: 98vw;
    background-color: green;
    padding: 1.8vh 0;
    border-radius: 0.2vh;
    color: white;
    text-align: center;
    margin : auto;
`;
body.appendChild(footer);
