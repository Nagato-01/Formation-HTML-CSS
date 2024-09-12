document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (input.value.trim()) {
            addTodo(input.value.trim());
            input.value = '';
        }
    });

    function addTodo(text) {
        const li = document.createElement('li');
        li.innerHTML = `
            ${text}
            <div>
                <button class="complete-btn">Terminé</button>
                <button class="delete-btn">Supprimer</button>
            </div>
        `;
        todoList.appendChild(li);

        li.querySelector('.complete-btn').addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        li.querySelector('.delete-btn').addEventListener('click', () => {
            li.remove();
        });
    }
});