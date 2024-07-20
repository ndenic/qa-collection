document.addEventListener('DOMContentLoaded', () => {
    // Search functionality
    document.getElementById('searchBar').addEventListener('input', function() {
        const searchValue = this.value.toLowerCase();
        const sections = document.querySelectorAll('.section-content');
    
        sections.forEach(section => {
            const links = section.querySelectorAll('a');
            let sectionVisible = false;
    
            links.forEach(link => {
                if (link.textContent.toLowerCase().includes(searchValue)) {
                    link.style.display = 'block';
                    sectionVisible = true;
                } else {
                    link.style.display = 'none';
                }
            });
    
            section.style.display = sectionVisible ? 'block' : 'none';
        });
    });

    // Popup functionality
    function showPopup() {
        const popup = document.createElement('div');
        popup.className = 'retro-popup';
        popup.innerHTML = `
            <div class="retro-popup-content">
                <span class="retro-popup-close">&times;</span>
                <p>Please don't look for bugs here, I am not the best Front End developer as you can see.</p>
            </div>
        `;
        document.body.appendChild(popup);

        const closeButton = popup.querySelector('.retro-popup-close');
        closeButton.addEventListener('click', () => {
            popup.style.display = 'none';
        });

        // Display the popup after 2 seconds
        setTimeout(() => {
            popup.style.display = 'block';
        }, 2000);
    }

    showPopup();
});
