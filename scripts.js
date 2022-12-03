let display = document.getElementById("rated");
let btn = document.querySelector("button");
let rateState = document.querySelector(".rating");
let thankyouState = document.querySelector(".thank-you");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let rating = document.querySelector("input:checked");
  if (rating.value) {
    rateState.style.display = "none";
    display.textContent = `You selected ${rating.value} out of 5`;
    thankyouState.style.display = "block";
  }
});
