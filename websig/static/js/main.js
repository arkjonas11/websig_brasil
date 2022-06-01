var map,
    dist = ["geom","nome","IVS"],
    geojson,
    geojson2,
    geojson3

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

    
}

layer1_open = false
function layer_mun() {
    if (!geojson) {
        get_data()
        layer1_open = true
        document.getElementById('legend').style.display = 'block'
    
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
        }
    }
}

layer2_open = false
function layer_states() {
    if (!geojson3) {
        get_state_data()
        layer2_open = true
    
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

    //map.addLayer({
    //    'id': 'maine',
    //    'source': 'maine',
    //    'type': 'fill-extrusion',
    //    'layout': {},
    //    'paint': {
    //        'fill-extrusion-color': '#6fdc6f',
    //        'fill-extrusion-height': 1000000,
    //        'fill-extrusion-base': 0,
    //        'fill-extrusion-opacity': 1
    //            
    //    }
    //});

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
                '#0dc26a',
                0.1,
                '#EED322',
                0.2,
                '#E6B71E',
                0.3,
                '#DA9C20',
                0.4,
                '#CA8323',
                0.5,
                '#B86B25',
                0.6,
                '#A25626',
                0.7,
                '#8B4225',
                0.8,
                '#723122',
                0.9,
                '#723122',
                1,
                '#723122'
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

    const layers = [
        '0-0.1',
        '0.1-0.2',
        '0.2-0.3',
        '0.3-0.4',
        '0.4-0.5',
        '0.5-0.6',
        '0.6-0.7',
        '0.7-0.8',
        '0.8-0.9',
        '0.9-1',
      ]

      const colors = [
        '#0dc26a',    
        '#EED322',           
        '#E6B71E',               
        '#DA9C20',
        '#CA8323',              
        '#B86B25',              
        '#A25626',              
        '#8B4225',              
        '#723122',                
        '#723122',       
      ]

    layers.forEach((layer, i) => {
        const color = colors[i];
        const item = document.createElement('div');
        const key = document.createElement('span');
        key.className = 'legend-key';
        key.style.backgroundColor = color;
      
        const value = document.createElement('span');
        value.innerHTML = `${layer}`;
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
            'line-color':'#0dc26a',
            'line-width': 0.5
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
            'circle-radius': 4,
            'circle-color': '#36c513'
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
        // Get the `fill-extrusion-color` from the source `color` property.
        'fill-extrusion-color': '#B86B25',
        
        // Get `fill-extrusion-height` from the source `height` property.
        'fill-extrusion-height': ['get', 'adjrate'],
        
        // Get `fill-extrusion-base` from the source `base_height` property.
        'fill-extrusion-base': 0,
        
        // Make extrusions slightly opaque to see through indoor walls.
        'fill-extrusion-opacity': 1
        }
        });
        
    
}