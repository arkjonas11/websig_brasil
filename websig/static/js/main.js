var map,
    dist = ["geom","nome","IVS"],
    geojson,
    geojson2,
    geojson3,
    geojson4,
    geojson5

$(document).ready(initialize);
function initialize(){
    mapboxgl.accessToken = 'pk.eyJ1IjoiYXJram9uYXMxMSIsImEiOiJjbDFiNmt0MTQwMGMzM2NxbzA5N2ppcWg3In0.KA7Wzk3q4ZC1TajqXspPAA';
        map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/arkjonas11/cktt7y3ki02rh17n84rbtxq0r',
        center: [-50.945, -12.826],
        zoom: 3,
        antialias: true,
        tileLayer: {
            // this map option disables world wrapping. by default, it is false.
            continuousWorld: false,
            // this option disables loading tiles outside of the world bounds.
            noWrap: true
        }
    })
    map.addControl(new mapboxgl.ScaleControl({position: 'bottom-right'}));
}

layer1_open = false
function layer_mun(id) {
    if (!geojson) {
        get_data()
        layer1_open = true
        document.getElementById('legend').style.display = 'block'
        document.getElementById(id).style.backgroundColor = '#0f3868'

    }else{
        if (layer1_open == true){
            map.setLayoutProperty(
                'maine',
                'visibility',
                'none'
                )
            map.setLayoutProperty(
                'maine-line',
                'visibility',
                'none'
                )
            layer1_open = false
            document.getElementById('legend').style.display = 'none'
            document.getElementById(id).style.backgroundColor = '#17222b'
            
        }else{
            map.setLayoutProperty(
                'maine',
                'visibility',
                'visible'
                )
            map.setLayoutProperty(
                'maine-line',
                'visibility',
                'visible'
                )
            layer1_open = true
            document.getElementById('legend').style.display = 'block'
            document.getElementById(id).style.backgroundColor = '#0f3868'
        }
    }
}

layer2_open = false
function layer_states(id) {
    if (!geojson3) {
        get_state_data()
        layer2_open = true
        document.getElementById(id).style.backgroundColor = '#0f3868'

    }else{
        if (layer2_open == true){
            map.setLayoutProperty(
                'states_data',
                'visibility',
                'none'
                )
            map.setLayoutProperty(
                'states_data-line',
                'visibility',
                'none'
                )
            layer2_open = false
            document.getElementById(id).style.backgroundColor = '#17222b'
        }else{
            map.setLayoutProperty(
                'states_data',
                'visibility',
                'visible'
                )
            map.setLayoutProperty(
                'states_data-line',
                'visibility',
                'visible'
                )
            layer2_open = true
            document.getElementById(id).style.backgroundColor = '#0f3868'
        }
    }
}

layer3_open = false
function layer_schools(id) {
    if (!geojson2) {
        get_data_schols()
        layer3_open = true
        document.getElementsByClassName('schools')[0].style.display = 'block'
        document.getElementById(id).style.backgroundColor = '#0f3868'

    }else{
        if (layer3_open == true){
            map.setLayoutProperty(
                'points',
                'visibility',
                'none'
                )
           
            layer3_open = false
            document.getElementsByClassName('schools')[0].style.display = 'none'
            document.getElementById(id).style.backgroundColor = '#17222b'
        }else{
            map.setLayoutProperty(
                'points',
                'visibility',
                'visible'
                )
            layer3_open = true
            document.getElementsByClassName('schools')[0].style.display = 'block'
            document.getElementById(id).style.backgroundColor = '#0f3868'
        }
    }
}

layer4_open = false
function layer_bars(id) {
    if (!geojson4) {
        get_bar_data()
        layer4_open = true
        document.getElementById(id).style.backgroundColor = '#0f3868'

    }else{
        if (layer4_open == true){
            map.setLayoutProperty(
                'bar_data',
                'visibility',
                'none'
                )
            map.setLayoutProperty(
                'bar_extrusion',
                'visibility',
                'none'
                )
           
            layer4_open = false
            document.getElementById(id).style.backgroundColor = '#17222b'
        }else{
            map.setLayoutProperty(
                'bar_data',
                'visibility',
                'visible'
                )
            map.setLayoutProperty(
                'bar_extrusion',
                'visibility',
                'visible'
                )
            layer4_open = true
            document.getElementById(id).style.backgroundColor = '#0f3868'
        }
    }
}

layer5_open = false
function layer_emo_bars(id) {
    if (!geojson5) {
        get_bar_data_emo()
        layer5_open = true
        document.getElementById(id).style.backgroundColor = '#0f3868'

    }else{
        if (layer5_open == true){
            map.setLayoutProperty(
                'bar_data_emo',
                'visibility',
                'none'
                )
            map.setLayoutProperty(
                'bar_extrusion_emo',
                'visibility',
                'none'
                )
           
            layer5_open = false
            document.getElementById(id).style.backgroundColor = '#17222b'
        }else{
            map.setLayoutProperty(
                'bar_data_emo',
                'visibility',
                'visible'
                )
            map.setLayoutProperty(
                'bar_extrusion_emo',
                'visibility',
                'visible'
                )
            layer5_open = true
            document.getElementById(id).style.backgroundColor = '#0f3868'
        }
    }
}

