var searchTerm = "election"
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&begin_date=" + "&api-key=BcSSmJBuamcVCFMps6CvA2G3n1oRGAr2"

//performing a request
$.ajax({
    url: queryURL,
    method: "GET"
})
    .then(function (response) {
        console.log(response)
    })

    //search button needs listener
    $("#search-btn").on("click", function(){
    //number of records limits search results
    for (var i = 0; i < numRecords.length; index++) {
        
    }
    //take search text input and make it the search term
    
    
    //if start year has input, filter search results
    var startYear = $("#exampleFormControlTextarea1").val()
    
    //if end year has input, filter search results 
    var endYear = $("#exampleFormControlTextarea2").val(response)
    //display search results in top articles section
    var articleDiv = $("<div>") 
    $("searchResults").append(articleDiv);

     

})