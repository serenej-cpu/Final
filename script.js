// Interactive CV/Autobiography Toggle Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Get all section containers
    const sectionContainers = document.querySelectorAll('.section-container');

    // Function to set container height based on active layer
    function setContainerHeight(container) {
        const activeLayer = container.querySelector('.cv-layer.active, .personal-layer.active');
        if (activeLayer) {
            const contentHeight = activeLayer.scrollHeight;
            // Set exact height to allow both growing and shrinking
            container.style.height = contentHeight + 'px';
        }
    }

    // Set initial heights
    sectionContainers.forEach(container => {
        setContainerHeight(container);

        // Add event listeners to each section
        // Click event
        container.addEventListener('click', function() {
            toggleSection(this);
        });

        // Keyboard events (Enter and Space)
        container.addEventListener('keydown', function(event) {
            // Check if Enter (13) or Space (32) key was pressed
            if (event.keyCode === 13 || event.keyCode === 32) {
                event.preventDefault(); // Prevent page scroll on Space
                toggleSection(this);
            }
        });
    });

    // Toggle function
    function toggleSection(container) {
        const cvLayer = container.querySelector('.cv-layer');
        const personalLayer = container.querySelector('.personal-layer');
        const isExpanded = container.getAttribute('aria-expanded') === 'true';

        if (isExpanded) {
            // Switch back to CV layer
            cvLayer.classList.add('active');
            personalLayer.classList.remove('active');
            container.setAttribute('aria-expanded', 'false');
        } else {
            // Switch to Personal layer
            cvLayer.classList.remove('active');
            personalLayer.classList.add('active');
            container.setAttribute('aria-expanded', 'true');
        }

        // Update container height immediately and after a small delay to ensure proper rendering
        setContainerHeight(container);
        setTimeout(function() {
            setContainerHeight(container);
        }, 100);
    }

    // Recalculate heights on window resize
    window.addEventListener('resize', function() {
        sectionContainers.forEach(container => {
            setContainerHeight(container);
        });
    });

    // Optional: Add smooth scroll behavior for skip link
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
        skipLink.addEventListener('click', function(e) {
            e.preventDefault();
            const mainContent = document.querySelector('#main-content');
            if (mainContent) {
                mainContent.focus();
                mainContent.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});