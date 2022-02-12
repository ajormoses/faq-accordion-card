var text = document.querySelectorAll(".container-text-content");

text.forEach((text) => {
  text.addEventListener("click", (e) => {
    const id = e.target.id;
    const queText = document.querySelector(`.${id}-text`);
    const queIcon = document.querySelector(`.${id}-icon`);
    const ques = document.querySelector(`.${id}-bold`);
    queText.classList.toggle("appear");
    queIcon.classList.toggle("show");
    ques.classList.toggle("bold");
  });
});
