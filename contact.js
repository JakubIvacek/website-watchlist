document.addEventListener("DOMContentLoaded", function() {
    fetch('contact_modal.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('modalContainer').innerHTML = data;
        })
        .catch(error => console.error('Error loading modal:', error));
});