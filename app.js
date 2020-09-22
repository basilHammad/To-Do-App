const plus = document.querySelector(".plus");
const input = document.querySelector(".header input");
const taskCont = document.querySelector(".tasks-cont");
window.onload = ()=> input.focus()
plus.addEventListener("click", handelClick);

function handelClick() {
  if (input.value !== "") {
    let task = `
    <div class="task">
    <div>
      <input  id = 'box' class='checkbox' type="checkbox" />
      <span class='q'>${input.value}</span>
    </div>
    <span class = 'trash'><i class="fa fa-trash" aria-hidden="true"></i></span>
  </div>
    `;
    input.value = "";
    taskCont.innerHTML += task;
    const trash = document.querySelectorAll(".trash");
    trash.forEach((element) =>
      element.addEventListener("click", (e) => {
        e.target.parentNode.parentNode.remove();
      })
    );
    const checkbox = document.querySelectorAll(".checkbox");

    checkbox.forEach((box) => {
      box.addEventListener("change", (e) => {
        if (box.checked === true) {
          e.target.parentNode.parentNode
            .style.setProperty("background-color", "#469C75");
          e.target.parentNode.children
            .item(1)
            .style.setProperty("text-decoration", "line-through");
        } else {
          e.target.parentNode.parentNode
            .style.setProperty("background-color", "#96221F");
          e.target.parentNode.children
            .item(1)
            .style.setProperty("text-decoration", "none");
          e.target.parentNode.children
            .item(1)
            .style.setProperty("color", "black");
        }
      });
    });
  }
}
