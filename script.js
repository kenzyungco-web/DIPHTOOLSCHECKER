function checkGuarantee(){
    let orderDate = new Date(document.getElementById("orderDate").value);
    let days = parseInt(document.getElementById("daysOption").value);
    let today = new Date();

    let expiry = new Date(orderDate);
    expiry.setDate(expiry.getDate() + days);

    if (isNaN(orderDate)) {
        document.getElementById("result").innerHTML = "Select a valid date.";
        return;
    }

    if(today <= expiry){
        document.getElementById("result").innerHTML =
        "✅ Eligible<br>Expires: " + expiry.toDateString();
    } else {
        document.getElementById("result").innerHTML =
        "❌ Not Eligible<br>Expired: " + expiry.toDateString();
    }
}function convert(){
    let seconds = parseFloat(document.getElementById("seconds").value);

    if(isNaN(seconds)){
        document.getElementById("output").innerText = "Enter valid number";
        return;
    }

    let minutes = seconds / 60;
    document.getElementById("output").innerText =
        minutes.toFixed(2) + " minutes";
}function convert(){
    let seconds = parseFloat(document.getElementById("seconds").value);

    if(isNaN(seconds)){
        document.getElementById("output").innerText = "Enter valid number";
        return;
    }

    let minutes = seconds / 60;
    document.getElementById("output").innerText =
        minutes.toFixed(2) + " minutes";
}function generate(){
    let type = document.getElementById("productType").value;
    let text = "";

    if(type === "weight"){
        text = "Boost metabolism, burn fat, and support energy levels.";
    }
    else if(type === "memory"){
        text = "Enhances focus, memory retention, and brain function.";
    }
    else if(type === "male"){
        text = "Supports stamina, performance, and confidence.";
    }
    else if(type === "skin"){
        text = "Improves hydration, glow, and skin health.";
    }

    document.getElementById("desc").innerText = text;
}
