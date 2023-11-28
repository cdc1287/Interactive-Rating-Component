const mainContainer = document.querySelector(".main_container")
const thanksContainer = document.querySelector(".thank_you")
const submitButton = document.getElementById("submit")
const rate_againButton = document.getElementById("rate_again")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".btn")

submitButton.addEventListener("click", () => {
    thanksContainer.classList.remove("hidden")
    mainContainer.style.display = "none"
})

rate_againButton.addEventListener("click", () => {
    thanksContainer.classList.add("hidden")
    mainContainer.style.display = "block"
    submitButton.disabled = true;
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.textContent = rate.textContent;
        submitButton.disabled = false;
    })
})
