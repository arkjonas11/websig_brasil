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

@app.route('/get_adjrate')
def adjrate():
    return jsonify(get_state_data(db))

@app.route('/get_bars')
def bars():
    return jsonify(get_bars(db))

@app.route('/get_bars_emo')
def bars_emo():
    return jsonify(get_bars_emo(db))
    