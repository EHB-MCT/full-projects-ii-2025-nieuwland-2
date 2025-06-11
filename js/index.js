// canvas setup:
let canvas = document.querySelector("canvas");
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
// replace "window" with getElementById() voor de div title
// zodat het aleen wordt toegepast op die div (moest dit werken dan kan diet aangepast naar volledige pagina)
canvas.height = window.innerHeight;

let width = window.innerWidth;
let height = window.innerHeight;
// user device
let device = "phone";
let imageDencity = 0;

const mobileImages = [];
const desktopImages = [];

init(){

    let deviceArray = mobileImages;

    // load images into the array
    mobileImages.forEach(element => {
        `mobileImages.nameImg${element}`

    });

    desktopImages.forEach(element => {

    });

    console.log(mobileImages);
    console.log(desktopImages);
    // check if the website is being vieuwed on a phone or a web browser.
    if (width <= 480) { // phone
        console.log("this is a phone");
        // Load "mobileImages" list
        device == "phone";
        maxImageDencity == 4;

    } else {  // desktop
        console.log("this is a computer");
        // Load "desktopImages" list
        device == "computer";
        maxImageDencity == 8;
        deviceArray == desktopImages;

    }



    console.log(device);
    renderImages(deviceArray, maxImageDencity);

}



function renderImages(array, count) {
    // render the images based on randomised x and y coordinate
    for (let i = 0; i < count; i++) {
        let imgLocation = array[i];

        // random pos for images
        const x = Math.random() * (canvasWidth);
        const y = Math.random() * (canvasHeight);

        context.drawImage(imgLocation, x, y)
    }
}



init();
console.log("hello world")