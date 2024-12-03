// Modal functionality
function showDonationForm(type) {
  const modal = document.getElementById(type + "Modal");
  modal.style.display = "block";

  // Close modal when clicking outside
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  // Close modal when clicking X
  const closeBtn = modal.querySelector(".close");
  closeBtn.onclick = function () {
    modal.style.display = "none";
  };
}

// Handle cash donation form submission
document
  .getElementById("cashDonationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Collect form data
    const formData = {
      name: document.getElementById("cashName").value,
      phone: document.getElementById("cashPhone").value,
      address: document.getElementById("cashAddress").value,
      amount: document.getElementById("cashAmount").value,
      preferredTime: document.getElementById("cashPreferredTime").value,
    };

    // Here you would typically send this data to your server
    console.log("Cash donation form submitted:", formData);

    // Show success message
    alert(
      "Thank you for your donation! Our representative will contact you soon to arrange the collection."
    );

    // Close modal and reset form
    document.getElementById("cashModal").style.display = "none";
    this.reset();
  });

// Handle online donation form submission
document
  .getElementById("onlineDonationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Collect form data
    const formData = {
      cardName: document.getElementById("cardName").value,
      cardNumber: document.getElementById("cardNumber").value,
      cardExpiry: document.getElementById("cardExpiry").value,
      cardCVV: document.getElementById("cardCVV").value,
      amount: document.getElementById("donationAmount").value,
    };

    // Here you would typically send this data to your payment processor
    console.log("Online donation form submitted:", formData);

    // Show success message
    alert(
      "Thank you for your donation! Your transaction has been processed successfully."
    );

    // Close modal and reset form
    document.getElementById("onlineModal").style.display = "none";
    this.reset();
  });

// Card number formatting
document.getElementById("cardNumber").addEventListener("input", function (e) {
  let value = e.target.value.replace(/\D/g, "");
  e.target.value = value;
});

// Expiry date formatting (MM/YY)
document.getElementById("cardExpiry").addEventListener("input", function (e) {
  let value = e.target.value.replace(/\D/g, "");
  if (value.length >= 2) {
    value = value.slice(0, 2) + "/" + value.slice(2, 4);
  }
  e.target.value = value;
});

// CVV formatting
document.getElementById("cardCVV").addEventListener("input", function (e) {
  let value = e.target.value.replace(/\D/g, "");
  e.target.value = value;
});
