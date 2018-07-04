
function myMap() {
  var myLatLng = {lat: 51.332732, lng: 12.384632};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Addis Café'
  });
}
