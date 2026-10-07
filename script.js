const monthlyBtn = document.getElementById("monthlyBtn");

const yearlyBtn = document.getElementById("yearlyBtn");
const prices = document.querySelectorAll(".price-value");
monthlyBtn.addEventListener("click", function () {

    prices.forEach(function (price) {

        price.textContent = price.dataset.monthly;

    });

    monthlyBtn.classList.add("active");
    yearlyBtn.classList.remove("active");

});
yearlyBtn.addEventListener("click", function () {

    prices.forEach(function (price) {

        price.textContent = price.dataset.yearly;

    });

    yearlyBtn.classList.add("active");
    monthlyBtn.classList.remove("active");

});
const chooseButtons = document.querySelectorAll(".choose-btn");

chooseButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        alert("You selected the " +
            button.parentElement.querySelector("h2").textContent +
            " plan!");

    });

});

