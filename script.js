
// ✅ MONEY BACK CHECKER
function checkGuarantee() {
    let dateInput = document.getElementById("orderDate").value;
    let days = parseInt(document.getElementById("daysOption").value);

    if (!dateInput) {
        document.getElementById("guaranteeResult").innerText = "Please select a date.";
        return;
    }

    let orderDate = new Date(dateInput);
    let today = new Date();

    let expiry = new Date(orderDate);
    expiry.setDate(expiry.getDate() + days);

    if (today <= expiry) {
        document.getElementById("guaranteeResult").innerHTML =
            "✅ Eligible<br>Expires: " + expiry.toDateString();
    } else {
        document.getElementById("guaranteeResult").innerHTML =
            "❌ Not Eligible<br>Expired: " + expiry.toDateString();
    }
}


// ✅ AHT CONVERTER
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
        "Refund: $" + refund.toFixed(2) +
        "<br>Customer Pays: $" + remaining.toFixed(2);
}


// ✅ PRODUCT DESCRIPTION
function generateDescription() {
    let type = document.getElementById("productType").value;

    let descriptions = {
        weight: "Boost metabolism, burn fat, and increase daily energy levels.",
        memory: "Enhances focus, improves memory recall, and supports brain health.",
        male: "Supports stamina, performance, and confidence.",
        skin: "Improves hydration, reduces wrinkles, and enhances skin glow."
    };

    document.getElementById("descriptionResult").innerText = descriptions[type];
}
