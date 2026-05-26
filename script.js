
// MONEY BACK
function checkGuarantee() {
    let dateInput = document.getElementById("orderDate").value;
    let days = parseInt(document.getElementById("daysOption").value);

    if (!dateInput) {
        document.getElementById("guaranteeResult").innerText = "Select a date.";
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


// AHT
function convertTime() {
    let sec = parseFloat(document.getElementById("seconds").value);

    if (isNaN(sec) || sec < 0) {
        document.getElementById("timeResult").innerText = "Enter valid seconds.";
        return;
    }

    let minutes = sec / 60;
    document.getElementById("timeResult").innerText =
        minutes.toFixed(2) + " minutes";
}


// REFUND
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


// PRODUCT
function generateDescription() {
    let type = document.getElementById("productType").value;

    const descriptions = {
        weight: "Boost metabolism, burn fat, and increase energy.",
        memory: "Improves memory, focus, and cognitive function.",
        male: "Enhances stamina, performance, and confidence.",
        skin: "Hydrates skin, reduces wrinkles, promotes glow."
    };

    document.getElementById("descriptionResult").innerText =
        descriptions[type];
}
