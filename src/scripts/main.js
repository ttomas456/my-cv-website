document.addEventListener('DOMContentLoaded', () => {
    const contactLinks = document.querySelectorAll('#contact a');
    contactLinks.forEach(link => {
        link.addEventListener('click', () => {
            alert(`You're visiting ${link.innerText}!`);
        });
    });
});