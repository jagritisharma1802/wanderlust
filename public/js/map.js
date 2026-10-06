mapboxgl.accessToken = mapToken;

const coords = JSON.parse(coordinates);

const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: coords,
    zoom: 9,
});

const marker = new mapboxgl.Marker({color: "red"})
    .setLngLat(coords)
    .setPopup(new mapboxgl.Popup({offset: 25}).setHTML(
        `<h4>Location</h4><p>Exact location will be provided after booking!.</p>`
    ))
    .addTo(map);