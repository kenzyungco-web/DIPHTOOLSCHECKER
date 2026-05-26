function checkGuarantee() {
    const orderDateInput = document.getElementById("orderDate").value;
    const daysInput = parseInt(document.getElementById("days").value);

    if (!orderDateInput || isNaN(daysInput)) {
        alert("Please fill in all fields.");
        return;
    }

    // Start date = order date (IMPORTANT ✅)
    const orderDate = new Date(orderDateInput);

    // Calculate expiry date
    const expiryDate = new Date(orderDate);
    expiryDate.setDate(expiryDate.getDate() + daysInput);

    // Format date
    const formattedExpiry = expiryDate.toLocaleDateString();

    // Get today
    const today = new Date();

    // Check status
    let statusText = "";
    let statusClass = "";

    if (today <= expiryDate) {
        statusText = "Valid (Eligible for Refund)";
        statusClass = "valid";
    } else {
        statusText = "Expired (Not Eligible)";
        statusClass = "expired";
    }

    // Display outputs
    document.getElementById("expiryDate").textContent = formattedExpiry;

    const statusElement = document.getElementById("status");
    statusElement.textContent = statusText;
    statusElement.className = statusClass;
}
