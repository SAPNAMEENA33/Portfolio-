 // Instant removal of welcome screen
    setTimeout(() => {
      document.querySelector('.welcome-screen').remove();
    }, 500);

    // Highlight active navbar link on click
    document.querySelectorAll("nav ul li a").forEach(link => {
      link.addEventListener("click", function() {
        document.querySelectorAll("nav ul li a").forEach(nav => nav.classList.remove("active"));
        this.classList.add("active");
      });
    });

    // Resume Upload (Mock Function)
    function uploadResume() {
      alert("Resume Upload Feature Coming Soon!");
    }