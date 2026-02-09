document.getElementById("add-task")
.addEventListener("click", addTask);

function addTask() {
  const input = document.getElementById("new-task");
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement("li");

  const circle = document.createElement("div");
  circle.className = "circle";

  const span = document.createElement("span");
  span.textContent = text;

  const del = document.createElement("button");
  del.textContent = "✕";
  del.className = "delete";

  li.append(circle, span, del);
  document.getElementById("task-list").appendChild(li);

  input.value = "";

  circle.onclick = () => {
    circle.classList.toggle("done");
    document.getElementById("task-list").prepend(li);
  };

  del.onclick = () => li.remove();
}
