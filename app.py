from flask import Flask, render_template, url_for

app = Flask(__name__)

# Route for Login Page
@app.route('/')
def login():
    return render_template('loginpage.html')

# Route for Welcome Page
@app.route('/welcome')
def welcome():
    return render_template('welcomepage.html')

# Route for subject Page
@app.route('/subject')
def subject():
    return render_template('subjectspage.html')

if __name__ == "__main__":
    app.run(debug=True)
