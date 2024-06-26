const togglePassword = document.getElementById('togglePassword');
togglePassword

function togglePasswordVisibilityRegister() {
    const passwordField = document.getElementById('password-toggle2');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        togglePassword.className = "fas fa-eye-slash toggle-password";
    } else {
        passwordField.type = 'password';
        togglePassword.className = "fas fa-eye toggle-password";
    }
}