const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const taskCount = document.getElementById('task-count');
const actionBtn = document.getElementById('action-btn');

let tasks = [
  { id: 1, text: 'Learn Git branching', completed: false },
  { id: 2, text: 'Resolve merge conflicts', completed: false }
];

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.className = 'task-item';
    li.innerHTML = `
      <span>${task.text}</span>
      <button onclick="toggleTask(${task.id})">${task.completed ? 'Undo' : 'Done'}</button>
    `;
    taskList.appendChild(li);
  });
  taskCount.textContent = `${tasks.length} tasks remaining`;
}

function toggleTask(id) {
  const task = tasks.find((t) => t.id === id);
  if (task) {
    task.completed = !task.completed;
    renderTasks();
  }
}

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = taskInput.value.trim();
  if (!text) return;
  tasks.push({ id: Date.now(), text, completed: false });
  taskInput.value = '';
  renderTasks();
});

actionBtn.addEventListener('click', () => {
  console.log('Action triggered in base version');
});

renderTasks();
