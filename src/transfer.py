from flask import Flask, request
from datetime import datetime

app = Flask(__name__)

@app.route('/transfer.py', methods=['POST'])
def transfer():
  # Get the values of the time and date variables from the POST request
  time = request.form['time']
  date = request.form['date']

  # Convert the time and date strings to a datetime object
  datetime_str = f"{date} {time}"
  datetime_obj = datetime.strptime(datetime_str, '%Y-%m-%d %H:%M:%S')

  # Do something with the datetime object here
  print(datetime_obj)

  return "Success!"

if __name__ == '__main__':
  app.run()
