document.addEventListener('DOMContentLoaded', () => {
    const styles = ['style1', 'style2', 'style3'];
    const randomStyle = styles[Math.floor(Math.random() * styles.length)];

    const composition = document.getElementById('imageComposition');
    if (composition) {
        composition.classList.add(randomStyle);
        const images = composition.querySelectorAll('img');

        images.forEach((img, index) => {
            setTimeout(() => {
                img.classList.add('show');
                img.classList.add('animate-in');
            }, 250 * index);

        });
    }

    console.log("active style " + randomStyle);
});