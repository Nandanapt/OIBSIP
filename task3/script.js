function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (!taskText) return;
  
    const taskTime = new Date().toLocaleString();
  
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${taskText}</span><br>
      <span class="task-time">${taskTime}</span>
      <button class="complete-btn" onclick="markComplete(this)">✓</button>
      <button onclick="deleteTask(this)">✕</button>
    `;
  
    document.getElementById('pendingTasks').appendChild(li);
    taskInput.value = '';
  }
  
  function markComplete(button) {
    const li = button.parentElement;
    document.getElementById('completedTasks').appendChild(li);
    button.remove(); // remove complete button from completed list
  }
  
  function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
  }
  