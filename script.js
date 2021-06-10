let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let direction = document.getElementById("direction");
let random_button = document.getElementById("random-button");
let copy_button = document.getElementById("copy-button");

let css_gradient = document.getElementById("css-gradient");
let gradient = document.getElementById("gradient");

let random_color = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

let make_gradient = () => {
  let gradient_direction = "";
  if (direction.checked) {
    gradient_direction = "to right, ";
  }
  let css = `linear-gradient(${gradient_direction}${color1.value}, ${color2.value})`;
  gradient.style.background = css;

  css_gradient.style.width = `${css.length}ch`;
  css_gradient.value = css;
};

let make_random_gradient = () => {
  color1.value = random_color();
  color2.value = random_color();

  make_gradient();
};

let copy_to_clipboard = () => {
  css_gradient.disabled = false;
  css_gradient.select();
  css_gradient.setSelectionRange(0, 99999);
  if (document.execCommand("copy")) {
    css_gradient.disabled = true;
    if (document.selection) {
      document.selection.empty();
    } else if (window.getSelection) {
      window.getSelection().removeAllRanges();
    }
    copy_button.value = "Copied";

    setInterval(() => {
      copy_button.value = "Copy to clipboard";
    }, 3000);
  }
};

color1.addEventListener("input", make_gradient);
color2.addEventListener("input", make_gradient);
direction.addEventListener("click", make_gradient);
window.addEventListener("load", make_gradient);
random_button.addEventListener("click", make_random_gradient);
copy_button.addEventListener("click", copy_to_clipboard);