function get_data() {
    document.getElementById('loading').style.display = 'inline-block'
    fetch('get_polygons')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
        console.log(data)
        document.getElementById('loading').style.display = 'none'
        geojson = data
        display()
    })
}

function get_data_schols() {
    document.getElementById('loading').style.display = 'inline-block'
    fetch('get_schols')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
        document.getElementById('loading').style.display = 'none'
        geojson2 = data
        display_schols()
    })
}

function get_state_data() {
    document.getElementById('loading').style.display = 'inline-block'
    fetch('get_adjrate')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
        document.getElementById('loading').style.display = 'none'
        console.log(data)
        geojson3 = data
        display_states_data()
    })
}

function get_bar_data() {
    document.getElementById('loading').style.display = 'inline-block'
    fetch('get_bars')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
        document.getElementById('loading').style.display = 'none'
        console.log(data)
        geojson4 = data
        display_bar_data()
    })
}

function get_bar_data_emo() {
    document.getElementById('loading').style.display = 'inline-block'
    fetch('get_bars_emo')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
        document.getElementById('loading').style.display = 'none'
        console.log(data)
        geojson5 = data
        display_bar_data_emo()
    })
}

function getColor(d) {
    return  d > 0.6 ? '#000080' :
            d > 0.5 ? '#6fdc6f' :
            d > 0.4 ? '#6fdc6f' :
            d > 0.3 ? '#6fdc6f' :
            d > 0.2 ? '#6fdc6f' :
            d > 0.1 ? '#6fdc6f' :
            d > 0   ? '#6fdc6f' :
                       '#FFEDA0';
}

function display() {
    let hoveredStateId = null;
    map.addSource('maine', {
        'type': 'geojson',
        'data': geojson

    })

    map.addLayer({
        'id': 'maine',
        'source': 'maine',
        'type': 'fill',
        'layout': {
            'visibility': 'visible'
        },
        'paint': {
            'fill-color': [
                'interpolate',
                ['linear'],
                ["to-number", ["get", "IVS"]],
                0,
                '#e4d262',
                0.300,
                '#e4d262',
                0.301,
                '#DA9C20',
                0.400,
                '#DA9C20',
                0.401,
                '#B86B25',
                1,
                '#B86B25'
                ],
                'fill-opacity': [
                    'case',
                    ['boolean', ['feature-state', 'hover'], false],
                    0.5,
                    1
                    ]

        }
    })
    map.addControl(new mapboxgl.NavigationControl());

    const vals = [
        'Very low/low',
        'Medium',
        'High/Very high'
    ]

    const layers = [
        '0-0.300',
        '0.301-0.400 ',
        '0.401-1'
      ]

      const colors = [
        '#EED322',
        '#DA9C20',
        '#B86B25',
        '#8B4225',
        '#723122'
      ]

    layers.forEach((layer, i) => {
        const color = colors[i];
        const item = document.createElement('div');
        const key = document.createElement('span');
        const vals_tag = document.createElement('span');
        key.className = 'legend-key';
        key.style.backgroundColor = color;

            const value = document.createElement('span');
        value.innerHTML = `${layer}`;
        vals_tag.innerHTML = vals[i] + '<br>'
        item.appendChild(vals_tag)
        item.appendChild(key);
        item.appendChild(value);
        legend.appendChild(item);
      })

    map.addLayer({
        'id': 'maine-line',
        'source': 'maine',
        'type': 'line',
        'layout': {
            'visibility': 'visible'
        },
        'paint': {
            'line-color':'#485465',
            'line-width': 1
        }
    })

    map.on('mousemove', 'maine', (e) => {
        if (e.features.length > 0) {
            if (hoveredStateId !== null) {
                map.setFeatureState(
                    { source: 'maine', id: hoveredStateId },
                    { hover: false }
                );
            }
            hoveredStateId = e.features[0].id;
            map.setFeatureState(
                { source: 'maine', id: hoveredStateId },
                { hover: true }
            );
        }
    })

    map.on('mouseleave', 'maine', () => {
        if (hoveredStateId !== null) {
            map.setFeatureState(
                { source: 'maine', id: hoveredStateId },
                { hover: false }
            );
        }
        hoveredStateId = null;
    })

    map.on('click', 'maine', (e) => {
        new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML('<h2>' + e.features[0].properties.nome + '</h2><br><h3></h3>IVS<br><h3>' + e.features[0].properties.IVS + '</h3>')
        .addTo(map);
    })
}

