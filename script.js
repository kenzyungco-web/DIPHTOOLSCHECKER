
function checkGuarantee() {
    let date = document.getElementById("orderDate").value;
    let days = parseInt(document.getElementById("daysOption").value);

    if (!date) {
        document.getElementById("guaranteeResult").innerText = "Select a date.";
        return;
    }

    let orderDate = new Date(date);
    let expiry = new Date(orderDate);
    expiry.setDate(expiry.getDate() + days);

    let today = new Date();

    if (today <= expiry) {
        document.getElementById("guaranteeResult").innerHTML =
            "✅ Eligible<br>Expires: " + expiry.toDateString();
    } else {
        document.getElementById("guaranteeResult").innerHTML =
            "❌ Not Eligible<br>Expired: " + expiry.toDateString();
    }
}

function convertTime() {
    let s = parseFloat(document.getElementById("seconds").value);

    if (isNaN(s)) {
        document.getElementById("timeResult").innerText = "Enter seconds.";
        return;
    }

    document.getElementById("timeResult").innerText =
        (s / 60).toFixed(2) + " minutes";
}

function calculateRefund() {
    let price = parseFloat(document.getElementById("price").value);
    let rate = parseFloat(document.getElementById("refundOption").value);

    if (isNaN(price)) {
        document.getElementById("refundResult").innerText = "Enter price.";
        return;
    }

    let refund = price * rate;

    document.getElementById("refundResult").innerHTML =
        "Refund: $" + refund.toFixed(2) +
        "<br>Remaining: $" + (price - refund).toFixed(2);
}

function generateDescription() {
    let type = document.getElementById("productType").value;

    const data = {
        weight: "Boost metabolism and burn fat effectively.",
        memory: "Improve focus and brain performance.",
        male: "Enhance stamina and overall performance.",
        skin: "Promote glowing and healthy skin."
    };

    document.getElementById("descriptionResult").innerText = data[type];
}
