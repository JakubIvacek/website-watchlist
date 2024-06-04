function togglePasswordVisibility() {
    const passwordField = document.getElementById('password');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        document.getElementById('password-toggle').src = "img/hidden.png"
    } else {
        passwordField.type = 'password';
        document.getElementById('password-toggle').src = "img/eye.png"
    }
}
function togglePasswordVisibilityRegister() {
    const passwordField = document.getElementById('password-toggle2');
    const passwordField2 = document.getElementById('password-toggle3');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        passwordField2.type = 'text';
        document.getElementById('password-togg').src = "img/hidden.png"
    } else {
        passwordField.type = 'password';
        passwordField2.type = 'password';
        document.getElementById('password-togg').src = "img/eye.png"
    }
}