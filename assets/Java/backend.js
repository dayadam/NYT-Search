<<<<<<< HEAD
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
=======

const headline = "Trump";
const beginYear = "";
const endYear = "";
//const userInput = $(".form-control");
let records = 5;
const searchTerm = {
    q: headline,
}
if(endYear){
    searchTerm.end_date = endYear;
}
if(beginYear){
    searchTerm.begin_date = beginYear;
}
const paramString = $.param(searchTerm);
const nytSearch = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=xiiaiW9gywlqQiH0sWvyQIklMTWxCBVP&q="+searchTerm;

$.ajax({
    url: nytSearch,
    method: "Get"
}).then(function(response){
    console.log(response.response.docs);
    for (i=0;i<records;i++){
        console.log(response.docs[i].headline.main);
    }

});
>>>>>>> 53e4d2445864bc3095d3e72c48ef240207dcdcb1
