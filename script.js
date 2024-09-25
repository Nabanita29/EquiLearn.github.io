function displayScholarshipForm() {
    const form = document.getElementById('scholarship-form');
    if (form.style.display === 'none') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
}


document.getElementById('applyBtn').addEventListener('click', function() {
    const form = document.getElementById('scholarship-form');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
});
