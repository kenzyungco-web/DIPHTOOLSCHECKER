// MONEYBACK GUARANTEE CHECKER
function checkGuarantee() {
  const orderDate = new Date(document.getElementById("orderDate").value);
  const days = parseInt(document.getElementById("guaranteeDays").value);
  const today = new Date();

  if (!orderDate.getTime()) {
    document.getElementById("guaranteeResult").innerText = "Please select a valid date.";
    return;
  }

  const expiryDate = new Date(orderDate);
  expiryDate.setDate(expiryDate.getDate() + days);

  if (today <= expiryDate) {
    document.getElementById("guaranteeResult").innerText =
      "✅ Within Moneyback Guarantee (Expires: " + expiryDate.toDateString() + ")";
  } else {
    document.getElementById("guaranteeResult").innerText =
      "❌ Guarantee Expired (Expired on: " + expiryDate.toDateString() + ")";
  }
}


// AHT CONVERTER
function convertAHT() {
  const seconds = parseInt(document.getElementById("secondsInput").value);

  if (isNaN(seconds) || seconds < 0) {
    document.getElementById("ahtResult").innerText = "Enter valid seconds.";
    return;
  }

  const minutes = (seconds / 60).toFixed(2);

  document.getElementById("ahtResult").innerText =
    seconds + " seconds = " + minutes + " minutes";
}


// REFUND CALCULATOR
function calculateRefund() {
  const price = parseFloat(document.getElementById("priceInput").value);

  if (isNaN(price) || price <= 0) {
    document.getElementById("refundResult").innerText = "Enter valid price.";
    return;
  }

  const refund35 = (price * 0.35).toFixed(2);
  const refund50 = (price * 0.50).toFixed(2);

  document.getElementById("refundResult").innerText =
    "35% Refund: $" + refund35 + " | 50% Refund: $" + refund50;
}
``
