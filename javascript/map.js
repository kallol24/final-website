// JavaScript Document

      function initMap() {
        var uluru = {lat: 26.1181546, lng: 91.7948511};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
