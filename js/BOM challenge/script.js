let txtInput = document.querySelector('#inp');
let sbmt = document.querySelector('#add');
let res = document.querySelector('#tasks');

// document.forms[0].addEventListener('submit' , e => e.preventDefault());
txtInput.addEventListener('keypress' , e => {
    if(e.key === 'Enter') {
        e.preventDefault()
        sbmt.click();
    }
})

let Tasks = new Array ();
// style the btns
let btns = document.querySelectorAll('input[type = "button"]');
btns.forEach(e => {
    e.style = `
        color : white;
        background-color : red ;
        border : none ;
        padding : 1vw 2vw;
        border-radius : 4px;
        cursor : pointer;
        font : inherit;
        font-size: 1vw;

    ` 
})
// place holder for the input 
txtInput.setAttribute('placeholder' , 'please add your task here');
// style for the input 
txtInput.style = `
    padding : 1vw 3vw;
    outline : none; 
    font : inherit;
    font-size: 1vw;

`;
// style for pae structure 

document.body.style = `
    display : flex;
    flex-direction : column;
    font-family: sans-serif;
    font-size: 1.6vw;
`;
// style for the form 

document.forms[0].style = `
    margin : auto;
    background-color: #eaeaea;
    width : 60vw;
    padding : 0 3vw ;
    height : 8vh;
    display : flex;
    align-items : center;
    justify-content : space-between;
    border-radius : 5px;
`;
// style for the Tasks 

res.style = `
    background-color: #eaeaea;
    margin : 5vh auto ;
    width : 50vw;
    display : flex;
    flex-direction : column;
    border-radius : 5px;
`;




// function for creating task elements

function createTask(txt , id) {
    let div = document.createElement('div');
    let span = document.createElement('input');
    span.setAttribute('type' , 'button');
    let p = document.createElement('span');
    let txtNode = document.createTextNode(txt);
    p.appendChild(txtNode);
    p.id = id;
    div.appendChild(p);
    span.value = 'Delete';
    span.className = 'Del'
    span.style = `        
        color : white;
        background-color : red ;
        border : none ;
        padding : 1vw 2vw;
        border-radius : 4px;
        cursor : pointer;
        font : inherit;
        font-size: 1vw;
    `;
    div.appendChild(span);
    div.className = 'task';
    div.style = `
        padding : 2vw;
        margin : 1vh ;
        display : flex;
        align-items : center;
        justify-content : space-between;
        border-radius : 5px;
        background-color : white;
        `;
    res.appendChild(div);
}

// check if there is tasks in the local storage   

if(window.localStorage.getItem('Tasks')) {
    Tasks =(JSON.parse(window.localStorage.getItem('Tasks')));
}
sbmt.addEventListener('click' , e => {
    if(txtInput.value !== '') {
        let Task = {
            id : parseInt(Math.random()*1000000),
            value : txtInput.value
        };
        Tasks.push(Task);
        createTask(Task.value , Task.id)
        window.localStorage.setItem('Tasks' ,JSON.stringify(Tasks));
        txtInput.value = '' ;
    }
});

Tasks.forEach(e => {
    createTask(e.value , e.id);
})

// create a function to delete Tasks

sbmt.onclick = function() {
    let delBtn = document.querySelectorAll('.Del');
    delBtn.forEach(e => {
    e.addEventListener('click' , a => {
        Tasks.forEach(task => {
            if(+e.previousElementSibling.id === task.id) {
                e.parentNode.remove();
                console.log(`${e.previousElementSibling.id} ? ${task.id}`);
                Tasks.splice(Tasks.indexOf(task) , 1);
                window.localStorage.setItem('Tasks' ,JSON.stringify(Tasks));
            }
        })
    });
})
}
