document.getElementById('download-btn').addEventListener('click', function () {
    const link = document.createElement('a');
    link.href = 'mysetup.exe'; // Replace with the actual file path
    link.download = 'mysetup.exe';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Display the collected data (this can be replaced with sending data to a server)
    alert(`Thank you for contacting us, ${name}!\nWe will reach out to you at ${email} or ${phone}.`);

    // Optionally, reset the form
    e.target.reset();
});
