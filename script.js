$(document).ready(function(){
    let http = new XMLHttpRequest();
    http.open('GET', 'https://thronesapi.com/api/v2/Characters');
    http.responseType = 'json';
    http.onreadystatechange = function() {
        if (http.readyState === 4 && http.status === 200) {
            print(http.response)
        }
    };
    http.send()
})


function print(arr){
    arr.forEach( actor => {
        const newTag = $('<div class="actor"></div>')
        const actorName = $(`<h2>${actor.fullName}</h2>`)
        const actorImage = $(`<img class="actor-image" src=${actor.imageUrl} alt=${actor.firstName} >`)
        const actorTitle = $(`<p class="title">${actor.title}</p>`)

        newTag.append(actorImage)
        newTag.append(actorName)
        newTag.append(actorTitle)
        $('#result').append(newTag)
    });
}

