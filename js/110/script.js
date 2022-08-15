//----------------------------1-----------------------
let arrNums = prompt('Print Number From - To “Example: 5-20” ');

if(arrNums) {
    nums = arrNums.split('-');
    findHigestNum = function (arr) {
        let highest = 0;
        for(let i = 0 ; i<arr.length ; i++) {
            if(highest <= +arr[i]) {
                highest = +arr[i];
            }
        }
        return highest;
    }
    
    findLowesttNum = function (arr) {
        let lowest = 999999;
        for(let i = 0 ; i<arr.length ; i++) {
            if(lowest >= +arr[i]) {
                lowest = +arr[i];
            }
        }
        return lowest;
    }
    for(let i = findLowesttNum(nums) ; i <= findHigestNum(nums) ; i++) {
        let div = document.createElement('div');
        div.appendChild(document.createTextNode(i))
        document.body.appendChild(div);
    }
    
}


//-----------------------------------2---------------------------------------

function popUp() {
    let popup = document.createElement('div');
    let wlcmSpan = document.createElement('span');
    wlcmSpan.appendChild(document.createTextNode('Welcome'));
    wlcmSpan.style = `
        font-weight: 800;
        font-size: larger;
    `;
    let wlcmP = document.createElement('p');
    wlcmP.appendChild(document.createTextNode('Welcome To Elzero Web School'));
    let extSpan = document.createElement('span');
    extSpan.appendChild(document.createTextNode('X'));
    extSpan.style = `
        background-color: red;
        position: absolute;
        right: -2%;
        top: -11%;
        border: none;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        cursor: pointer;
    `;
    extSpan.onclick = function () {
        this.parentElement.remove();
    }
    extSpan.id = "ext-btn"
    popup.appendChild(extSpan);
    popup.appendChild(wlcmSpan);
    popup.appendChild(wlcmP);
    popup.style = `
        position: absolute;
        top: 20%;
        left: 50%;
        text-align: center;
        background-color: #eee;
        padding: 2vw 11vw;
        font-family: cursive;
        transform: translate(-50%, -50%);
        border: 1.6px solid #9e9e9e;
    `;
    document.body.appendChild(popup);
}
setTimeout(popUp, 5000);

//----------------------------3-------------------------------

let cntrDiv = document.createElement('div');
cntrDiv.appendChild(document.createTextNode('10'));
document.body.appendChild(cntrDiv);
cntrDiv.style = `
    position: absolute;
    top: 80%;
    left: 50%;
    text-align: center;
    background-color: #eee;
    padding: 2vw 11vw;
    font-family: cursive;
    transform: translate(-50%, -50%);
    border: 1.6px solid #9e9e9e;
`;
function counter () {
    cntrDiv.innerHTML--;
    if(cntrDiv.innerText == 0) {
        clearInterval(myInterval);
        cntrDiv.style.backgroundColor = 'green'; 
        cntrDiv.style.color = 'white' ;

    } 
    
}

myInterval = setInterval(counter , 1000);

//--------------------4--------------------------------
let rfrDiv = document.createElement('div');
rfrDiv.appendChild(document.createTextNode('10'));
document.body.appendChild(rfrDiv);
rfrDiv.style = `
    position: absolute;
    top: 60%;
    left: 25%;
    text-align: center;
    background-color: #eee;
    padding: 2vw 11vw;
    font-family: cursive;
    transform: translate(-50%, -50%);
    border: 1.6px solid #9e9e9e;
`;
function scndCounter () {
    rfrDiv.innerHTML--;
    if(rfrDiv.innerText == 5) {
        open('https://Elzero.org', '' , 'width: 700px , height : 400px' );//this is for challenge 5
    }
    if(rfrDiv.innerText == 0) {
        clearInterval(rfrCounter);
        open('https://Elzero.org');
        rfrDiv.innerHTML = 'You have been redirected to Elzero.org';
    } 
    
}

rfrCounter = setInterval(scndCounter , 1000);

//challenge 5 is with the 4th one