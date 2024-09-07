const togglePassword = document.getElementById('togglePassword');
togglePassword.addEventListener('click', togglePasswordVisibilityRegister);

function togglePasswordVisibilityRegister() {
    const passwordField = document.getElementById('password-toggle2');
    const passwordField2 = document.getElementById('password-toggle3');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        togglePassword.className = "fas fa-eye-slash toggle-password icon-toggle";
        if(passwordField2 != null){
            passwordField2.type = 'text';
        }
    } else {
        passwordField.type = 'password';
        togglePassword.className = "fas fa-eye toggle-password icon-toggle";
        if(passwordField2 != null){
            passwordField2.type = 'password';
        }
    }
}