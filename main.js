const togglers = document.querySelectorAll(".toggler");
const h3s = document.querySelectorAll("h3");
const arrows = document.querySelectorAll(".arrow");

for (i = 0; i < h3s.length; i++) {
  let h3 = h3s[i];
  let arrow = arrows[i];
  let toggler = togglers[i];
  toggler.addEventListener(
    "mouseover",
    () => (h3.style.background = "cadetblue")
  );
  toggler.addEventListener("mouseout", () => (h3.style.background = "#ccc"));
  toggler.addEventListener("change", (event) => {
    let checkbox = event.target;
    if (checkbox.checked) {
      arrow.style.transform = "rotate(90deg)";
      arrow.style.top = "-5px";
      arrow.style.left = "5px";
    } else {
      arrow.style.transform = "rotate(0deg)";
      arrow.style.top = "0";
      arrow.style.left = "0";
    }
  });
}
