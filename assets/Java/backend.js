
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
