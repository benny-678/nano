function changeActive(element) {
    // Remove 'active' class from all elements
    document.querySelectorAll('.bottom-nav-item').forEach(item => {
        item.classList.remove('active');
    });

    // Add 'active' class to the clicked element
    element.classList.add('active');
}
