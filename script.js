const input = document.getElementById("textarea");
const submitBtn = document.getElementById("submitbtn");
const view = document.getElementById("viewing-part");
// const view2 = document.getElementById('reviewdiv')

submitBtn.addEventListener("click", () => {
  const value = input.value.trim();

  const newDiv = document.createElement("div");
  newDiv.className = "reviewDiv";
  newDiv.textContent = value;

  view.append(newDiv);

  input.value = "";
});


