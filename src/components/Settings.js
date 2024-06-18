function updateSettings() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = {
        username: username,
        email: email,
        password: password
    };

    fetch('/api/settings', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Settings updated successfully');
            } else {
                alert('Failed to update settings: ' + data.message);
            }
        })
        .catch(error => console.error('Error:', error));
}