function display_schols() {
    map.addSource('points', {
        'type': 'geojson',
        'data': geojson2
    })

    map.addLayer({
        'id': 'points',
        'type': 'circle',
        'source': 'points',
        'paint': {
            'circle-radius': 3.2,
            'circle-color': '#26e300'
            },
        'layout': {
        }
        })
    map.on('click', 'points', (e) => {
        new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML('<h2>' + e.features[0].properties.nome + '</h2><br><h3>' + e.features[0].properties.endereco + '</h3>')
        .addTo(map);
    })
}

function display_states_data() {
    let hoveredStateId = null;

    map.addSource('states_data', {
        'type': 'geojson',
        'data': geojson3
    })

    map.addLayer({
        'id': 'states_data',
        'source': 'states_data',
        'type': 'fill',
        'layout': {
            'visibility': 'visible'
        },
        'paint': {
            'fill-color': [
                'interpolate',
                ['linear'],
                ["to-number", ["get", "adjrate"]],
                0,
                '#0dc26a',
                0.10,
                '#EED322',
                0.12,
                '#E6B71E',
                0.14,
                '#DA9C20',
                0.16,
                '#CA8323',
                0.18,
                '#B86B25',
                0.20,
                '#A25626',
                0.22,
                '#8B4225',
                0.24,
                '#723122',
                0.26,
                '#723122',
                0.30,
                '#723122'
            ],
            'fill-opacity': [
                'case',
                ['boolean', ['feature-state', 'hover'], false],
                0,
                0
            ]

        }
    })

    map.addLayer({
        'id': 'states_data-line',
        'source': 'states_data',
        'type': 'line',
        'layout': {
            'visibility': 'visible'
        },
        'paint': {
            'line-color':'#0a1014',
            'line-width': 2
        }
    })

    map.on('mousemove', 'states_data', (e) => {
        if (e.features.length > 0) {
            if (hoveredStateId !== null) {
                map.setFeatureState(
                    { source: 'states_data', id: hoveredStateId },
                    { hover: false }
                );
            }
            hoveredStateId = e.features[0].id;
            map.setFeatureState(
                { source: 'states_data', id: hoveredStateId },
                { hover: true }
            );
        }
    })

    map.on('mouseleave', 'states_data', () => {
        if (hoveredStateId !== null) {
            map.setFeatureState(
                { source: 'states_data', id: hoveredStateId },
                { hover: false }
            );
        }
        hoveredStateId = null;
    })

    map.on('click', 'states_data', (e) => {
        new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML('<h2>' + e.features[0].properties.name + '</h2><br><h3></h3>Adjrate<br><h3>' + e.features[0].properties.adjrate + '</h3>')
        .addTo(map);
    })
}

function display_bar_data() {
    let hoveredStateId = null;

    map.addSource('bar_data', {
        'type': 'geojson',
        'data': geojson4
    })

    map.addLayer({
        'id': 'bar_data',
        'source': 'bar_data',
        'type': 'fill',
        'layout': {
            'visibility': 'visible'
        },
        'paint': {
            'fill-color': '#B86B25',
            'fill-opacity': [
                    'case',
                    ['boolean', ['feature-state', 'hover'], false],
                    0.5,
                    1
                    ]
        }
    })
    map.addLayer({
        'id': 'bar_extrusion',
        'type': 'fill-extrusion',
        'source': 'bar_data',
        'paint': {
        'fill-extrusion-color': '#B86B25',

        'fill-extrusion-height': ['get', 'adjrate'],

        'fill-extrusion-base': 0,

        'fill-extrusion-opacity': 1
        }
        })

    map.on('click', 'bar_extrusion', (e) => {
        new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML('<p>' + e.features[0].properties.quartile + '<br>' + e.features[0].properties.name + '</p>')
        .addTo(map);
    })
}


function display_bar_data_emo() {
    let hoveredStateId = null;

    map.addSource('bar_data_emo', {
        'type': 'geojson',
        'data': geojson5
    })

    map.addLayer({
        'id': 'bar_data_emo',
        'source': 'bar_data_emo',
        'type': 'fill',
        'layout': {
            'visibility': 'visible'
        },
        'paint': {
            'fill-color': '#8800ff',
            'fill-opacity': [
                    'case',
                    ['boolean', ['feature-state', 'hover'], false],
                    0.5,
                    1
                    ]
        }
    })

    map.addLayer({
        'id': 'bar_extrusion_emo',
        'type': 'fill-extrusion',
        'source': 'bar_data_emo',
        'paint': {
        'fill-extrusion-color': '#2f64d6',

        'fill-extrusion-height': ['get', 'adjrate'],

        'fill-extrusion-base': 0,

        'fill-extrusion-opacity': 1
        }
        })

    map.on('click', 'bar_extrusion_emo', (e) => {
        new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML('<p>' + e.features[0].properties.quartile + '<br>' + e.features[0].properties.name + '</p>')
        .addTo(map);
    })
}

function open_about_box() {
    if (document.getElementById("about_box").style.display == 'block') {
        document.getElementById("about_box").style.display = 'none'
    } else {
        document.getElementById("about_box").style.display = 'block'
    }
}