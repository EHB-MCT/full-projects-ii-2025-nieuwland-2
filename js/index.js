// canvas setup:
let canvas = document.querySelector("canvas");
let context = canvas.getContext('2d');

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

function init() {

    let deviceArray = mobileImages;

    // check if the website is being vieuwed on a phone or a web browser.
    if (width <= 480) { // phone
        console.log("this is a phone");
        // Load "mobileImages" list
        device = "phone";
        imageDencity = 4;

    } else {  // desktop
        console.log("this is a computer");
        // Load "desktopImages" list
        device = "computer";
        imageDencity = 8;
        deviceArray = desktopImages;

    }

    // load images into the array
    for (let i = 0; i < imageDencity + 1; i++) {

        if (device == "phone") {
            mobileImages.push(`images/imagesJS/element${i}.png`);
        } else if (device == "computer") {
            desktopImages.push(`images/imagesJS/element${i}.png`);
        }
    }

    console.log(mobileImages);
    console.log(desktopImages);

    console.log(device);
    renderImages(deviceArray, imageDencity);
}


function renderImages(array, count) {



    // render the images based on randomised x and y coordinate
    for (let i = 0; i < count; i++) {
        let imgLocation = array[i];
        let rotateAngle = getRandomAngleRad();
        //const minScale = 0.3;                                         Better way to make it changeble so that it works better for multiple developers
        //const scalz = Math.random() + minScale                        
        let scaleNumber = Math.min(0.9, Math.max(0.3, window.innerWidth / 750));
        // img size scaling depending on the device (this way I can use the same img for both desktop and phone)
        //max, min, min;
        console.log(imgLocation)
        let img = new Image()

        let x = Math.random() * (width);
        let y = Math.random() * (height);
        img.addEventListener('load', () => {   // Waits on the loading of the img
            context = canvas.getContext('2d')

            // console.log(img.width);
            // console.log(scaleNumber);
            console.log(img);
            // random pos for images

            // console.log("x is " + x);
            // console.log("the widht is " + width);


            if (x >= width) {
                x -= 20;
            }
            if (y >= height) {
                y -= 20
            }
            console.log("x is " + x);

            context.scale(scaleNumber, scaleNumber);
            context.translate(x / scaleNumber, y / scaleNumber) // this places the theoretical cursor (point where the img is drawn) in the middle of the image
            // add /scaleNumber to adjust for scaled coordinate system (translate is affected by scale).
            context.rotate(rotateAngle);
            context.drawImage(img, -img.width / 2, -img.height / 2)
        })
        img.src = imgLocation
        console.log({ imgLocation });
        console.log({ img });
        console.log({ scaleNumber });
        console.log({ rotateAngle });
        console.log({ x, y });





    }
}

//funcion to make sure the elements do not get over rotated and end up upside down.
function getRandomAngleBetween300And60() {
    // Choose either the upper or lower segment
    if (Math.random() < 0.5) {
        // Range: 300°–360°
        return 310 + Math.random() * 50;
    } else {
        // Range: 0°–60°
        return Math.random() * 50;
    }
}
// make the ° => RAD for use in the rotate function.
function getRandomAngleRad() {
    let deg = getRandomAngleBetween300And60();
    return deg * (Math.PI / 180); // convert to radians
}

init();
