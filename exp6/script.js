// Sample leave balance data
const leaveBalance = {
    casual: 10,
    medical: 5,
};

// Function to apply for leave
function applyLeave() {
    const leaveType = document.getElementById("leaveType").value;
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;

    // Validate the dates and apply leave logic can be added here

    // For this example, let's just display an alert
    alert(`Leave applied successfully!\nType: ${leaveType}\nStart Date: ${startDate}\nEnd Date: ${endDate}`);
}

// Function to display leave balance
function displayLeaveBalance() {
    document.getElementById("casualLeaveBalance").textContent = `Casual Leave: ${leaveBalance.casual} days`;
    document.getElementById("medicalLeaveBalance").textContent = `Medical Leave: ${leaveBalance.medical} days`;
}

// Initial display of leave balance
displayLeaveBalance();
