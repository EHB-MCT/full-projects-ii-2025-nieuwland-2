document.addEventListener('DOMContentLoaded', () => {
    // const styles = ['style1', 'style2', 'style3'];
    const styles = ['style1']; //set style for testing
    const randomStyle = styles[Math.floor(Math.random() * styles.length)];

    const composition = document.getElementById('imageComposition');
    if (composition) {
        composition.classList.add(randomStyle);
    }

    console.log("active style " + randomStyle);
});