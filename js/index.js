document.addEventListener('DOMContentLoaded', () => {
    const styles = ['style1', 'style2', 'style3'];
  //  const styles = ['style3']; //set style for testing
    const randomStyle = styles[Math.floor(Math.random() * styles.length)];

    const composition = document.getElementById('imageComposition');
    if (composition) {
        composition.classList.add(randomStyle);
        const images = composition.querySelectorAll('img');

        images.forEach((img, index) => {
            // Delay increases per image for build up effect
            setTimeout(() => {
                // add css class for desired effect(animation)
                img.classList.add('show');
                img.classList.add('animate-in');
            }, 250 * index); // ms stagger
            // https://stackoverflow.com/questions/33895884/staggered-animation-using-settimeout-is-choppy
        });
    }

    console.log("active style " + randomStyle);
});