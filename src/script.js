window.addEventListener("load", () => {
  document
    .querySelector(".btn-predict")
    .addEventListener("click", pick_Hour_Date);
  document.querySelector(".form").classList.add("transition");
});

function pick_Hour_Date() {
  animateResult();
  let date_hour = document.querySelector(".picker").value;
  let time = date_hour.slice(-5);
  let date = date_hour.slice(0, -6);
  console.log(time);
  console.log(date);
  // sendToPython(time, data);
}

function animateResult() {
  document.querySelector(".form").classList.add("form-result");
  document.querySelector(".date_time_picker").classList.add("form-result");
  document.querySelector(".btn-predict").classList.remove("btn-predict-hover");
  document.querySelector(".btn-predict").classList.add("btn-predict-result");
  document.querySelector(".btn-predict").innerHTML = "";
  var audioElement = new Audio("../assets/music/newYorkSound.mp3");

  audioElement.play();
  document.querySelector(".result").classList.add("show");
  document.querySelector(".taxi").classList.add("drive1");
  setTimeout(() => {
    document.querySelector(".taxi").classList.add("drive2");
  }, "4000");
  setTimeout(() => {
    document.querySelector(".taxi").classList.add("drive3");
    document.querySelector(".number-of-results").classList.remove("hidden");
    createfireworks();
  }, "7000");
  setTimeout(() => {
    document.querySelector(".number-of-results").innerHTML = getRandomNumber();
    document.querySelector(".number-of-results").classList.add("show-text");
    btnBack();
  }, "9000");
}

function createfireworks() {
  // Get a reference to the parent element where the firework divs will be added
  const parentElement = document.querySelector(".result"); // replace with the ID of the parent element in your HTML

  // Create three new div elements with a class of 'firework' and append them to the parent element
  for (let i = 0; i < 3; i++) {
    const fireworkDiv = document.createElement("div");
    fireworkDiv.classList.add("firework");
    parentElement.appendChild(fireworkDiv);
  }
}

function tryAgain() {
  location.reload();
}

function btnBack() {
  const btnBack = document.createElement("div");
  btnBack.className = "btn-back";
  btnBack.innerHTML = "Predict Again!";
  const parentElement = document.querySelector(".result");
  parentElement.appendChild(btnBack);
  document.querySelector(".btn-back").addEventListener("click", tryAgain);
}

function getRandomNumber() {
  return Math.floor(Math.random() * (4500 - 1000 + 1)) + 1000;
}

function sendToPython(time, date) {
  // Use AJAX to send the variables to the server
  $.ajax({
    type: "POST",
    url: "transfer.py",
    data: {
      time: time,
      date: date,
    },
    success: function (response) {
      // handle the response from the server
      console.log(response);
    },
  });
}
