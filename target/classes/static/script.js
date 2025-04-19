// DOM Elements
const addBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const clearCompletedBtn = document.getElementById('clearCompleted');
const clearAllBtn = document.getElementById('clearAll');

// Event Listeners
addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => e.key === 'Enter' && addTask());
clearCompletedBtn.addEventListener('click', clearCompletedTasks);
clearAllBtn.addEventListener('click', clearAllTasks);

// Functions
function addTask() {
  const taskText = taskInput.value.trim();
  if (!taskText) return;

  const taskItem = document.createElement('li');
  taskItem.className = 'task-item';
  taskItem.style.animationDelay = `${taskList.children.length * 0.1}s`;
  
  taskItem.innerHTML = `
    <span class="task-text">${taskText}</span>
    <div class="task-actions">
      <button class="task-btn complete-btn">✓</button>
      <button class="task-btn delete-btn">✕</button>
    </div>
  `;

  // Add event listeners to new buttons
  taskItem.querySelector('.complete-btn').addEventListener('click', () => {
    taskItem.classList.toggle('completed');
  });

  taskItem.querySelector('.delete-btn').addEventListener('click', () => {
    taskItem.style.animation = 'fadeOut 0.3s ease-out forwards';
    setTimeout(() => taskItem.remove(), 300);
  });

  taskList.appendChild(taskItem);
  taskInput.value = '';
  taskInput.focus();
}

function clearCompletedTasks() {
  document.querySelectorAll('.task-item.completed').forEach(task => {
    task.style.animation = 'fadeOut 0.3s ease-out forwards';
    setTimeout(() => task.remove(), 300);
  });
}

function clearAllTasks() {
  document.querySelectorAll('.task-item').forEach(task => {
    task.style.animation = 'fadeOut 0.3s ease-out forwards';
    setTimeout(() => task.remove(), 300);
  });
}