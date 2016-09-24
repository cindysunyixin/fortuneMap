function initMap(div) {
    map = new google.maps.Map(document.getElementById(div), {
        center: { // United States
            lat: 37.09024,
            lng: -95.712891
        },
        zoom: 8
    });
}