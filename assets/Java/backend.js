const nytSearch = "https://api.nytimes.com/svc/search/v2/articlesearch.json&api-key=xiiaiW9gywlqQiH0sWvyQIklMTWxCBVP?q="+searchTerm;
const searchTerm = "Trump";

$.ajax({
    url: nytSearch,
    method: "Get"
}).then(function(response){
    console.log(response);
});
