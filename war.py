from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/result', methods=['POST'])
def result():
    tribes = ["Creative Tribe", "Tech Tribe", "Business Tribe", "Impact Tribe"]
    choice = request.form.get('tribe')

    if choice == "Tech Tribe":
        message = "Congratulations! The Tech Tribe emerges victorious with their superior skills and ingenuity! You WIN the game! 🎉"
    else:
        message = f"Oh no! The {choice} tried their best but couldn't overcome the challenges. Better luck next time!"

    return render_template('result.html', message=message)

if __name__ == '__main__':
    app.run(debug=True)
