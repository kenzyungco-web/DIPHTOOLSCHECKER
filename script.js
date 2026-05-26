// MONEY BACK GUARANTEE CHECKER
function checkGuarantee() {
    const orderDate = new Date(document.getElementById("orderDate").value);
    const days = parseInt(document.getElementById("guarantee").value);

    if (!orderDate) {
        document.getElementById("resultGuarantee").innerText = "Please select a valid date.";
        return;
    }

    const today = new Date();
    const expiry = new Date(orderDate);
    expiry.setDate(orderDate.getDate() + days);

    if (today <= expiry) {
        document.getElementById("resultGuarantee").innerText = "✅ Eligible for refund";
    } else {
        document.getElementById("resultGuarantee").innerText = "❌ No longer eligible";
    }
}


// AHT CONVERTER
function convertAHT() {
    const seconds = parseFloat(document.getElementById("seconds").value);

    if (isNaN(seconds) || seconds < 0) {
        document.getElementById("resultAHT").innerText = "Enter valid seconds.";
        return;
    }

    const minutes = seconds / 60;
    document.getElementById("resultAHT").innerText = minutes.toFixed(2) + " minutes";
}


// REFUND CALCULATOR
function calculateRefund() {
    const price = parseFloat(document.getElementById("price").value);
    const percent = parseInt(document.getElementById("refundType").value);

    if (isNaN(price) || price <= 0) {
        document.getElementById("resultRefund").innerText = "Enter valid price.";
        return;
    }

    const refund = (price * percent) / 100;
    document.getElementById("resultRefund").innerText = "Refund Amount: $" + refund.toFixed(2);
}


// PRODUCT DESCRIPTION GENERATOR
function generateDescription() {
    const name = document.getElementById("productName").value;
    const feature = document.getElementById("productFeature").value;

    if (!name || !feature) {
        document.getElementById("resultDescription").innerText = "Fill all fields.";
        return;
    }

    const description = `${name} is designed to deliver outstanding performance. 
Featuring ${feature}, this product ensures high quality, reliability, and satisfaction for daily use.`;

    document.getElementById("resultDescription").innerText = description;
}
