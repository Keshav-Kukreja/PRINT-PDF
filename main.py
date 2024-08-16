from flask import Flask, render_template, request, redirect
import os

app = Flask(__name__)

@app.route("/")
def hello_world():
    return render_template("index.html")

@app.route("/preview/<file>")
def preview(file):
    return render_template("test.html",file=file)

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' in request.files:
        file = request.files['file']
        # Use secure_filename to avoid security issues
        filename = file.filename
        # Save the file to a folder of your choice
        file.save('static/' + filename)
        return redirect(f"/preview/{filename}")
    else:
        return 'No file selected'
    
@app.route("/print", methods=['POST', 'GET'])
def print_file():
    file=request.form['file_name']
    pages=request.form['pages']
    os.system(f'PDFtoPrinter.exe static/"{file}" pages={pages}')
    return f"Printing {pages}"

if __name__=="__main__":
    app.run(host="192.168.29.207", port=8090, debug=True)