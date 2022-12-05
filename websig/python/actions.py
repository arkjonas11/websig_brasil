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

def get_state_data(db):
    response = db.query(""" SELECT ST_AsGeoJSON(geom), name, predict_no_re, predict_with_re, predict_with_re, cruderate, adjrate, ogc_fid
                            FROM taxa_ajustada_sexo_idade_ivs 
                                JOIN (
                                    SELECT estado, predict_no_re, predict_with_re, cruderate, adjrate 
                                    FROM states_data) AS tab 
                                ON estado = name""")
    geojson = {
        "type": "FeatureCollection",
    	"features": []
    }

    for val in response:
       feature = {
	   		"type": "Feature",
               "id": val[7],
               "geometry": json.loads(val[0]),
	   		"properties": {
                   "name": val[1],
                   "adjrate": float(val[6].replace(',', '.'))
                   }
	   	    }

       geojson["features"].append(feature)
    
    return geojson

def get_bars(db):
    response = db.query("""SELECT ST_AsGeoJSON(geom), state, id, adjrate, quartile FROM states JOIN (SELECT estado, adjrate, quartile FROM states_data) AS tab ON estado = state""")
    geojson = {
        "type": "FeatureCollection",
    	"features": []
    }

    for val in response:
       feature = {
	   		"type": "Feature",
               "id": val[2],
               "geometry": json.loads(val[0]),
	   		"properties": {
                    "name": val[1],
                    "quartile": val[4],
                    "adjrate": float(val[3].replace(',', '.'))*10000000
                   }
	   	    }

       geojson["features"].append(feature)
    
    return geojson

def get_bars_emo(db):
    response = db.query("""SELECT ST_AsGeoJSON(geom), state, id, adjrate, quartile FROM states JOIN (SELECT estado, adjrate, quartile FROM states_data_emo) AS tab ON estado = state""")
    geojson = {
        "type": "FeatureCollection",
    	"features": []
    }

    for val in response:
       feature = {
	   		"type": "Feature",
               "id": val[2],
               "geometry": json.loads(val[0]),
	   		"properties": {
                    "name": val[1],
                    "quartile": val[4],
                    "adjrate": float(val[3].replace(',', '.'))*10000000
                   }
	   	    }

       geojson["features"].append(feature)
    
    return geojson