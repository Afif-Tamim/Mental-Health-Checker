const slideValue = document.querySelector("span")
const inputSlider = document.querySelector("input")
inputSlider.addEventListener("input", () => {
    const value = slideValue.style.left = ((value - inputSlider.min) / (inputSlider.max - inputSlider.min)) * 100 + "%";
    inputSlider.style.background = `linear-gradient(to right, #5cab7d ${value}%, #ddd ${value}%)`;
});
inputSlider.oninput = (() => {
    let value = inputSlider.value;
    slideValue.textContent = value;
    slideValue.style.left = ((value - inputSlider.min) / (inputSlider.max - inputSlider.min)) * 100 + "%";
    slideValue.classList.add("show");
});
inputSlider.onblur = (() => {
    slideValue.classList.remove("show")
});