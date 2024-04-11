const buttons = document.querySelectorAll(".a-mBtn");
const sums = document.querySelectorAll(".sum");
const MONTHLY_LIMIT = 40;

// Function to handle annual activation
function handleAnnual() {
  if (parseFloat(sums[0].innerText) < 40) {
    for (let i = 0; i < sums.length; i++) {
      sums[i].innerText = parseFloat(sums[i].innerText * 11).toFixed(2);
    }
  } else {
    return;
  }
}

// Function to handle monthly activation
function handleMonthly() {
  if (sums[0].innerText === "19.99") {
    return;
  } else {
    sums[0].innerText = "19.99";
    sums[1].innerText = "24.99";
    sums[2].innerText = "39.99";
  }
}

//Add eventlistener to both buttons
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (event) => {
    if (event.target.innerText === "Annually") {
      handleAnnual();
    } else {
      handleMonthly();
    }
  });
}
