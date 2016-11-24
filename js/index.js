$(document).ready(function() {
  // appends domain name to the value of link I got from Wikipedia

  $("#discography section ul i").children().addClass("wiki");
  $(".wiki").attr("target", "_blank");
  $(".wiki").attr("href", function() {
    return "https://en.wikipedia.org" + $(this).attr("href");;
  });

  // appends domain name to the value of link i got from IMBd.
  $("#text p").children("a").addClass("imbd"); //because of <br/> don't use .children()

  $(".imbd").attr("target", "_blank");

  //console.log( $("#text p").children("a").addClass("imbd") );
  $(".imbd").attr("href", function() {
    var imbdAfter = $(this).attr("href");
    return "http://www.imdb.com" + imbdAfter;

  });

});