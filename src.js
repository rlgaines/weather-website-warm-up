var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://jsonip.com/",
  "method": "GET",

}

$.ajax(settings).done(function (response) {
  console.log(response);
  var ipName = response;
  $('#ip').append(ipName.ip)

});

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://freegeoip.net/json/128.177.172.220",
  "method": "GET",

}

$.ajax(settings).done(function (response) {
  console.log(response);
   var newRes = response
   $('#long').append(newRes.longitude);
   $('#lat').append(newRes.latitude);
});

window.jsonFlickrFeed = function(data){
  console.log(data);
      var random = Math.floor(Math.random()*20)
      var image = data.items[random].media.m
      image = image.replace("_m", "_b")
  $('body').css("background-image", "url(" + image + ")")

}

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://www.flickr.com/services/feeds/photos_public.gne?tags=mountains&format=json",
  "method": "GET",
  "dataType": "jsonp"

}

$.ajax(settings)
