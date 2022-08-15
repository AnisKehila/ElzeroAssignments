//--------------------------1----------------------------------
let fontInput = document.querySelector('#fonts');
let colorInput = document.querySelector('#colors');
let fontSizeInput = document.querySelector('#font-size');
let body = document.body;

if(window.localStorage.getItem('font')) {
    body.style.fontFamily = window.localStorage.getItem('font');
    fontInput.value = window.localStorage.getItem('font');
}

if(window.localStorage.getItem('color')) {
    body.style.color = window.localStorage.getItem('color');
    colorInput.value = window.localStorage.getItem('color');

}

if(window.localStorage.getItem('fontSize')) {
    body.style.fontSize = window.localStorage.getItem('fontSize') + 'px';
    fontSizeInput.value = window.localStorage.getItem('fontSize');

}


fontInput.onchange = function () {
    let font = fontInput.value;
    window.localStorage.setItem('font' , font);
    body.style.fontFamily = font;
};


colorInput.onchange = function () {
    let color = colorInput.value;
    window.localStorage.setItem('color' , color);
    body.style.color = color;

};



fontSizeInput.onchange = function () {
    let fontSize = fontSizeInput.value;
    window.localStorage.setItem('fontSize' , fontSize);
    body.style.fontSize = fontSize + 'px';

};

//----------------------------2-----------------------------------------

let inp1 = document.querySelector('#i1');
let inp2 = document.querySelector('#i2');
let inp3 = document.querySelector('#i3');
let slct = document.querySelector('#slct');

if(window.sessionStorage.getItem('inp1')) {
    inp1.value = window.sessionStorage.getItem('inp1');
}

if(window.sessionStorage.getItem('inp2')) {
    inp2.value = window.sessionStorage.getItem('inp2');
}

if(window.sessionStorage.getItem('inp3')) {
    inp3.value = window.sessionStorage.getItem('inp3');
}

if(window.sessionStorage.getItem('slct')) {
    slct.value = window.sessionStorage.getItem('slct');
}

inp1.oninput = function () {
    window.sessionStorage.setItem('inp1' , inp1.value);
};

inp2.oninput = function () {
    window.sessionStorage.setItem('inp2' , inp2.value);
};

inp3.oninput = function () {
    window.sessionStorage.setItem('inp3' , inp3.value);
};

slct.onchange = function () {
    window.sessionStorage.setItem('slct' , slct.value);
};