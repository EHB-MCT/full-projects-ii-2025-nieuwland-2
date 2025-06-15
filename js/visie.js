

function init() {
    filter();
}


function filter() {
    document.querySelector(".button-1").addEventListener('click', function () {
        console.log("This is button 1");
    });

    document.querySelector(".button-2").addEventListener('click', function () {
        console.log("This is button 2");
    });

    document.querySelector(".button-3").addEventListener('click', function () {
        console.log("This is button 3");
    });
}


init();