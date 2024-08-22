const addQuestion = document.getElementById("addQuestion");
const addQuestionForm = document.getElementById("addQuestionForm");
const main = document.getElementById("main");

addQuestion.addEventListener("click", () => {
  main.classList.add("gap-4");
  addQuestionForm.classList.toggle("hidden");
  addQuestionForm.classList.toggle("flex");
  addQuestionForm.classList.toggle("flex-col");
  addQuestionForm.classList.toggle("items-center");
  addQuestionForm.classList.toggle("justify-center");

  addQuestionForm.classList.toggle("bg-teal");
  addQuestionForm.classList.toggle("rounded-xl");
  addQuestionForm.classList.toggle("shadow-md");
  addQuestionForm.classList.toggle("p-4");
});
