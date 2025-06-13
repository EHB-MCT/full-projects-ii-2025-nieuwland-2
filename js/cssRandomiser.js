document.addEventListener('DOMContentLoaded', () => {
    const styles = ['style1', 'style2', 'style3'];
    // const styles = ['style2']; //set style for testing
    const randomStyle = styles[Math.floor(Math.random() * styles.length)];

    const composition = document.getElementById('imageComposition');
    if (composition) {
        composition.classList.add(randomStyle);
        const images = composition.querySelectorAll('img');

        images.forEach((img, index) => {
            // Delay increases per image for build effect
            setTimeout(() => {
                img.classList.add('show');
            }, 300 * index); // 300ms stagger
        });
    }

    console.log("active style " + randomStyle);
});