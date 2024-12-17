

const form = document.querySelector('.todo-form'); // const, da das Formular nicht neu zugewiesen wird
const input = document.querySelector('.todo-input'); // const, da das Input-Element nicht neu zugewiesen wird
const todoList = document.querySelector('.todo-list'); // const, da die Liste ul nicht neu zugewiesen wird

// Array erstellen, das die Todo Einträge speichert

let todos = []; // let, da das Array der Aufgaben sich ändert, in diesem Array werden die Aufgaben gespeichert

// fügt dem Formular einen Event Listener hinzu. Dieser Listener wird ausgelöst, 
// wenn das Formular abgeschickt wird z.B. durch Drücken des "Hinzufügen"-Buttons

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Verhindert das Neuladen der Seite

    const todoText = input.value.trim(); // Entfernt Leerzeichen

    if (todoText === '') {
        return; // Beendet die Funktion, wenn das Eingabefeld leer ist
    }

    // definiert ein neues Objekt für die Aufgabe Das todo-Objekt speichert den Aufgabentext (text), 
    // den Erledigungsstatus (completed) und eine eindeutige ID (id). Date.now() generiert einen Zeitstempel, 
    // der als ID verwendet wird
    const todo = {
        text: todoText,
        completed: false,
        id: Date.now()
    }; // const, da das Objekt nicht neu zugewiesen wird


    // fügt das neue todo-Objekt dem todos-Array hinzu

    todos.push(todo);
    input.value = ''; // Leert das Eingabefeld

    renderTodos(); //  ruft die Funktion auf, die die To-Do-Liste im DOM aktualisiert
});

function renderTodos() {
    todoList.innerHTML = ''; // Leert die Liste, bevor sie neu gerendert wird

    todos.forEach(todo => {   // iteriert über das todo-Array
        const li = document.createElement('li'); // erstellt ein neues Listenelement

        const checkbox = document.createElement('input'); // erstellt ein neues Checkbox-Element
        checkbox.type = 'checkbox'; // setzt den Typ der Checkbox
        checkbox.checked = todo.completed; // setzt den Checkbox-Status entsprechend dem completet Status der Aufgabe, wenn ich ein Häckchen reinmache
        checkbox.ariaLabel = "Aufgabe erledigen" // setzt ein aria-Label

        checkbox.addEventListener('change', () => {  // aktualisiert den completed-Status der Aufgabe und rendert die Liste neu
            todo.completed = checkbox.checked;
            renderTodos();
        });

        const span = document.createElement('span'); // erstellt ein neues span-Element für den Aufgabentext
        span.textContent = todo.text; // setzt den Text des span-Elements
        if (todo.completed) {
            span.style.textDecoration = 'line-through'; // fügt eine Durchstreichung hinzu, wenn man die Aufgabe als erledigt anklickt
        }

        const statusText = document.createElement('span'); // Neues Span für den Status
        statusText.classList.add('status-text');
        statusText.classList.add(todo.completed ? 'erledigt' : 'nicht-erledigt'); // legt eine Klasse fest, weil ich den Text stylen möchte
        statusText.textContent = todo.completed ? '(erledigt)' : '(noch nicht erledigt)';



        const deleteButton = document.createElement('button'); // erstellt einen Löschbutton, wird nicht geändert, deshalb const
        deleteButton.textContent = 'Löschen';
        deleteButton.ariaLabel = "Aufgabe löschen"
        deleteButton.addEventListener('click', () => {   // filtert die Aufgabe anhand ihrer id aus dem todos-Array und rendert die Liste neu.
            todos = todos.filter(t => t.id !== todo.id);
            renderTodos();
        });

        li.appendChild(checkbox);  // fügt die Checkbox, den Span und den Button dem li-Element hinzu
        li.appendChild(span);
        li.appendChild(statusText);
        li.appendChild(deleteButton);
        todoList.appendChild(li); // fügt das li-Element der ul-Liste hinzu
    });
}