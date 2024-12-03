// Handle clothes donation form submission
document
  .getElementById("clothesDonationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Collect form data
    const formData = {
      name: document.getElementById("donorName").value,
      phone: document.getElementById("donorPhone").value,
      email: document.getElementById("donorEmail").value,
      address: document.getElementById("pickupAddress").value,
      description: document.getElementById("clothesDescription").value,
      pickupDate: document.getElementById("pickupDate").value,
      pickupTime: document.getElementById("pickupTime").value,
      notes: document.getElementById("additionalNotes").value,
    };

    // Here you would typically send this data to your server
    console.log("Clothes donation form submitted:", formData);

    // Show success message
    alert(
      "Thank you for your donation! We will contact you soon to confirm the pickup details."
    );

    // Reset form
    this.reset();
  });

// Set minimum date to tomorrow for pickup
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
document.getElementById("pickupDate").min = tomorrow
  .toISOString()
  .split("T")[0];
