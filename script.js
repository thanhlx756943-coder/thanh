// Todo List Application with Local Storage

class TodoApp {
    constructor() {
        this.todos = [];
        this.currentFilter = 'all';
        this.init();
    }

    init() {
        this.loadTodos();
        this.attachEventListeners();
        this.render();
    }

    // Event Listeners
    attachEventListeners() {
        const addBtn = document.getElementById('addBtn');
        const todoInput = document.getElementById('todoInput');
        const filterBtns = document.querySelectorAll('.filter-btn');
        const clearCompletedBtn = document.getElementById('clearCompletedBtn');
        const clearAllBtn = document.getElementById('clearAllBtn');

        addBtn.addEventListener('click', () => this.addTodo());
        todoInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.addTodo();
            }
        });

        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => this.setFilter(e.target.closest('.filter-btn').dataset.filter));
        });

        clearCompletedBtn.addEventListener('click', () => this.clearCompleted());
        clearAllBtn.addEventListener('click', () => this.clearAll());
    }

    // Add Todo
    addTodo() {
        const input = document.getElementById('todoInput');
        const text = input.value.trim();

        if (!text) {
            this.showToast('Please enter a task!');
            return;
        }

        const todo = {
            id: Date.now(),
            text: text,
            completed: false,
            priority: 'medium',
            createdAt: new Date().toLocaleString()
        };

        this.todos.unshift(todo);
        this.saveTodos();
        input.value = '';
        input.focus();
        this.render();
        this.showToast('✓ Task added successfully!');
    }

    // Toggle Todo
    toggleTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.saveTodos();
            this.render();
        }
    }

    // Delete Todo
    deleteTodo(id) {
        this.todos = this.todos.filter(t => t.id !== id);
        this.saveTodos();
        this.render();
        this.showToast('✓ Task deleted!');
    }

    // Edit Todo
    editTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (!todo) return;

        const newText = prompt('Edit task:', todo.text);
        if (newText && newText.trim()) {
            todo.text = newText.trim();
            this.saveTodos();
            this.render();
            this.showToast('✓ Task updated!');
        }
    }

    // Set Priority
    setPriority(id, priority) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.priority = priority;
            this.saveTodos();
            this.render();
        }
    }

    // Filter Todos
    setFilter(filter) {
        this.currentFilter = filter;
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-filter="${filter}"]`).classList.add('active');
        this.render();
    }

    // Get Filtered Todos
    getFilteredTodos() {
        switch (this.currentFilter) {
            case 'completed':
                return this.todos.filter(t => t.completed);
            case 'active':
                return this.todos.filter(t => !t.completed);
            case 'all':
            default:
                return this.todos;
        }
    }

    // Clear Completed
    clearCompleted() {
        if (this.todos.filter(t => t.completed).length === 0) {
            this.showToast('No completed tasks to clear!');
            return;
        }

        if (confirm('Delete all completed tasks?')) {
            this.todos = this.todos.filter(t => !t.completed);
            this.saveTodos();
            this.render();
            this.showToast('✓ Completed tasks cleared!');
        }
    }

    // Clear All
    clearAll() {
        if (this.todos.length === 0) {
            this.showToast('No tasks to clear!');
            return;
        }

        if (confirm('Delete all tasks? This cannot be undone!')) {
            this.todos = [];
            this.saveTodos();
            this.render();
            this.showToast('✓ All tasks cleared!');
        }
    }

    // Update Stats
    updateStats() {
        const totalCount = this.todos.length;
        const completedCount = this.todos.filter(t => t.completed).length;
        const activeCount = totalCount - completedCount;

        document.getElementById('totalCount').textContent = totalCount;
        document.getElementById('completedCount').textContent = completedCount;
        document.getElementById('activeCount').textContent = activeCount;
    }

    // Render
    render() {
        const todoList = document.getElementById('todoList');
        const emptyState = document.getElementById('emptyState');
        const filteredTodos = this.getFilteredTodos();

        this.updateStats();

        todoList.innerHTML = '';

        if (filteredTodos.length === 0) {
            emptyState.classList.add('show');
            return;
        }

        emptyState.classList.remove('show');

        filteredTodos.forEach(todo => {
            const todoElement = document.createElement('div');
            todoElement.className = `todo-item ${todo.completed ? 'completed' : ''}`;
            todoElement.innerHTML = `
                <input 
                    type="checkbox" 
                    class="todo-checkbox" 
                    ${todo.completed ? 'checked' : ''}
                    onchange="todoApp.toggleTodo(${todo.id})"
                >
                <div class="todo-content">
                    <span class="todo-priority ${todo.priority}"></span>
                    <div>
                        <div class="todo-text">${this.escapeHtml(todo.text)}</div>
                        <div class="todo-date">${todo.createdAt}</div>
                    </div>
                </div>
                <div class="todo-actions">
                    <select class="priority-select" onchange="todoApp.setPriority(${todo.id}, this.value)" value="${todo.priority}">
                        <option value="low">Low</option>
                        <option value="medium" selected>Med</option>
                        <option value="high">High</option>
                    </select>
                    <button class="todo-btn edit-btn" onclick="todoApp.editTodo(${todo.id})" title="Edit task">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="todo-btn delete-btn" onclick="todoApp.deleteTodo(${todo.id})" title="Delete task">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
            
            // Set the correct priority option
            const select = todoElement.querySelector('.priority-select');
            select.value = todo.priority;
            
            todoList.appendChild(todoElement);
        });
    }

    // Local Storage
    saveTodos() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    loadTodos() {
        const stored = localStorage.getItem('todos');
        this.todos = stored ? JSON.parse(stored) : [];
    }

    // Toast Notification
    showToast(message) {
        const toast = document.getElementById('toast');
        toast.textContent = message;
        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    // Escape HTML
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Initialize App
const todoApp = new TodoApp();