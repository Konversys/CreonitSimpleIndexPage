$(document).ready(() => {
  animateProjectHover();
});

const animateProjectHover = () => {
  const elements = document.querySelectorAll(".project-example");
  debugger;
  elements.forEach(el => {
    el.onmouseover = () => {
      el.classList.add("project-example_animation");
      el.querySelectorAll("h5, h6").forEach(x =>
        x.classList.add("project-example__title_animation")
      );
    };
    el.onmouseout = () => {
      el.classList.remove("project-example_animation");
      el.querySelectorAll("h5, h6").forEach(x =>
        x.classList.remove("project-example__title_animation")
      );
    };
  });
}