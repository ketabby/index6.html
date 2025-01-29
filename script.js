document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Dummy credentials for demonstration purposes
    const credentials = {
        'user1': 'password1',
        'user2': 'password2'
    };

    // Check if the entered username and password match the dummy credentials
    if (credentials[username] && credentials[username] === password) {
        // Store the username in local storage
        localStorage.setItem('username', username);

        // Redirect to the welcome page
        window.location.href = 'welcome.html';
    } else {
        alert('Invalid username or password!');
    }
});