let Data = new Promise((res , rej) => {
    let ajaxCall = new XMLHttpRequest();
    ajaxCall.open("GET","data.json");
    ajaxCall.send();
    ajaxCall.onload = function () {
        if (this.readyState === 4 && this.status === 200) {
            let mainData = JSON.parse(this.responseText);
            res(mainData);
        } else {
            rej(Error('Link isn\'t available'))
        }
    }
});
// -------------------------------------------------------------
Data.then(val => val.length = 5);
Data.then((val) => {
    for(i in val) {
        let userTitle = document.createElement('h1');
        let userDescription = document.createElement('p');
        let Title = document.createTextNode(val[i].title);
        let Description = document.createTextNode(val[i].description);
        userTitle.appendChild(Title);
        userDescription.appendChild(Description);
        document.body.appendChild(userTitle);
        document.body.appendChild(userDescription);
    }
}).catch(rej => console.log(rej));
async function fetchData (link) {
    try {
        let data = await fetch(link);
        data = await data.json();
        data.length = 5;
        document.body.appendChild(document.createTextNode('Assignment 02'));

        for(i in data) {
            let userTitle = document.createElement('h1');
            let userDescription = document.createElement('p');
            let Title = document.createTextNode(data[i].title);
            let Description = document.createTextNode(data[i].description);
            userTitle.appendChild(Title);
            userDescription.appendChild(Description);
            document.body.appendChild(userTitle);
            document.body.appendChild(userDescription);
        }        
    } catch(Error) {
        console.log(Error);
    }
}
fetchData("data.json")