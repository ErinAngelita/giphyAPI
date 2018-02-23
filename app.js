$(document).ready(function() {
  $("#subButton").click(function() {
    var myUrl = "https://api.giphy.com/v1/gifs/search?api_key=CMf1bu6PhBXxK8L6cOQtcXNphDBgONnI&q=" + $('#inputText').val() + "&limit=25&offset=0&rating=G&lang=en";
    $.ajax({
      method: "GET",
      url: myUrl
    }).done(function (results) {
      for (var i = 0; i < 25; i++){
        $("#pics").append("<img src=" + results.data[i].images.downsized_medium.url + "></img>");
      }
    });
  });
});
