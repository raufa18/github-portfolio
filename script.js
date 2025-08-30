document.addEventListener('DOMContentLoaded', function() {
    const skillsList = document.querySelector('#skills ul');
    const toggleButton = document.getElementById('toggle-skills');

    toggleButton.addEventListener('click', function() {
        if (skillsList.style.display === 'none') {
            skillsList.style.display = 'block';
            toggleButton.textContent = 'Hide Skills';
        } else {
            skillsList.style.display = 'none';
            toggleButton.textContent = 'Show Skills';
        }
    });
});