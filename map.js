function iniciarMap(){
  var coord = {lat:10.9853206 ,lng: -74.821797};
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 13,
    center: coord
  });
 
  var marker = new google.maps.Marker({
    position: {lat: 11.019653, lng: -74.8244577},
    map: map
 });
 var marker = new google.maps.Marker({
  position: {lat: 11.008069, lng: -74.8093947},
  map: map
}); 
var marker = new google.maps.Marker({
  position: {lat: 11.006468, lng: -74.8094057},
  map: map
});
}