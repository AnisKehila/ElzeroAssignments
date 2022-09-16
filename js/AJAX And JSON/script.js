let ajaxCall = new XMLHttpRequest();
ajaxCall.open("GET","articles.json");
ajaxCall.send();
ajaxCall.onload = function () {
    if (this.readyState === 4 && this.status === 200) {
        console.log(this.responseText);
        console.log("Data Loaded");
        let mainData = JSON.parse(this.responseText);
        //assignment03
        // for(let i = 0 ; i < mainData.length ; i++) {
        //     mainData[i].category = "All";
        // };
        // console.log(mainData);
        // let updatedData = JSON.stringify(mainData);
        // console.log(updatedData);
        for(i in mainData) {
            let div = document.createElement('div');
            let Title = document.createElement('h2');
            let content = document.createElement('p');
            let author = document.createElement('p');
            let category = document.createElement('p');
            let txtTitle= document.createTextNode(mainData[i].title);
            Title.appendChild(txtTitle);
            div.appendChild(Title);
            content.appendChild(document.createTextNode(mainData[i].content));
            div.appendChild(content);
            author.appendChild(document.createTextNode(`Author: ${mainData[i].author}`));
            div.appendChild(author);
            category.appendChild(document.createTextNode(`Category: ${mainData[i].category}`));
            div.appendChild(category);





            document.body.appendChild(div);
        }
    }
};
