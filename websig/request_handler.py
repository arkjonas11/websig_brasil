from flask import Flask, render_template, jsonify
from websig.python import db
from websig.python.actions import *

app = Flask(__name__)
db = db.DB()

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/get_polygons')
def get_polygons():
    return jsonify(brazil_polygons(db))

@app.route('/get_schols')
def schols():
    return jsonify(get_schols(db))