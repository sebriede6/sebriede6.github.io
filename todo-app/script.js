const form = document.getElementById("todo-form");
const input = document.getElementById("newTodoInput");
const todoList = document.getElementById("todo-list");

let todos = [];
new Date();

// Funktion zum Laden von To-dos aus dem Local Storage
function loadTodos() {
  const storedTodos = localStorage.getItem("todos");
  if (storedTodos) {
    todos = JSON.parse(storedTodos);
  }
  renderTodos();
}

// Funktion zum Speichern der todos im Local Storage
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Lade gespeicherte To-dos beim Seitenstart
loadTodos();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const todoText = form.newTodo.value.trim();

  if (todoText === "") {
    return;
  }

  const todo = {
    text: todoText,
    completed: false,
    id: Date.now(),
  };

  todos.push(todo);
  input.value = "";

  renderTodos();
  saveTodos(); // Speichert die Änderungen nach dem Hinzufügen einer Aufgabe
});

function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.ariaLabel = "Aufgabe erledigen";

    checkbox.addEventListener("change", () => {
      todo.completed = checkbox.checked;
      renderTodos();
      saveTodos(); // Speichert die Änderungen nach dem Ändern des Status
    });

    const span = document.createElement("span");
    span.textContent = todo.text;
    if (todo.completed) {
      span.style.textDecoration = "line-through";
    }

    const statusText = document.createElement("span");
    statusText.classList.add("status-text");
    statusText.classList.add(todo.completed ? "erledigt" : "nicht-erledigt");
    statusText.textContent = todo.completed
      ? "(erledigt)"
      : "(noch nicht erledigt)";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "löschen";
    deleteButton.ariaLabel = "Aufgabe löschen";
    deleteButton.addEventListener("click", () => {
      todos = todos.filter((t) => t.id !== todo.id);
      renderTodos();
      saveTodos(); // Speichert die Änderungen nach dem Entfernen einer Aufgabe
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(statusText);
    li.appendChild(deleteButton);
    todoList.appendChild(li);
  });
}
