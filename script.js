document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const countdownDiv = document.getElementById('countdown');
    const datetimeInput = document.getElementById('datetimeInput');

    let countdownInterval;

    const startCountdown = () => {
        clearInterval(countdownInterval);

        const targetDate = new Date(datetimeInput.value).getTime();

        countdownInterval = setInterval(() => {
            const now = new Date().getTime();
            const timeRemaining = targetDate - now;

            if (timeRemaining <= 0) {
                clearInterval(countdownInterval);
                countdownDiv.textContent = 'Time\'s up!';
            } else {
                const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

                countdownDiv.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
            }
        }, 1000);
    };

    startButton.addEventListener('click', startCountdown);
});
