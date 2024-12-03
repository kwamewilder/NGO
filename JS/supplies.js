// Handle supplies donation form submission
document
  .getElementById("suppliesDonationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Collect form data
    const formData = {
      name: document.getElementById("donorName").value,
      phone: document.getElementById("donorPhone").value,
      email: document.getElementById("donorEmail").value,
      address: document.getElementById("pickupAddress").value,
      supplyType: document.getElementById("supplyType").value,
      description: document.getElementById("suppliesDescription").value,
      condition: document.getElementById("condition").value,
      pickupDate: document.getElementById("pickupDate").value,
      pickupTime: document.getElementById("pickupTime").value,
      notes: document.getElementById("additionalNotes").value,
    };

    // Here you would typically send this data to your server
    console.log("Supplies donation form submitted:", formData);

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

// Show/hide additional fields based on supply type
document.getElementById("supplyType").addEventListener("change", function (e) {
  const value = e.target.value;
  const descriptionField = document.getElementById("suppliesDescription");

  // Update placeholder based on selected type let placeholderText = 'Please describe the types and quantities of supplies you\'re donating';

  switch (value) {
    case "medical":
      placeholderText =
        "Please list medical supplies (e.g., bandages, gloves, masks) and their quantities";
      break;
    case "educational":
      placeholderText =
        "Please list educational materials (e.g., books, stationery) and their quantities";
      break;
    case "household":
      placeholderText =
        "Please list household items (e.g., kitchen supplies, bedding) and their quantities";
      break;
    case "hygiene":
      placeholderText =
        "Please list hygiene products (e.g., soap, sanitizer) and their quantities";
      break;
  }

  descriptionField.placeholder = placeholderText;
});
