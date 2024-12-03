//Keep it on top
//header and footer for all pages
//make sure to link this file to your page to have the header and footer
class SpecialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header>
            <nav class="navbar">
            <div class="logo">
            <a href="index.html"><img src="./Media/logo.svg" alt="Char-E-T Logo" class="logo-img"></a>
            </div>
            <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="about_us.html">About Us</a></li>
            <li><a href="#contactForm">Contact Us</a></li>
            <li class="dropdown">
            <a href="#" class="dropdown-trigger">Our Activities <i class="fas fa-chevron-down"></i></a>
                        <ul class="dropdown-menu">
                            <li><a href="projects.html">Projects</a></li>
                            <li><a href="events.html">Events</a></li>
                        </ul>
                    </li>
                    <li><a href="services.html">Services</a></li>
                </ul>
                <div class="nav-buttons">
                    <a href="donate-main.html"><button  class="btn donate-btn">Donate</button></a>
                    <a href="volunteer.html"><button class="btn volunteer-btn">Volunteer</button></a>
                    <div class="profile-dropdown">
                        <i class="fas fa-user profile-icon"></i>
                        <div class="profile-dropdown-content">
                            <a href="profile.html">Profile</a>
                            <a href="login.html">Login</a>
                            <a href="create_acc.html">Create Account</a>
                            <a href="admin.html">Admin page</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>`;
  }
}
class SpecialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <footer>
        <div class="footer-content">
            <div class="footer-info">
            <img src="./Media/logo.svg" alt="Char-E-T Logo" class="footer-logo">
                <div class="contact-info">
                    <h3>Contact Information</h3>
                    <p><i class="fas fa-map-marker-alt"></i> 123 Charity Street, City, Country</p>
                    <p><i class="fas fa-phone"></i> +1 234 567 890</p>
                    <p><i class="fas fa-envelope"></i> info@char-e-t.org</p>
                </div>
            </div>
            
            <div class="contact-form">
            <label for="name"><h3>Send us a Message</h3></label>
                <form id="contactForm">
                    <div class="form-group">
                        <input type="text" id="name" name="name" placeholder="Your Name" required>
                    </div>
                    <div class="form-group">
                        <input type="email" id="email" name="email" placeholder="Your Email" required>
                        </div>
                    <div class="form-group">
                        <textarea id="message" name="message" placeholder="Your Message" required></textarea>
                    </div>
                    <button type="submit" class="btn send-btn">Send Message</button>
                    </form>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 Char-E-T. All rights reserved.</p>
            </div>
    </footer>`;
  }
}

customElements.define("our-header", SpecialHeader);
customElements.define("our-footer", SpecialFooter);

// Handle contact form submission in footer
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // const name = document.getElementById('name').value;
  // const email = document.getElementById('email').value;
  // const message = document.getElementById('message').value;

  // Here you would typically send this data to your server
  // console.log('Form submitted:', { name, email, message });

  // Clear the form
  this.reset();

  // Show success message
  alert("Thank you for your message! We will get back to you soon.");
});
