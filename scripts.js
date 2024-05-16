mapboxgl.accessToken = 'pk.eyJ1IjoibWlyaWhhem91IiwiYSI6ImNsdzcybWYzMDF6czIyamxyZDk5c2EyeXUifQ.LY6eudk3jxJnIseu8FkQ1w';
const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v11',
        projection: 'globe', // Display the map as a globe, since satellite-v9 defaults to Mercator
        zoom: 12,
        center: [-73.98937, 40.75293]
});

map.addControl(new mapboxgl.NavigationControl());
map.scrollZoom.disable();

map.on('style.load', () => {
        map.setFog({}); // Set the default atmosphere style
});

const chelseahot = new mapboxgl.Popup({ offset: 15 })
        .setHTML(
        '<h1>The Chelsea Hotel</h1> <h3>"This aint the Chelsea Hotel, were modern idiots" - The Tortured Poets Department  </h3> <p> In this lyric, Taylor Swift pokes fun at the idea of being a tortured poet using the Chelsea Hotel, known for its artistic and bohemian history. She humorously acknowledges that despite being an iconic location for writers, they are just clueless "idiots" of modern time and not actually tortured poets.</p>'
);
const Chelseahotel = new mapboxgl.Marker({
        color: '#9D9782' 
})
        .setLngLat([-73.99685, 40.74450])
        .setPopup(chelseahot)
        .addTo(map);

const thesummit = new mapboxgl.Popup({ offset: 25 })
        .setHTML(
                '<h1>The Summit</h1> <h3>"Karma takes all my friends to the Summit" - Karma </h3> <p> In this lyric, Taylor Swift suggests that her good karma leads not only her but also her friends to success and accomplishment, adding to communal retribution, using the Summit in NY elevated location as a grand reach. </p>'
        );
const Summit = new mapboxgl.Marker({
        color: '#202B57'
})
        .setLngLat([-73.97876, 40.75277])
        .setPopup(thesummit)
        .addTo(map);

const cornelia = new mapboxgl.Popup({ offset: 25 })
        .setHTML(
                '<h1>Cornelia Street</h1> <h3>"Ill never walk Cornelia St. again" - Cornelia Street </h3> <p> In this lyric, Taylor Swift expresses the pain of losing someone in her life by saying she cannot bear to revisit places that hold memories of the relationship, such as Cornelia Street, where she is known to have lived in.</p>'
        );
const Corneliastreet = new mapboxgl.Marker({
        color: '#ECA6CD'
})
        .setLngLat([-74.00205, 40.73153])
        .setPopup(cornelia)
        .addTo(map);

const madison = new mapboxgl.Popup({ offset: 25 })
        .setHTML(
                '<h1>Madison Square Garden</h1> <h3>"Chose the Rose Garden over Madison Square"- The Lucky One </h3> <p>  In this lyric, Taylor Swift describes the choosing of a quieter, more peaceful path over a bustling, high-profile lifestyle, possibly referencing a decision to prioritize personal happiness over public recognition.</p>'
        );
const Madisonsq = new mapboxgl.Marker({
        color: '#980808'
})
        .setLngLat([-73.99371, 40.75075])
        .setPopup(madison)
        .addTo(map);

const loversbar = new mapboxgl.Popup({ offset: 25 })
        .setHTML(
                '<h1>Lovers of Today Bar</h1> <h3>"Dive bar on the East side, where you at?" - Delicate </h3> <p> In this lyric, Taylor Swift reminisces about a simpler time, perhaps longing for a spontaneous and carefree rendezvous at the "Lovers of Today" dive bar on the East side.</p>'
        );
const Eastsidebar = new mapboxgl.Marker({
        color: '#060606'

})
        .setLngLat([-73.98328, 40.72576])
        .setPopup(loversbar)
        .addTo(map);

const highline = new mapboxgl.Popup({ offset: 25 })
        .setHTML(
                '<h1>The High Line</h1> <h3>" I knew you, your heartbeat on the High Line" - Cardigan </h3> <p> In this lyric, Taylor Swift reminisces about a past relationship, recalling intimate moments spent together perhaps walking on the High Line in New York City.</p>'
        );
const thehighline = new mapboxgl.Marker({
        color: '#757575'
})
        .setLngLat([-74.00488, 40.74771])
        .setPopup(highline)
        .addTo(map);

const busstop = new mapboxgl.Popup({ offset: 25 })
        .setHTML(
                '<h1>Bus Stop Cafe</h1> <h3>"I thought I saw you at the Bus Stop, I didnt though" - The 1 </h3> <p> In this lyric, Taylor Swift reflects on a moment where she thought she saw her former lover at the Bus Stop Cafe, then realized it was not them.</p>'
        );
const Busstopcafe = new mapboxgl.Marker({
        color: '#757575'
})
        .setLngLat([-74.00571, 40.73700])
        .setPopup(busstop)
        .addTo(map);

const parklake = new mapboxgl.Popup({ offset: 25 })
        .setHTML(
                '<h1>Central Park Lake</h1> <h3>"When its all roses, portrait poses, Central Park Lake in tiny rowboats" - The Bolter </h3> <p> Taylor Swift describes idyllic moments of romance, symbolized by images of roses, portrait poses, and rowing in tiny boats on Central Park Lake, capturing a picturesque scene of love and tranquility.</p>'
        );
const Centralparklake = new mapboxgl.Marker({
        color: '#9D9782'
})
        .setLngLat([-73.96287, 40.78468])
        .setPopup(parklake)
        .addTo(map);

const housingworks = new mapboxgl.Popup({ offset: 25 })
        .setHTML(
                '<h1>Housing Works Book Store</h1> <h3>All Too Well (10 minute version)</h3> <p> While Taylor doesnt mention this location in a lyric, her music video for this song was filmed here.</p>'
        );
const housingworksbookstore = new mapboxgl.Marker({
        color: '#DFC57B'
})
        .setLngLat([-73.99664, 40.72467])
        .setPopup(housingworks)
        .addTo(map);

const electriclady = new mapboxgl.Popup({ offset: 25 })
        .setHTML(
                '<h1>Electric Lady Studios</h1> <h3>Recording Studio </h3> <p> While Taylor doesnt mention this location in a lyric, she has recorded most of her music here. </p>'
        );
const electricladystudios = new mapboxgl.Marker({
        color: '#DFC57B'
})
        .setLngLat([-73.99886, 40.73318])
        .setPopup(electriclady)
        .addTo(map);