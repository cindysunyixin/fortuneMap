import os
from flask import Flask, request, send_from_directory, url_for, render_template
# import model, helper

app = Flask(__name__, static_folder='static', static_url_path='')

@app.route('/')
def index():
	page = {
		'title':'Fincover',
		# 'nav_title': 'Welcome!',
		# 'prev_page': 'index.html'
	}
	return render_template('index.html', page=page)

# @app.route('/discover')
# def discover():
# 	page = {
# 		'title':'Discover',
# 		'nav_title': 'Discover',
# 		'prev_page': '/'
# 	}

# 	latitude = request.args.get('latitude')
# 	longitude = request.args.get('longitude')

# 	data = {}
# 	if (latitude is not None and longitude is not None):
# 		latitude = float(latitude)
# 		longitude = float(longitude)
# 		data = {
# 			'latitude': latitude,
# 			'longitude': longitude
# 		}
# 		score_json = model.get_score(latitude, longitude)
# 		data['score_json'] = score_json

# 	return render_template('discover.html', data=data, page=page)

# @app.route('/center-transactions')
# def center_transactions():
#     page = {
#         'title':'Center Transactions',
#         'nav_title': 'New Transaction',
#         'prev_page': '/'
#     }
#     return render_template('center-transactions.html', page=page)

# @app.route('/center-home', methods=['GET', 'POST'])
# def center_home():
#     page = {
#         'title':'Center Home',
#         'nav_title': 'Home',
#         'prev_page': '/'
#     }
#     return render_template('center-home.html', page=page)

# @app.route('/center-login', methods=['GET', 'POST'])
# def center_login():
# 	page = {
# 		'title':'Center Log In',
# 		'nav_title': 'Log In',
# 		'prev_page': '/'
# 	}
# 	if request.method == 'POST':
# 		data = {
# 			'username': request.form['username'],
# 			'password': request.form['password'],
# 		}
# 		return render_template('center-login.html', page=page, is_post = True, data = data)
# 	else:
# 		return render_template('center-login.html', page=page, is_post = False)

# @app.route('/nessie-demo')
# def nessie_demo():
#     return render_template('nessie-demo.html')

# @app.route('/picker-select')
# def picker_select():
# 	page = {
# 		'title':'sCANvenger',
# 		# 'nav_title': 'Log In',
# 		'prev_page': '/',
# 	}
# 	return render_template('picker-select.html', page = page)

# @app.route('/picker-home', methods=['GET', 'POST'])
# def picker_home():
# 	page = {
# 		'title': 'Picker Home',
# 		'nav_title': 'My Savings',
# 		'prev_page': '/'
# 	}
# 	data = {}
# 	if request.method == 'POST':
# 		data['id'] = request.form['id']
# 	return render_template('picker-home.html', page=page, data=data)

# @app.route('/picker-login', methods=['GET', 'POST'])
# def picker_login():
# 	page = {
# 		'title':'Picker Log In',
# 		'nav_title': 'Log In',
# 		'prev_page': '/'
# 	}
# 	if request.method == 'POST':
# 		data = {
# 			'username': request.form['username'],
# 			'password': request.form['password'],
# 		}
# 		return render_template('picker-login.html', page=page, is_post = True, data = data)
# 	else:
# 		return render_template('picker-login.html', page=page, is_post = False)

# @app.route('/picker-signup', methods=['GET', 'POST'])
# def picker_signup():
# 	page = {
# 		'title':'Sign Up',
# 		'nav_title': 'Sign Up',
# 		'prev_page': '/picker-login',
# 	}
# 	if request.method == 'POST':
# 		return render_template('picker-signup.html', is_post = True, page=page, data=request.form)
# 	else:
# 		return render_template('picker-signup.html', is_post = False, page=page)


# # @app.route('/api/get_score')
# # def get_score():
# # 	latitude = request.args.get('latitude')
# # 	longitude = request.args.get('longitude')
# # 	return helper.get_static("mock/local_score.json")

# @app.route('/api/get_score')
# def get_score():
# 	latitude = float(request.args.get('latitude'))
# 	longitude = float(request.args.get('longitude'))
# 	return model.get_score(latitude, longitude)


if __name__ == '__main__':
    app.run(debug=True)