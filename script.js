window.onload = function () {
  const taskSaved = JSON.parse(localStorage.getItem("tasks")) || [];
  taskSaved.forEach((taskList) => {
    showTask(taskList);
  });
};

function addTask() {
  const taskInput = document.getElementById("taskInput").value;
  if (taskInput.trim() === "") {
    alert("Please enter a task.");
    return;
  }
  const taskList = {
    task: taskInput,
  };

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(taskList);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  showTask(taskList);

  document.getElementById("taskInput").value = "";
}
function showTask(taskList) {
  const bloco = document.createElement("div");
  bloco.classList.add("taskList");
  bloco.innerHTML = `<h2>${taskList.task}</h2> <input type="checkbox" class="check" onclick="this.parentNode.classList.toggle('done')"><button class="delete" onclick="this.parentNode.remove();">X</button>`;
  document.getElementById("taskContainer").appendChild(bloco);
}
