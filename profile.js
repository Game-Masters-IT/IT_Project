const carousel = document.querySelector(".carousel");
const dragging = () => {
  carousel.scrollLeft = (e.pageX);
}
carousel.addEventListener("mousemove", dragging);

document.write("hello");
