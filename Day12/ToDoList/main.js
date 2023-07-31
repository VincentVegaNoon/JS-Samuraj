const toDoList = [];

const form = document.querySelector("form");
const ul = document.querySelector("ul");
const taskNumber = document.querySelector("h1 span");
const listItems = document.getElementsByClassName("task");
const input = document.querySelector("input");

const removeTask = (e) => {
  e.target.parentNode.remove();
  taskNumber.textContent = listItems.length;
  toDoList.splice(0, toDoList.length);
};

const searchTask = (e) => {
  const searchText = e.target.value.toLowerCase();
  let tasks = [...listItems];
  tasks = toDoList.filter((li) =>
    li.textContent.toLowerCase().includes(searchText)
  );
  ul.textContent = "";
  tasks.forEach((elem) => {
    ul.appendChild(elem);
  });
};

const addTask = (e) => {
  e.preventDefault();
  const titleTask = input.value;
  if (titleTask.length > 0) {
    const task = document.createElement("li");
    task.className = "task";
    const btn = document.createElement("button");
    task.textContent = titleTask;
    btn.textContent = "usun";
    toDoList.push(task);
    toDoList.forEach((elem) => {
      elem.appendChild(btn);
      ul.append(elem);
    });
    // task.appendChild(btn);
    // ul.appendChild(task);
    input.value = "";
    // const liItems = document.querySelectorAll("li.task").length;
    taskNumber.textContent = listItems.length;
    btn.addEventListener("click", removeTask);
  }
};

form.addEventListener("submit", addTask);
input.addEventListener("input", searchTask);
