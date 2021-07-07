function initMap() {

    
    var airportway = {
      info:
        '<strong>Coimbatore International Airport</strong><br>\
          Ramanathapuram Coimbatore-641045<br>\
          <a href="https://goo.gl/maps/aqg1RHP3692kKndn6">Get Directions</a>',
      lat: 11.023520,
      long: 77.034401,
    }

    var railwaystationway = {
        info:
          '<strong>Railway Station, Coimbatore</strong><br>\
            Ghandipuram Coimbatore-641045<br>\
            <a href="https://goo.gl/maps/1Cpd7nCh9kvq8F4z7">Get Directions</a>',
        lat: 11.011810,
        long: 77.038260,
      }

    //   var nationalhighway = {
    //     info:
    //       '<strong> Chennai</strong><br>\
    //         Jammu and Kashmir<br>\
    //         <a href="https://goo.gl/maps/kxeymrNKRLrvBD6t6">Get Directions</a>',
    //     lat: 33.778175,
    //     long: 76.576172,
    //   }

  
    var locations = [
        [airportway.info, airportway.lat, airportway.long, 0],
        [railwaystationway.info, railwaystationway.lat, railwaystationway.long, 1]
        // [nationalhighway.info, nationalhighway.lat, nationalhighway.long, 2]
      ]

      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: new google.maps.LatLng(11.023520, 77.034401),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        
      })
   
      var infowindow = new google.maps.InfoWindow({})

  var marker, i

  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map,
    })
 
    
    google.maps.event.addListener(
        marker,
        'click',
        (function (marker, i) {
          return function () {
            infowindow.setContent(locations[i][0])
            infowindow.open(map, marker)
          }
        })(marker, i)
      )
    }


}