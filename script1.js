document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.getElementById('progressBar');
    const startButton = document.getElementById('startButton');
    
    let width = 0;

    startButton.addEventListener('click', () => {
        if (width >= 100) {
            width = 0;  // Reset to 0 if already full
        }

        const interval = setInterval(() => {
            if (width >= 100) {
                clearInterval(interval);
                return;
            }
            width += 1; // Increase width by 1%
            progressBar.style.width = width + '%';
            progressBar.textContent = width + '%';
        }, 100); // Update every 100 milliseconds
    });
});