let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let direction = document.getElementById("direction");

let css_gradient = document.getElementById("css-gradient");
let gradient = document.getElementById("gradient");

let make_gradient = () => {
  let gradient_direction = "";
  if (direction.checked) {
    gradient_direction = "to right, ";
  }
  let css = `linear-gradient(${gradient_direction}${color1.value}, ${color2.value})`;
  gradient.style.background = css;

  css_gradient.textContent = css;
};

color1.addEventListener("input", make_gradient);
color2.addEventListener("input", make_gradient);
direction.addEventListener("click", make_gradient);
