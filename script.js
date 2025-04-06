document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Simple form validation
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    if (name && email && message) {
        alert("Message sent! We'll get back to you soon.");
    } else {
        alert("Please fill in all the fields.");
    }
});

function createInvoice() {
    alert("Invoice Tool coming soon!");
}

function createContract() {
    alert("Contract Tool coming soon!");
}

function createWaiver() {
    alert("Waiver Tool coming soon!");
}