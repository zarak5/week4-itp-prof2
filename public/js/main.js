// CUSTOM JS FILE //
/*window.addEventListener('load',init);

function init(){
    // on page load, get data and render
    getData();
}

function getData(){
    $.ajax({
        url: '/api/get',
        type: 'GET',
        failure: function(err){
            console.log ("Could not get the data");
            return alert("Something went wrong");
        },
        success: function(data) {
            console.log(data);
            var animals = data.animals;
            animals.forEach(function(currentAnimal){
                var htmlToAppend =
                '<div class="col-md-4 card">'+
                    '<h1>'+currentAnimal.name+'</h1>'+
                    '<img src="'+currentAnimal.url+'" />'+
                    '<div class="tagHolder">'+
                        renderTags(currentAnimal)+
                    '</div>'+
                    '<div class="control-panel">'+
                        '<a href="/api/delete/'+currentAnimal._id+'">Delete</a>'+
                        '<br/>'+
                        '<a href="/edit/'+currentAnimal._id+'">Edit</a>'+
                    '</div>'+
                '</div>'
                $('#pet-holder').append(htmlToAppend);
            })
        }
    });
}

function renderTags(currentAnimal){

    var tags = '';
    for(var i = 0; i<currentAnimal.tags.length; i++){
        tags = tags +'<div class="tag">'+currentAnimal.tags[i]+'</div>'
    }

    return tags;

}*/
//////////////////////////////////////////////////////////

window.addEventListener('load',init);

function init(){
    // on page load, get data and render
    getData();
}

function getData(){
    $.ajax({
        url: '/api/get',
        type: 'GET',
        failure: function(err){
            console.log ("Could not get the data");
            return alert("Something went wrong");
        },
        success: function(data) {
            console.log(data);
            var projects = data.projects;
            // '<img src="'+currentProject.url+'" />'+
            projects.forEach(function(currentProject){
                var htmlToAppend =
                '<div class="col-md-4 card">'+
                    '<h1>'+currentProject.name+'</h1>'+
                    //'<img src="img/'+currentProject.imgName+'" />'+
                    '<img src="'+currentProject.url+'" />'+
                     //'<h1>'+currentProject.date+'</h1>'+
                    '<div class="tagHolder">'+
                        renderTags(currentProject)+
                    '</div>'+
                    '<div class="control-panel">'+
                        '<a href="/api/delete/'+currentProject._id+'">Delete</a>'+
                        '<br/>'+
                        '<a href="/edit/'+currentProject._id+'">Edit</a>'+
                    '</div>'+
                '</div>'
                $('#pet-holder').append(htmlToAppend);
            })
        }
    });
}

function renderTags(currentProject){

    var tags = '';
    for(var i = 0; i<currentProject.tags.length; i++){
        tags = tags +'<div class="tag">'+currentProject.tags[i]+'</div>'
    }

    return tags;

}

