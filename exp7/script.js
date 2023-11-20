// Sample data for tasks
let tasks = [
    { name: "Task 1", status: "Pending" },
    { name: "Task 2", status: "In Progress" },
    { name: "Task 3", status: "Completed" },
];

// Function to add a new task
function addTask() {
    const taskName = document.getElementById("taskName").value;
    const taskStatus = document.getElementById("taskStatus").value;

    tasks.push({ name: taskName, status: taskStatus });

    // Clear the form fields
    document.getElementById("task-application-form").reset();

    // Update the displayed task list
    displayTasks();
}

// Function to update task status
function updateStatus(index, newStatus) {
    tasks[index].status = newStatus;
    displayTasks();
}

// Function to display tasks
function displayTasks() {
    const taskList = document.getElementById("tasks");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");

        const taskDetails = document.createElement("span");
        taskDetails.textContent = `${task.name} - ${task.status}`;

        const statusDropdown = document.createElement("select");
        statusDropdown.innerHTML = `
            <option value="Pending" ${task.status === "Pending" ? "selected" : ""}>Pending</option>
            <option value="In Progress" ${task.status === "In Progress" ? "selected" : ""}>In Progress</option>
            <option value="Completed" ${task.status === "Completed" ? "selected" : ""}>Completed</option>
        `;
        statusDropdown.addEventListener("change", () => updateStatus(index, statusDropdown.value));

        listItem.appendChild(taskDetails);
        listItem.appendChild(statusDropdown);
        taskList.appendChild(listItem);
    });
}

// Initial display of tasks
displayTasks();
