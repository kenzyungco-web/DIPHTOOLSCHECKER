
// ✅ MONEY-BACK CHECKER
function checkGuarantee() {
    let orderDateValue = document.getElementById("orderDate").value;
    let days = parseInt(document.getElementById("daysOption").value);

    if (!orderDateValue) {
        document.getElementById("guaranteeResult").innerText = "Please select a date.";
        return;
    }

    let orderDate = new Date(orderDateValue);
    let today = new Date();

    let expiry = new Date(orderDate);
    expiry.setDate(expiry.getDate() + days);

    if (today <= expiry) {
        document.getElementById("guaranteeResult").innerHTML =
            "✅ Eligible<br>Expires on: " + expiry.toDateString();
    } else {
        document.getElementById("guaranteeResult").innerHTML =
            "❌ Not Eligible<br>Expired on: " + expiry.toDateString();
    }
}


// ✅ AHT TIME CONVERTER
function convertTime() {
    let seconds = parseFloat(document.getElementById("seconds").value);

    if (isNaN(seconds) || seconds < 0) {
        document.getElementById("timeResult").innerText = "Enter valid seconds.";
        return;
    }

    let minutes = seconds / 60;

    document.getElementById("timeResult").innerText =
        minutes.toFixed(2) + " minutes";
}


// ✅ REFUND CALCULATOR
function calculateRefund() {
    let price = parseFloat(document.getElementById("price").value);
    let rate = parseFloat(document.getElementById("refundOption").value);

    if (isNaN(price) || price <= 0) {
        document.getElementById("refundResult").innerText = "Enter valid price.";
        return;
    }

    let refund = price * rate;
    let remaining = price - refund;

    document.getElementById("refundResult").innerHTML =
        "Refund Amount: $" + refund.toFixed(2) +
        "<br>Customer Pays: $" + remaining.toFixed(2);
}


// ✅ PRODUCT DESCRIPTION GENERATOR
function generateDescription() {
    let type = document.getElementById("productType").value;
    let text = "";

    switch (type) {
        case "weight":
            text = "This advanced weight loss formula helps boost metabolism, support fat burning, and increase energy levels.";
            break;

        case "memory":
            text = "This memory support supplement enhances focus, improves recall, and promotes brain health.";
            break;

        case "male":
            text = "This male enhancement product supports stamina, performance, and overall confidence.";
            break;

        case "skin":
            text = "This skincare solution helps improve hydration, reduce wrinkles, and promote a natural glow.";
            break;
    }

    document.getElementById("descriptionResult").innerText = text;
}
