/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {

  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
  }, 1000);

});

/* =========================
   CLOCK
========================= */

function updateClock() {

  const now = new Date();

  document.getElementById("clock").innerHTML =
    now.toLocaleTimeString();
}

setInterval(updateClock, 1000);

updateClock();

/* =========================
   DARK MODE
========================= */

document
  .getElementById("darkModeToggle")
  .addEventListener("click", () => {

    document.body.classList.toggle("dark");

    showNotification("Theme Changed");
  });

/* =========================
   NOTIFICATION
========================= */

function showNotification(message) {

  const notification =
    document.getElementById("notification");

  notification.innerHTML = message;

  notification.classList.add("show");

  setTimeout(() => {
    notification.classList.remove("show");
  }, 2500);
}

/* =========================
   GUARANTEE CHECKER
========================= */

document
  .getElementById("guaranteeForm")
  .addEventListener("submit", function (e) {

    e.preventDefault();

    const purchaseDate =
      document.getElementById("purchaseDate").value;

    const guaranteeDays =
      parseInt(
        document.getElementById("guaranteeDays").value
      );

    const result =
      document.getElementById("guaranteeResult");

    if (!purchaseDate || guaranteeDays <= 0) {

      showNotification("Enter valid data");

      return;
    }

    const purchase = new Date(purchaseDate);

    const expiry = new Date(purchase);

    expiry.setDate(expiry.getDate() + guaranteeDays);

    const today = new Date();

    if (today <= expiry) {

      result.className =
        "result-box success";

      result.innerHTML = `
        <h3>✅ Eligible for Refund</h3>
        <p>Valid until ${expiry.toDateString()}</p>
      `;

    } else {

      result.className =
        "result-box error";

      result.innerHTML = `
        <h3>❌ Refund Expired</h3>
        <p>Expired on ${expiry.toDateString()}</p>
      `;
    }

    showNotification("Eligibility Checked");
  });

/* =========================
   AHT CONVERTER
========================= */

document
  .getElementById("secondsInput")
  .addEventListener("input", function () {

    const seconds = parseInt(this.value) || 0;

    const minutes = (seconds / 60).toFixed(2);

    const hours = (seconds / 3600).toFixed(2);

    const hh =
      String(Math.floor(seconds / 3600))
      .padStart(2, "0");

    const mm =
      String(Math.floor((seconds % 3600) / 60))
      .padStart(2, "0");

    const ss =
      String(seconds % 60)
      .padStart(2, "0");

    document.getElementById("minutesResult")
      .innerHTML = minutes;

    document.getElementById("hoursResult")
      .innerHTML = hours;

    document.getElementById("hhmmssResult")
      .innerHTML = `${hh}:${mm}:${ss}`;
  });

/* =========================
   REFUND CALCULATOR
========================= */

document
  .getElementById("calculateRefund")
  .addEventListener("click", () => {

    const price =
      parseFloat(
        document.getElementById("productPrice").value
      );

    const percent =
      parseFloat(
        document.getElementById("refundPercent").value
      );

    const fee =
      parseFloat(
        document.getElementById("processingFee").value
      );

    const result =
      document.getElementById("refundResult");

    if (isNaN(price) ||
      isNaN(percent) ||
      isNaN(fee)) {

      showNotification("Fill all refund fields");

      return;
    }

    const refund =
      (price * percent / 100) - fee;

    result.innerHTML = `
      <h3>Refund Summary</h3>
      <p>Original Price: $${price}</p>
      <p>Refund Percentage: ${percent}%</p>
      <p>Processing Fee: $${fee}</p>
      <hr><br>
      <h2>Final Refund: $${refund.toFixed(2)}</h2>
    `;

    showNotification("Refund Calculated");
  });

/* =========================
   PRODUCT DATA
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

    const found =
      products.find(product =>
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

      showNotification("Product Found");

    } else {

      result.innerHTML =
        "<p>No product found.</p>";

      showNotification("Product Not Found");
    }
  });
