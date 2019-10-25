$(document).ready(function () {

    console.log('running')

    $("#submit-btn").click(function(event){
        event.preventDefault();
        
    });
    $("#clear-btn").click(function(event){
        event.preventDefault();
        
    });
    $("#example-search").click(function(event){
        event.preventDefault();
    });
    $("#exampleFormControlSelect").click(function(event){
        event.preventDefault();
    });
    $("#exampleStartYear").click(function(event){
        event.preventDefault();
    });
    $("exampleEndYear").click(function(event){
        event.preventDefault();
    })



    const nytSearch = "https://api.nytimes.com/svc/search/v2/articlesearch.json&api-key=xiiaiW9gywlqQiH0sWvyQIklMTWxCBVP?q=" + searchTerm;
    const searchTerm = "Trump";

    $.ajax({
        url: nytSearch,
        method: "Get"
    }).then(function (response) {
        console.log(response);
    });
});