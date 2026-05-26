/* =========================
   LOADING SCREEN
========================= */

window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
  }, 1500);
});

/* =========================
   REAL TIME CLOCK
========================= */

function updateClock() {
  const now = new Date();

  const time = now.toLocaleTimeString();

  document.getElementById("clock").textContent = time;
}

setInterval(updateClock, 1000);
updateClock();

/* =========================
   DARK MODE TOGGLE
========================= */

const darkToggle = document.getElementById("darkModeToggle");

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  showNotification("Theme changed successfully!");
});

/* =========================
   NOTIFICATION FUNCTION
========================= */

function showNotification(message) {
  const notification = document.getElementById("notification");

  notification.textContent = message;
  notification.classList.add("show");

  setTimeout(() => {
    notification.classList.remove("show");
  }, 3000);
}

/* =========================
   MONEYBACK GUARANTEE CHECKER
========================= */

document
  .getElementById("guaranteeForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const purchaseDate =
      document.getElementById("purchaseDate").value;

    const guaranteeDays =
      parseInt(document.getElementById("guaranteeDays").value);

    const resultBox =
      document.getElementById("guaranteeResult");

    if (!purchaseDate || guaranteeDays <= 0) {
      showNotification("Please enter valid inputs.");
      return;
    }

    const purchase = new Date(purchaseDate);

    const expiryDate = new Date(purchase);

    expiryDate.setDate(expiryDate.getDate() + guaranteeDays);

    const today = new Date();

    if (today <= expiryDate) {
      resultBox.className = "result-box success";

      resultBox.innerHTML = `
        <h3>Eligible for Refund</h3>
        <p>Guarantee valid until:
        ${expiryDate.toDateString()}</p>
      `;
    } else {
      resultBox.className = "result-box error";

      resultBox.innerHTML = `
        <h3>Guarantee Expired</h3>
        <p>Expired on:
        ${expiryDate.toDateString()}</p>
      `;
    }

    showNotification("Guarantee status checked.");
  });

/* =========================
   AHT TIME CONVERTER
========================= */

const secondsInput =
  document.getElementById("secondsInput");

secondsInput.addEventListener("input", () => {

  const seconds = parseInt(secondsInput.value) || 0;

  const minutes = (seconds / 60).toFixed(2);

  const hours = (seconds / 3600).toFixed(2);

  const hh = String(Math.floor(seconds / 3600)).padStart(2, "0");

  const mm = String(
    Math.floor((seconds % 3600) / 60)
  ).padStart(2, "0");

  const ss = String(seconds % 60).padStart(2, "0");

  document.getElementById("minutesResult").textContent =
    minutes;

  document.getElementById("hoursResult").textContent =
    hours;

  document.getElementById("hhmmssResult").textContent =
    `${hh}:${mm}:${ss}`;
});

/* =========================
   REFUND CALCULATOR
========================= */

document
  .getElementById("calculateRefund")
  .addEventListener("click", () => {

    const price =
      parseFloat(document.getElementById("productPrice").value);

    const percent =
      parseFloat(document.getElementById("refundPercent").value);

    const fee =
      parseFloat(document.getElementById("processingFee").value);

    const result =
      document.getElementById("refundResult");

    if (isNaN(price) || isNaN(percent) || isNaN(fee)) {
      showNotification("Please fill all refund fields.");
      return;
    }

    const refundAmount = (price * percent) / 100;

    const finalRefund = refundAmount - fee;

    result.innerHTML = `
      <h3>Refund Summary</h3>
      <p>Refund Amount: $${refundAmount.toFixed(2)}</p>
      <p>Processing Fee: $${fee.toFixed(2)}</p>
      <hr>
      <h2>Final Refund: $${finalRefund.toFixed(2)}</h2>
    `;

    showNotification("Refund calculated successfully.");
  });

/* =========================
   SAMPLE PRODUCT DATA
========================= */

const products = [
  {
    id: "P1001",
    name: "Wireless Mouse",
    category: "Accessories",
    warranty: "1 Year",
    refund: "30 Days",
    price: "$25"
  },
  {
    id: "P1002",
    name: "Gaming Keyboard",
    category: "Gaming",
    warranty: "2 Years",
    refund: "15 Days",
    price: "$80"
  },
  {
    id: "P1003",
    name: "Bluetooth Headphones",
    category: "Audio",
    warranty: "1 Year",
    refund: "45 Days",
    price: "$120"
  }
];

/* =========================
   PRODUCT SEARCH
========================= */

document
  .getElementById("searchProduct")
  .addEventListener("click", () => {

    const query =
      document.getElementById("productSearch")
      .value
      .toLowerCase()
      .trim();

    const result =
      document.getElementById("productResult");

    if (!query) {
      showNotification("Please enter a product search.");
      return;
    }

    const found = products.find(product =>
      product.id.toLowerCase() === query ||
      product.name.toLowerCase().includes(query)
    );

    if (found) {
      result.innerHTML = `
        <h3>${found.name}</h3>
        <p><strong>Category:</strong> ${found.category}</p>
        <p><strong>Warranty:</strong> ${found.warranty}</p>
        <p><strong>Refund Policy:</strong> ${found.refund}</p>
        <p><strong>Price:</strong> ${found.price}</p>
      `;

      showNotification("Product found successfully.");
    } else {
      result.innerHTML = `
        <p>No product found.</p>
      `;

      showNotification("Product not found.");
    }
  });
