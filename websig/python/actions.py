import json

def brazil_polygons(db):
    response = db.query('SELECT ST_AsGeoJSON(l.geom), l.nm_municip, l."banco de_5", l.gid  FROM brasil_mun_simplified l')
    geojson = {
        "type": "FeatureCollection",
    	"features": []
    }

    for val in response:
        feature = {
	    		"type": "Feature",
                "id": val[3],
                "geometry": json.loads(val[0]),
	    		"properties": {
                    "nome": val[1],
                    "IVS": val[2]
                    }
	    	    }

        geojson["features"].append(feature)
    
    return geojson

def get_schols(db):
    response = db.query('SELECT latitude, longitude, desc_endereco1, no_entidade FROM brasil_escolas')
    geojson = {
        "type": "FeatureCollection",
    	"features": []
    }

    for val in response:
        feature = {
	    		"type": "Feature",
                "properties": {
                    "nome": val[2],
                    "endereco": val[3]

                },
                "geometry":{
                    'type': 'Point',
                    'coordinates': [float(val[1]), float(val[0])]
                },
	    		
	    	    }

        geojson["features"].append(feature)
    
    return geojson
