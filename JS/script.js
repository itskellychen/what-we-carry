// Scroll back to top button learned from: https://youtu.be/M30IUCL7oF4
// Get the button
const myButton = document.getElementById('myBtn');

// When user scrolls down 500px from top of document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction () {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        myButton.style.display = "block";
    }
    else {
        myButton.style.display = "none";
    }
}

// When user clicks on the button, scroll to top of document
myButton.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})