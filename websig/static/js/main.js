var map,
    dist = ["geom","nome","IVS"],
    geojson,
    geojson2

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

function get_data() {
    document.getElementById('loading').style.display = 'inline-block'
    fetch('get_polygons')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
        document.getElementById('loading').style.display = 'none'
        console.log(data)
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
        console.log(data)
        geojson2 = data
        display_schols()
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
}