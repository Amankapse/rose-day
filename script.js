document.addEventListener('DOMContentLoaded', function () {
    const roseBtn = document.getElementById('roseBtn');
    const dialog = document.getElementById('dialog');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');

    roseBtn.addEventListener('click', function () {
        dialog.style.display = 'block';
    });

    yesBtn.addEventListener('click', function () {
        dialog.style.display = 'none';
        window.location.href = 'page2.html'; // Redirect to page2.html
    });

    noBtn.addEventListener('click', function () {
        dialog.style.display = 'none';
        alert('No not Availaible, Please try again.'); // Show alert if "No" is clicked
    });
});
