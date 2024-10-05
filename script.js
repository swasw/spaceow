document.getElementById('toggleLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor click behavior
    const widget = document.getElementById('widget');
    widget.classList.toggle('hidden'); // Toggle the hidden class
});
