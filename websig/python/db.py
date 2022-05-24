import psycopg2
from websig.configs.configs import DB_CONF

class DB:
    def __init__(self):
        self.host = DB_CONF['HOST']
        self.port = DB_CONF['PORT']
        self.user = DB_CONF['USER']
        self.password = DB_CONF['PASS']
        self.dbname = DB_CONF['DB_NAME']

        self.connect()

    def connect(self):
        try:
            self.conn = psycopg2.connect(host=self.host, port=self.port, user=self.user, password=self.password, dbname=self.dbname)
            print('Connected to database')

        except Exception as error:
            print('Error connecting to database', error)
        
    def query(self, query):
        try:
            cur = self.conn.cursor()
            cur.execute(query)
            response = cur.fetchall()
            cur.close()
            
            return response

        except Exception as error:
            print('Error connecting to database', error)
            cur.close() 

        
