let selectedIndex = -1;

document.addEventListener('keydown', function(e) {
    // Open search with "/" key
    if (e.key === '/') {
        e.preventDefault();
        document.querySelector('.search-modal').style.display = 'flex';
        document.getElementById('search-input').focus();
    }
    // Close with "Escape"
    if (e.key === 'Escape') {
        document.querySelector('.search-modal').style.display = 'none';
    }

    const results = document.querySelectorAll('#search-results li');
    if (results.length > 0) {
        if (e.key === 'ArrowDown') {
            selectedIndex = (selectedIndex + 1) % results.length;
            updateSelection(results);
        } else if (e.key === 'ArrowUp') {
            selectedIndex = (selectedIndex - 1 + results.length) % results.length;
            updateSelection(results);
        } else if (e.key === 'Enter' && selectedIndex > -1) {
            window.location.href = results[selectedIndex].querySelector('a').href;
        }
    }
});

function updateSelection(items) {
    items.forEach((item, index) => {
        item.classList.toggle('selected', index === selectedIndex);
    });
}