const annual = document.getElementById("annual");
const monthly = document.getElementById("monthly");
const sums = document.querySelectorAll(".sum");
let annualBool = false;
let monthlyBool = true;

// Create an array from the sums
const sumsArr = Array.from(sums);
console.log(sumsArr);

// Create function for handleAnnual
function handleAnnual(sumsArr) {
  if ((annualBool = true)) {
    sumsArr.forEach((sum) => {
      let tmp = parseFloat(sum.innerText);
      if (tmp < 40) {
        tmp *= 11;
        console.log(tmp);
        sum.innerText = parseFloat(tmp.toFixed(2));
      } else {
        return;
      }
    });
  } else {
    return;
  }
}

// Function to handle monthly clicks
function handleMonthly(sumsArr) {
  if ((monthlyBool = true)) {
    sumsArr[0].innerText = "19.99";
    sumsArr[1].innerText = "24.99";
    sumsArr[2].innerText = "39.99";
  } else {
    return;
  }
}

// Click event listener for annual
annual.addEventListener("click", function () {
  annualBool = true;
  monthlyBool = false;
  handleAnnual(sumsArr);
});

//Click event listener for monthly
monthly.addEventListener("click", function () {
  annualBool = false;
  monthlyBool = true;
  handleMonthly(sumsArr);
});

