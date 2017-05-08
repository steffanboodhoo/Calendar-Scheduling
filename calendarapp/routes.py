from calendarapp import app
from flask import request, make_response

@app.route('/')
@app.route('/main', methods=['GET'])
def main():
	return app.send_static_file('main/index.html')
