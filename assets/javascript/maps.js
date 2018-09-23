import styles from './maps/styles';

function initMap(){

  const coords = { lat: 4.719850, lng: -74.121860 };

  let map = new google.maps.Map(document.getElementById('mapa'), {
    center: coords,
    zoom: 17
  });

  let marker = new google.maps.Marker({
    position: coords,
    map,
    title: 'Gio Diseño'
  });

  //marker.setMap(map);

}

initMap();
