const buttons = document.querySelectorAll(".a-mBtn");
const sums = document.querySelectorAll(".sum");
const MONTHLY_LIMIT = 40;

// Function to handle annual activation
function handleAnnual() {
  if (parseFloat(sums[0].innerText) < 40) {
    sums.forEach((sum) => {
      let tmp = sum.innerText * 11;
      sum.innerText = tmp.toFixed(2);
    });
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
// Better to get element by id here - targeting by innerText is unreliable - it's subject to change!
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (event) => {
    if (event.target.innerText === "Annually") {
      handleAnnual();
    } else {
      handleMonthly();
    }
  });
}
